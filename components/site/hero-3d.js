"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Hero3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene, camera, renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x08061a, 7, 15);
    const camera = new THREE.PerspectiveCamera(45, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 5.5);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.35));
    const l1 = new THREE.PointLight(0xB57BFF, 3.5, 40); l1.position.set(6, 6, 5); scene.add(l1);
    const l2 = new THREE.PointLight(0x6F2DBD, 2, 40); l2.position.set(-6, -3, -4); scene.add(l2);
    const l3 = new THREE.PointLight(0xffffff, 0.6, 20); l3.position.set(0, 0, 5); scene.add(l3);

    // Central "distortion" blob - icosahedron with per-vertex noise
    const blobGeo = new THREE.IcosahedronGeometry(1.4, 32);
    const originalPos = blobGeo.attributes.position.array.slice();
    const blobMat = new THREE.MeshStandardMaterial({
      color: 0x8E3FD4,
      roughness: 0.15,
      metalness: 0.55,
      emissive: 0x3a1266,
      emissiveIntensity: 0.5,
      flatShading: false,
    });
    const blob = new THREE.Mesh(blobGeo, blobMat);
    scene.add(blob);

    // Orbiting shapes
    const orbitConfigs = [
      { radius: 2.6, y: 0.6, color: 0xB57BFF, speed: 0.35, size: 0.28, geo: "knot", phase: 0 },
      { radius: 3.2, y: -0.4, color: 0x8E3FD4, speed: 0.22, size: 0.22, geo: "torus", phase: 2 },
      { radius: 2.3, y: -0.15, color: 0xffffff, speed: 0.55, size: 0.13, geo: "sphere", phase: 4 },
      { radius: 3.7, y: 0.9, color: 0xE8CCFF, speed: 0.15, size: 0.16, geo: "sphere", phase: 1.2 },
      { radius: 2.9, y: -0.7, color: 0xD9B8FF, speed: 0.42, size: 0.10, geo: "sphere", phase: 3.2 },
    ];
    const orbits = orbitConfigs.map((c) => {
      let g;
      if (c.geo === "knot") g = new THREE.TorusKnotGeometry(c.size, c.size * 0.28, 100, 16);
      else if (c.geo === "torus") g = new THREE.TorusGeometry(c.size, c.size * 0.3, 24, 64);
      else g = new THREE.SphereGeometry(c.size, 32, 32);
      const m = new THREE.Mesh(g, new THREE.MeshStandardMaterial({
        color: c.color, roughness: 0.15, metalness: 0.85,
        emissive: c.color, emissiveIntensity: 0.2,
      }));
      scene.add(m);
      return { mesh: m, ...c };
    });

    // Particles
    const N = 550;
    const positions = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    const partGeo = new THREE.BufferGeometry();
    partGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const partMat = new THREE.PointsMaterial({
      color: 0xB57BFF, size: 0.028, sizeAttenuation: true,
      transparent: true, opacity: 0.75, depthWrite: false,
    });
    const particles = new THREE.Points(partGeo, partMat);
    scene.add(particles);

    // Group for mouse-follow rotation
    const stage = new THREE.Group();
    // Note: can't add children already in scene, so re-parent
    scene.remove(blob);
    stage.add(blob);
    orbits.forEach((o) => { scene.remove(o.mesh); stage.add(o.mesh); });
    scene.add(stage);

    // Mouse
    const mouse = { x: 0, y: 0 };
    const onMove = (e) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    // Resize
    const onResize = () => {
      if (!mount) return;
      const w = mount.clientWidth, h = mount.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onResize);

    // Simple 3D noise (Perlin-ish based on sin/cos)
    const noise = (x, y, z, t) => {
      return (Math.sin(x * 2 + t) * Math.cos(y * 2 + t * 0.7) * Math.sin(z * 2 + t * 0.5)) * 0.5
        + (Math.sin(x * 4 - t * 1.3) * Math.cos(z * 4 + t)) * 0.25;
    };

    // Animation loop
    const clock = new THREE.Clock();
    let raf = 0;
    let running = true;
    const animate = () => {
      if (!running) return;
      const t = clock.getElapsedTime();

      // Vertex displacement on the blob (distortion effect)
      const pos = blob.geometry.attributes.position.array;
      for (let i = 0; i < pos.length; i += 3) {
        const ox = originalPos[i], oy = originalPos[i + 1], oz = originalPos[i + 2];
        const n = noise(ox, oy, oz, t * 0.6);
        const factor = 1 + n * 0.32;
        pos[i] = ox * factor;
        pos[i + 1] = oy * factor;
        pos[i + 2] = oz * factor;
      }
      blob.geometry.attributes.position.needsUpdate = true;
      blob.geometry.computeVertexNormals();

      blob.rotation.y += 0.003;
      blob.rotation.x += 0.0015;

      // Orbit shapes
      orbits.forEach((o) => {
        const tt = t * o.speed + o.phase;
        o.mesh.position.x = o.radius * Math.cos(tt);
        o.mesh.position.z = o.radius * Math.sin(tt);
        o.mesh.position.y = o.y + Math.sin(tt * 2) * 0.4;
        o.mesh.rotation.x = tt * 1.2;
        o.mesh.rotation.y = tt * 0.9;
      });

      particles.rotation.y += 0.0005;
      particles.rotation.x += 0.0002;

      // Mouse-follow rotation on the whole stage
      stage.rotation.x += (mouse.y * 0.22 - stage.rotation.x) * 0.05;
      stage.rotation.y += (mouse.x * 0.35 - stage.rotation.y) * 0.05;

      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      blob.geometry.dispose(); blob.material.dispose();
      partGeo.dispose(); partMat.dispose();
      orbits.forEach((o) => { o.mesh.geometry.dispose(); o.mesh.material.dispose(); });
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
}
