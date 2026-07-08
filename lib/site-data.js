import {
  Globe, ShoppingBag, Layers, Smartphone, Code2, Search, Megaphone, Users2, Mail, PenTool,
  Sparkles, Palette, Play, Star, Bot, Zap, LineChart,
  Heart, GraduationCap, Plane, Building2, UtensilsCrossed, Landmark, Factory, Car, Store,
  Scissors, Scale, HandHeart, Rocket, Gem, Calendar, Cpu, Rss
} from "lucide-react";

/* ===================== MEGA MENU DATA (used by Navbar) ===================== */
export const serviceMegaColumns = [
  { title: "Development", color: "from-fuchsia-500 to-purple-600", items: [
    { icon: Globe, name: "Website Development", slug: "website-development", desc: "Static · Dynamic · Corporate" },
    { icon: ShoppingBag, name: "Ecommerce Development", slug: "ecommerce-development", desc: "Shopify · WooCommerce · Custom" },
    { icon: Layers, name: "CMS Development", slug: "cms-development", desc: "WordPress · Webflow · Headless" },
    { icon: Smartphone, name: "App Development", slug: "app-development", desc: "iOS · Android · Flutter" },
    { icon: Code2, name: "Custom Web Applications", slug: "custom-web-application", desc: "SaaS · Portals · Dashboards" },
  ]},
  { title: "Marketing", color: "from-violet-500 to-indigo-600", items: [
    { icon: Search, name: "SEO", slug: "seo", desc: "Local · Technical · Enterprise" },
    { icon: Megaphone, name: "Performance Marketing", slug: "performance-marketing", desc: "Google · Meta · LinkedIn" },
    { icon: Users2, name: "Social Media Management", slug: "social-media-management", desc: "Content · Community · Growth" },
    { icon: Mail, name: "Email Marketing", slug: "email-marketing", desc: "Automation · Newsletters" },
    { icon: PenTool, name: "Content Creation", slug: "content-creation", desc: "Blogs · Copy · Strategy" },
  ]},
  { title: "Creative", color: "from-pink-500 to-rose-500", items: [
    { icon: Sparkles, name: "Branding", slug: "branding", desc: "Identity · Guidelines · Voice" },
    { icon: Palette, name: "Graphic Design", slug: "graphic-design", desc: "Print · Digital · Campaigns" },
    { icon: Layers, name: "UI/UX Design", slug: "ui-ux-design", desc: "Product · Web · Mobile" },
    { icon: Play, name: "Video Production", slug: "video-production", desc: "Ads · Reels · Corporate" },
    { icon: PenTool, name: "Reel Production", slug: "reel-production", desc: "Shorts · Reels · Stories" },
  ]},
  { title: "Growth & AI", color: "from-amber-400 to-purple-500", items: [
    { icon: Star, name: "Influencer Marketing", slug: "influencer-marketing", desc: "Micro · Macro · Celebrity" },
    { icon: Bot, name: "AI Automation", slug: "ai-automation", desc: "Chatbots · Workflows" },
    { icon: Users2, name: "CRM Solutions", slug: "crm-solutions", desc: "HubSpot · Zoho · Custom" },
    { icon: Zap, name: "WhatsApp Automation", slug: "whatsapp-automation", desc: "Broadcast · Bots · CRM" },
    { icon: LineChart, name: "Analytics & Reporting", slug: "analytics-reporting", desc: "GA4 · Looker · Dashboards" },
  ]},
];

/* ===================== INDUSTRIES ===================== */
export const industriesList = [
  { icon: Heart, name: "Healthcare", slug: "healthcare" },
  { icon: GraduationCap, name: "Education", slug: "education" },
  { icon: Plane, name: "Travel", slug: "travel" },
  { icon: Building2, name: "Real Estate", slug: "real-estate" },
  { icon: UtensilsCrossed, name: "Restaurants", slug: "restaurants" },
  { icon: Building2, name: "Hotels", slug: "hotels" },
  { icon: Landmark, name: "Finance", slug: "finance" },
  { icon: Factory, name: "Manufacturing", slug: "manufacturing" },
  { icon: Car, name: "Automobile", slug: "automobile" },
  { icon: Store, name: "Retail", slug: "retail" },
  { icon: Scissors, name: "Fashion", slug: "fashion" },
  { icon: Building2, name: "Construction", slug: "construction" },
  { icon: HandHeart, name: "NGOs", slug: "ngos" },
  { icon: Scale, name: "Law Firms", slug: "law-firms" },
  { icon: Heart, name: "Clinics", slug: "clinics" },
  { icon: Rocket, name: "Startups", slug: "startups" },
  { icon: ShoppingBag, name: "Ecommerce", slug: "ecommerce" },
  { icon: Sparkles, name: "Beauty & Salon", slug: "beauty-salon" },
  { icon: Gem, name: "Jewelry", slug: "jewelry" },
  { icon: Calendar, name: "Events", slug: "events" },
];

/* ===================== SERVICES (categories + sub-services) ===================== */
const svc = (slug, name, category, tag, desc, tech, extra = {}) => ({ slug, name, category, tag, desc, tech, ...extra });

export const services = [
  // Development
  svc("website-development", "Website Development", "Development", "Web", "Blazing-fast, SEO-first websites engineered for growth. Static, dynamic, corporate, portfolio and landing pages built on Next.js and headless architecture.", ["Next.js", "React", "TypeScript", "Tailwind", "Vercel"]),
  svc("static-website", "Static Website Development", "Development", "Web", "Ultra-fast static websites for startups, freelancers and personal brands with instant global CDN delivery and near-zero maintenance.", ["Next.js", "HTML5", "Tailwind", "Netlify"]),
  svc("dynamic-website", "Dynamic Website Development", "Development", "Web", "Content-driven dynamic websites with CMS integration, user accounts, gated content and personalization.", ["Next.js", "Node.js", "MongoDB", "GraphQL"]),
  svc("business-website", "Business Website Development", "Development", "Web", "Conversion-optimized business websites that turn visitors into qualified leads with clear CTAs, trust signals and lead magnets.", ["Next.js", "WordPress", "HubSpot"]),
  svc("corporate-website", "Corporate Website Development", "Development", "Web", "Enterprise-grade corporate websites with multi-language, multi-region, secure infrastructure and elegant executive design.", ["Next.js", "Sitecore", "AWS"]),
  svc("portfolio-website", "Portfolio Website Development", "Development", "Web", "Cinematic portfolio websites for creators, agencies and studios with premium storytelling and case study modules.", ["Next.js", "Framer", "Sanity"]),
  svc("landing-page", "Landing Page Design", "Development", "Web", "High-converting single-purpose landing pages built for ads, product launches and campaigns with A/B testing baked in.", ["Next.js", "Webflow", "Unbounce"]),
  svc("ecommerce-development", "Ecommerce Development", "Development", "Ecom", "Scalable ecommerce stores that sell 24/7. Shopify, WooCommerce and custom headless commerce that maximizes AOV and LTV.", ["Shopify", "WooCommerce", "Medusa", "Stripe"]),
  svc("custom-web-application", "Custom Web Application Development", "Development", "Web", "SaaS platforms, admin dashboards, marketplaces and internal tools engineered for scale, speed and reliability.", ["Next.js", "Node.js", "PostgreSQL", "Redis", "AWS"]),
  svc("cms-development", "CMS Development", "Development", "CMS", "Content-first websites on WordPress, Webflow, Sanity, Contentful and headless CMS — fully owned by your marketing team.", ["WordPress", "Webflow", "Sanity", "Contentful"]),
  svc("wordpress-development", "WordPress Development", "Development", "CMS", "Custom WordPress themes, plugins and WooCommerce stores with elite performance, security and SEO baked in.", ["WordPress", "WooCommerce", "PHP", "Elementor"]),
  svc("shopify-development", "Shopify Development", "Development", "Ecom", "Custom Shopify themes, app integrations, checkout extensions and Shopify Plus migrations that convert browsers into buyers.", ["Shopify", "Liquid", "Hydrogen", "Klaviyo"]),
  svc("webflow-development", "Webflow Development", "Development", "CMS", "Pixel-perfect Webflow builds with rich interactions and CMS collections that empower marketing teams to ship faster.", ["Webflow", "Finsweet", "Zapier"]),
  svc("wix-development", "Wix Development", "Development", "CMS", "Elegant Wix websites for small businesses that combine ease-of-use with premium visual polish.", ["Wix", "Velo"]),
  svc("joomla-development", "Joomla Development", "Development", "CMS", "Enterprise Joomla portals with custom components, multi-lingual capabilities and rock-solid access control.", ["Joomla", "PHP", "MySQL"]),
  svc("drupal-development", "Drupal Development", "Development", "CMS", "Complex Drupal websites for governments, universities and large enterprises with strict compliance requirements.", ["Drupal", "PHP", "Composer"]),
  svc("headless-cms", "Headless CMS Development", "Development", "CMS", "Decoupled content platforms combining Next.js frontends with Sanity, Contentful, Strapi or Storyblok for unlimited flexibility.", ["Sanity", "Contentful", "Strapi", "Storyblok"]),
  svc("app-development", "App Development", "Development", "App", "Native iOS, Android and cross-platform Flutter apps with beautiful UX and cloud backends built to scale.", ["Flutter", "Swift", "Kotlin", "Firebase"]),
  svc("android-app-development", "Android App Development", "Development", "App", "Native Android apps built with Kotlin and Jetpack Compose delivering silky-smooth 120fps experiences.", ["Kotlin", "Jetpack Compose", "Firebase"]),
  svc("ios-app-development", "iOS App Development", "Development", "App", "Native iOS apps in Swift and SwiftUI following Apple’s Human Interface Guidelines for a premium user experience.", ["Swift", "SwiftUI", "CoreData"]),
  svc("flutter-app-development", "Flutter App Development", "Development", "App", "Cross-platform Flutter apps that ship to iOS and Android from a single codebase at 60% less cost.", ["Flutter", "Dart", "Firebase", "Riverpod"]),

  // SEO
  svc("seo", "Search Engine Optimization (SEO)", "Marketing", "SEO", "Data-driven SEO that compounds. Technical, on-page, off-page and content strategy that dominates search results.", ["Ahrefs", "Semrush", "Screaming Frog", "GSC"]),
  svc("local-seo", "Local SEO Services", "Marketing", "SEO", "Rank #1 in Google Maps and local packs. Google Business Profile, citations, reviews and location pages that drive foot traffic.", ["GBP", "BrightLocal", "Whitespark"]),
  svc("technical-seo", "Technical SEO Services", "Marketing", "SEO", "Core Web Vitals, crawlability, indexation, schema and site architecture audits that unlock hidden ranking potential.", ["Screaming Frog", "Sitebulb", "GSC", "Lighthouse"]),
  svc("ecommerce-seo", "Ecommerce SEO", "Marketing", "SEO", "Product, category and collection SEO for Shopify, WooCommerce and Magento stores designed to drive organic revenue.", ["Ahrefs", "Semrush", "Shopify"]),
  svc("enterprise-seo", "Enterprise SEO", "Marketing", "SEO", "Program-level SEO for large websites: governance, prioritization, dev-workflows and dashboards trusted by CMOs.", ["BrightEdge", "Botify", "Looker"]),
  svc("keyword-research", "Keyword Research Services", "Marketing", "SEO", "Deep keyword universe mapping across search intent, difficulty, opportunity and revenue potential.", ["Ahrefs", "Semrush", "KWFinder"]),
  svc("link-building", "Link Building Services", "Marketing", "SEO", "White-hat link building through digital PR, HARO, guest posts and resource pages with authority-first outreach.", ["Pitchbox", "BuzzStream", "HARO"]),
  svc("seo-audit", "SEO Audit Services", "Marketing", "SEO", "120-point SEO audits covering technical, on-page, content, backlinks and competitor gaps with prioritized roadmaps.", ["Screaming Frog", "Ahrefs", "GSC"]),

  // Performance
  svc("performance-marketing", "Performance Marketing", "Marketing", "Ads", "Full-funnel paid media across Google, Meta, LinkedIn and YouTube engineered for ROAS with airtight conversion tracking.", ["Google Ads", "Meta", "LinkedIn", "GA4"]),
  svc("google-ads", "Google Ads Management", "Marketing", "Ads", "Google Search, Performance Max, Display, Shopping and YouTube ads that scale profitably.", ["Google Ads", "GA4", "Merchant Center"]),
  svc("meta-ads", "Meta Ads Management", "Marketing", "Ads", "Facebook & Instagram ads that combine creative testing frameworks with advanced audience layering.", ["Meta Ads Manager", "CAPI", "Motion"]),
  svc("linkedin-ads", "LinkedIn Ads Management", "Marketing", "Ads", "B2B LinkedIn ads targeting decision-makers with account-based playbooks that deliver qualified pipeline.", ["LinkedIn Campaign Manager", "HubSpot"]),
  svc("youtube-ads", "YouTube Ads Management", "Marketing", "Ads", "YouTube video ad campaigns — skippable, bumper, in-stream — built on scroll-stopping creative.", ["Google Ads", "YouTube Studio"]),
  svc("lead-generation", "Lead Generation Services", "Marketing", "Ads", "Multi-channel lead generation systems with landing pages, lead magnets and nurturing sequences.", ["HubSpot", "Zoho", "Zapier", "Make"]),
  svc("conversion-tracking", "Conversion Tracking Setup", "Marketing", "Ads", "Server-side tagging, GA4, Meta CAPI and GTM implementations for pixel-perfect attribution.", ["GTM", "GA4", "Stape", "Segment"]),

  // Social
  svc("social-media-management", "Social Media Management", "Marketing", "Social", "End-to-end social media management — strategy, content, community, growth and paid amplification.", ["Later", "Buffer", "Sprout", "Meta Suite"]),
  svc("instagram-management", "Instagram Management", "Marketing", "Social", "Reels, stories, carousels and community management that grow followers and revenue in tandem.", ["Later", "Canva", "CapCut"]),
  svc("facebook-management", "Facebook Management", "Marketing", "Social", "Facebook pages, groups and community-first content strategies that still drive massive ROI.", ["Meta Suite", "Canva"]),
  svc("linkedin-management", "LinkedIn Management", "Marketing", "Social", "Executive branding, thought leadership and content engines that turn founders into industry authorities.", ["LinkedIn", "Shield", "Taplio"]),
  svc("pinterest-management", "Pinterest Management", "Marketing", "Social", "Pinterest SEO and pin design that drive high-intent traffic to blogs, stores and lead magnets.", ["Pinterest", "Tailwind"]),
  svc("twitter-management", "Twitter (X) Management", "Marketing", "Social", "X strategy — threads, hooks, replies and content sprints that build authority and inbound leads.", ["Typefully", "Hypefury"]),

  // Creative
  svc("branding", "Branding & Identity", "Creative", "Brand", "Timeless brand identities — strategy, naming, logos, guidelines and voice — that command premium pricing.", ["Figma", "Illustrator", "After Effects"]),
  svc("graphic-design", "Graphic Design", "Creative", "Design", "Print, digital, packaging, social and campaign design that keeps every touchpoint pixel-perfect and on-brand.", ["Figma", "Illustrator", "Photoshop", "InDesign"]),
  svc("ui-ux-design", "UI/UX Design", "Creative", "Design", "Research-led product design for web and mobile with design systems and usability testing at the core.", ["Figma", "Maze", "Framer", "Principle"]),
  svc("video-production", "Video Production", "Creative", "Video", "End-to-end video production — concept, script, shoot, edit — for brand films, ads, reels and product videos.", ["Premiere Pro", "After Effects", "DaVinci", "Sony"]),
  svc("product-shoot", "Product Photography & Shoot", "Creative", "Video", "Studio-lit product photography and 360° shoots for Amazon, Flipkart, ecommerce and D2C brands.", ["Canon", "Profoto", "Photoshop"]),
  svc("corporate-shoot", "Corporate Photography", "Creative", "Video", "Executive headshots, office and team photography that elevate LinkedIn, About pages and press kits.", ["Sony", "Profoto", "Lightroom"]),
  svc("commercial-ads", "Commercial Ad Production", "Creative", "Video", "Broadcast-quality commercial ads for TV, OTT and YouTube — from creative direction to final delivery.", ["RED", "Sony FX", "DaVinci"]),
  svc("drone-shoot", "Drone Videography", "Creative", "Video", "Cinematic aerial drone footage for real estate, resorts, weddings, events and brand films.", ["DJI Mavic 3", "DJI Inspire"]),
  svc("reel-production", "Reel & Short-Form Production", "Creative", "Video", "Scroll-stopping Instagram Reels, TikToks and YouTube Shorts produced weekly at scale.", ["CapCut", "Premiere", "Sony"]),

  // Content
  svc("content-creation", "Content Creation", "Marketing", "Content", "Blogs, copy, social posts and video scripts written by senior specialists and edited by SEO experts.", ["Surfer", "Grammarly", "ChatGPT", "Notion"]),
  svc("blog-writing", "Blog Writing Services", "Marketing", "Content", "Long-form SEO blogs at scale with clusters, internal linking and E-E-A-T signals that dominate SERPs.", ["Surfer", "Ahrefs", "Frase"]),
  svc("copywriting", "Copywriting Services", "Marketing", "Content", "Website, landing page, email and ad copywriting from senior direct-response copywriters.", ["Notion", "Grammarly"]),
  svc("social-posts", "Social Media Content", "Marketing", "Content", "On-brand social posts, carousels and reels shipped weekly with unlimited revisions.", ["Canva", "Figma", "CapCut"]),
  svc("email-marketing", "Email Marketing", "Marketing", "Email", "Newsletters, welcome flows, cart abandonment and retention automations that unlock repeat revenue.", ["Klaviyo", "Mailchimp", "HubSpot", "ConvertKit"]),

  // Growth & AI
  svc("influencer-marketing", "Influencer Marketing", "Growth", "Growth", "Micro, macro and celebrity influencer campaigns with contracts, deliverables and full attribution tracking.", ["Grin", "Aspire", "BuzzGuru"]),
  svc("ai-automation", "AI Automation Services", "Growth", "AI", "Custom AI agents, GPT integrations and n8n workflows that automate marketing, sales and ops.", ["OpenAI", "n8n", "Zapier", "Make"]),
  svc("chatbots", "AI Chatbots", "Growth", "AI", "GPT-powered chatbots for websites, WhatsApp and Messenger with knowledge base training and analytics.", ["OpenAI", "Voiceflow", "Botpress"]),
  svc("crm-solutions", "CRM Solutions", "Growth", "AI", "HubSpot, Zoho and custom CRM implementations with pipelines, automations and executive dashboards.", ["HubSpot", "Zoho", "Salesforce"]),
  svc("whatsapp-automation", "WhatsApp Automation", "Growth", "AI", "WhatsApp Business API broadcasts, chatbots and CRM integrations that 3x reply rates.", ["WATI", "Interakt", "AiSensy"]),
  svc("workflow-automation", "Workflow Automation", "Growth", "AI", "n8n, Make and Zapier automations that eliminate manual work across sales, marketing and support.", ["n8n", "Make", "Zapier"]),
  svc("analytics-reporting", "Analytics & Reporting", "Growth", "AI", "GA4, Looker Studio, Mixpanel and custom dashboards with weekly reports and quarterly business reviews.", ["GA4", "Looker", "Mixpanel", "Hotjar"]),
];

export const serviceBySlug = Object.fromEntries(services.map(s => [s.slug, s]));

/* ===================== SERVICE DETAIL CONTENT GENERATOR ===================== */
/* Categorized tools by service tag — every named tool is real & industry-standard */
export const TOOL_MAP = {
  Web: [
    { name: "Frontend & UI", tools: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP", "Three.js", "shadcn/ui", "Radix UI", "React Query", "Zustand"] },
    { name: "Backend & APIs", tools: ["Node.js", "Express", "Nest.js", "tRPC", "GraphQL", "REST APIs", "WebSockets", "Prisma"] },
    { name: "Databases", tools: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Supabase", "Firebase", "PlanetScale"] },
    { name: "Cloud & Hosting", tools: ["Vercel", "AWS (EC2, S3, Lambda)", "Cloudflare", "Netlify", "Railway", "Fly.io"] },
    { name: "Design & Prototyping", tools: ["Figma", "Adobe XD", "Framer", "Photoshop", "Illustrator"] },
    { name: "DevOps & Monitoring", tools: ["GitHub", "GitHub Actions", "Docker", "Sentry", "Datadog", "LogRocket"] },
  ],
  Ecom: [
    { name: "Ecommerce Platforms", tools: ["Shopify Plus", "Shopify", "WooCommerce", "Medusa", "BigCommerce", "Magento 2", "Salesforce Commerce"] },
    { name: "Frontend & Headless", tools: ["Next.js", "Hydrogen (React)", "Liquid", "Nuxt Commerce", "React"] },
    { name: "Marketing & Retention", tools: ["Klaviyo", "Postscript", "Attentive", "Judge.me", "Loox", "Yotpo", "Rebuy", "Recharge", "Gorgias"] },
    { name: "Payments & Ops", tools: ["Stripe", "Razorpay", "PayPal", "PayU", "Shiprocket", "ShipStation", "EasyShip"] },
    { name: "Analytics & Attribution", tools: ["TripleWhale", "Northbeam", "Peel", "Lifetimely", "Elevar", "GA4"] },
  ],
  CMS: [
    { name: "Headless CMS", tools: ["Sanity", "Contentful", "Storyblok", "Strapi", "Payload CMS", "Directus", "Hygraph"] },
    { name: "Traditional CMS", tools: ["WordPress 6.7", "Drupal 10", "Joomla 5", "Ghost", "Craft CMS"] },
    { name: "Visual Builders", tools: ["Webflow", "Framer", "Wix Studio", "Squarespace", "Bricks Builder"] },
    { name: "Frontend Frameworks", tools: ["Next.js", "Nuxt 3", "Astro", "Gatsby", "Remix", "SvelteKit"] },
  ],
  App: [
    { name: "Cross-Platform", tools: ["Flutter 3.24", "React Native", "Expo", "Ionic", "Capacitor"] },
    { name: "Native iOS", tools: ["Swift 6", "SwiftUI", "Xcode 16", "TestFlight", "CoreData"] },
    { name: "Native Android", tools: ["Kotlin", "Jetpack Compose", "Android Studio", "Google Play Console", "Room"] },
    { name: "Backend-as-a-Service", tools: ["Firebase", "Supabase", "AWS Amplify", "Appwrite", "Nhost"] },
    { name: "State & Data", tools: ["Riverpod", "BLoC", "Provider", "Redux Toolkit", "React Query"] },
    { name: "Monitoring & QA", tools: ["Sentry", "Firebase Crashlytics", "Bitrise", "Fastlane", "Detox"] },
  ],
  SEO: [
    { name: "Keyword Research", tools: ["Ahrefs", "SEMrush", "Moz Pro", "Ubersuggest", "KWFinder", "AnswerThePublic", "Also Asked"] },
    { name: "Technical & Audit", tools: ["Screaming Frog", "Sitebulb", "DeepCrawl", "JetOctopus", "Botify", "Lighthouse", "PageSpeed Insights"] },
    { name: "Analytics & Reporting", tools: ["Google Search Console", "GA4", "Looker Studio", "Google Tag Manager", "Matomo", "Bing Webmaster"] },
    { name: "Content Optimization", tools: ["Surfer SEO", "Frase", "Clearscope", "MarketMuse", "Neuronwriter", "Jasper", "Copy.ai"] },
    { name: "Local SEO & Reviews", tools: ["Google Business Profile", "BrightLocal", "Whitespark", "Moz Local", "Yext", "GatherUp"] },
    { name: "Rank Tracking", tools: ["AccuRanker", "Ahrefs Rank Tracker", "SE Ranking", "Nightwatch"] },
    { name: "Link Building & Outreach", tools: ["Pitchbox", "BuzzStream", "HARO", "Respona", "Postaga", "Hunter.io"] },
    { name: "Schema & Markup", tools: ["Schema.org", "Merkle Schema Generator", "Rank Math", "Yoast SEO Premium"] },
  ],
  Ads: [
    { name: "Google Ads", tools: ["Google Ads", "Google Ads Editor", "Performance Max", "Google Merchant Center", "Optmyzr", "Adalysis", "SA360"] },
    { name: "Meta (Facebook & Instagram)", tools: ["Meta Ads Manager", "Meta Business Suite", "Meta Conversions API", "Advantage+ Shopping", "Meta Pixel"] },
    { name: "LinkedIn / B2B", tools: ["LinkedIn Campaign Manager", "LinkedIn Sales Navigator", "Apollo.io", "Lusha", "6sense"] },
    { name: "YouTube / Video Ads", tools: ["Google Ads (YouTube)", "YouTube Studio", "TrueView", "VidIQ"] },
    { name: "Tracking & Attribution", tools: ["GA4", "Google Tag Manager", "Server-Side GTM (Stape)", "Segment", "TripleWhale", "Northbeam", "Hyros"] },
    { name: "Creative Ops", tools: ["Foreplay", "Motion", "Atria", "Canva Pro", "Adobe Creative Cloud", "CapCut Pro"] },
    { name: "Landing Pages & CRO", tools: ["Unbounce", "Instapage", "Leadpages", "Webflow", "Hotjar", "Microsoft Clarity", "VWO", "Convert"] },
  ],
  Social: [
    { name: "Scheduling & Publishing", tools: ["Later", "Buffer", "Sprout Social", "Hootsuite", "Publer", "Metricool", "SocialBee"] },
    { name: "Content Creation", tools: ["Canva Pro", "Figma", "CapCut Pro", "Adobe Premiere", "After Effects", "Photoshop"] },
    { name: "Analytics", tools: ["Meta Business Suite", "LinkedIn Analytics", "Sprout Social", "Iconosquare", "Not Just Analytics"] },
    { name: "Influencer & UGC", tools: ["Grin", "Aspire", "Modash", "Insense", "Billo", "CreatorIQ"] },
    { name: "Community & Engagement", tools: ["Circle", "Discord", "Slack", "Bevy", "Mighty Networks"] },
  ],
  Brand: [
    { name: "Design", tools: ["Figma", "Adobe Illustrator", "Photoshop", "InDesign", "Affinity Designer"] },
    { name: "Motion & 3D", tools: ["After Effects", "Cinema 4D", "Blender", "Spline", "Rive", "Lottie"] },
    { name: "AI Creative", tools: ["Midjourney", "Runway ML Gen-3", "DALL-E 3", "Adobe Firefly", "Ideogram", "Krea AI"] },
    { name: "Prototyping & Delivery", tools: ["Framer", "ProtoPie", "Frame.io", "Zeplin", "Notion", "Loom"] },
    { name: "Type & Icons", tools: ["Adobe Fonts", "Google Fonts", "Type.today", "Iconoir", "Lucide", "Phosphor"] },
  ],
  Design: [
    { name: "UI Design", tools: ["Figma", "Sketch", "Adobe XD", "Penpot"] },
    { name: "Prototyping", tools: ["Framer", "ProtoPie", "Principle", "Origami Studio"] },
    { name: "Research & Testing", tools: ["Maze", "Hotjar", "Microsoft Clarity", "UserTesting", "Dovetail", "Lookback"] },
    { name: "Handoff & Docs", tools: ["Figma Dev Mode", "Zeplin", "Storybook", "Notion", "Zeroheight"] },
    { name: "Motion & Micro-interactions", tools: ["Framer", "After Effects", "Lottie", "Rive", "Haiku"] },
  ],
  Video: [
    { name: "Editing", tools: ["Adobe Premiere Pro", "DaVinci Resolve Studio", "Final Cut Pro X", "CapCut Pro"] },
    { name: "Motion Graphics & 3D", tools: ["After Effects", "Cinema 4D", "Blender", "Motion Array", "Element 3D"] },
    { name: "Cameras", tools: ["Sony FX3", "Sony A7S III", "Canon R5 C", "RED Komodo 6K", "Blackmagic Pocket 6K", "ARRI Alexa Mini"] },
    { name: "Lenses", tools: ["Sony G Master", "Sigma Art", "Canon RF L", "Zeiss CP.3", "DZO Cine"] },
    { name: "Drones", tools: ["DJI Mavic 3 Pro Cine", "DJI Inspire 3", "DJI Air 3", "DJI Mini 4 Pro"] },
    { name: "Lighting & Grip", tools: ["Aputure LS 600d", "Godox SL200", "Profoto B10 Plus", "ARRI SkyPanel"] },
    { name: "Audio", tools: ["Rode NTG5", "Sennheiser MKH416", "Zoom H8", "Sound Devices MixPre", "DPA Lavalier"] },
    { name: "Post & Review", tools: ["Frame.io", "Wipster", "DaVinci Resolve (Grading)"] },
  ],
  Content: [
    { name: "Writing & Editing", tools: ["Notion", "Google Docs", "Grammarly Business", "Hemingway Editor", "ProWritingAid"] },
    { name: "AI Writing", tools: ["GPT-4o", "Claude 3.5 Sonnet", "Jasper", "Copy.ai", "Writesonic"] },
    { name: "SEO Content", tools: ["Surfer SEO", "Frase", "Clearscope", "MarketMuse", "Neuronwriter"] },
    { name: "Publishing", tools: ["WordPress", "Ghost", "Substack", "Medium", "Webflow CMS"] },
    { name: "Research", tools: ["Perplexity Pro", "Ahrefs Content Explorer", "BuzzSumo", "AnswerThePublic"] },
  ],
  Email: [
    { name: "Ecommerce Email", tools: ["Klaviyo", "Omnisend", "Drip", "Postscript (SMS)", "Attentive (SMS)"] },
    { name: "B2B / SaaS Email", tools: ["HubSpot", "ActiveCampaign", "Customer.io", "Loops.so", "Mailchimp"] },
    { name: "Newsletters", tools: ["Beehiiv", "Substack", "ConvertKit", "Ghost", "Kit"] },
    { name: "Design & Templates", tools: ["Stripo", "BEE Free", "Postcards", "Chamaileon"] },
    { name: "Deliverability", tools: ["Litmus", "Email on Acid", "MXtoolbox", "GlockApps", "Google Postmaster"] },
  ],
  Growth: [
    { name: "Influencer Platforms", tools: ["Grin", "Aspire", "CreatorIQ", "Modash", "BuzzGuru", "Insense"] },
    { name: "CRM", tools: ["HubSpot", "Salesforce", "Zoho CRM", "Pipedrive", "Attio", "Close.com"] },
    { name: "Automation", tools: ["n8n", "Make (Integromat)", "Zapier", "Pipedream", "Retool", "Workato"] },
    { name: "Analytics", tools: ["GA4", "Mixpanel", "Amplitude", "PostHog", "Heap", "Looker Studio"] },
    { name: "Outreach & Enrichment", tools: ["Apollo.io", "Instantly", "Smartlead", "Lemlist", "Clay"] },
  ],
  AI: [
    { name: "LLMs", tools: ["OpenAI GPT-4o", "OpenAI o1", "Anthropic Claude 3.5 Sonnet", "Google Gemini 2.5 Pro", "Meta Llama 3.3", "Perplexity Pro", "Mistral Large"] },
    { name: "Agent Frameworks", tools: ["LangChain", "LlamaIndex", "CrewAI", "AutoGen", "Vercel AI SDK", "OpenAI Assistants"] },
    { name: "Vector Databases", tools: ["Pinecone", "Weaviate", "ChromaDB", "Qdrant", "Supabase pgvector", "Milvus"] },
    { name: "Chatbots & Voice Agents", tools: ["Voiceflow", "Botpress", "ManyChat", "Chatbase", "Intercom Fin", "Drift", "Vapi"] },
    { name: "WhatsApp Business API", tools: ["WATI", "Interakt", "AiSensy", "DoubleTick", "Gallabox", "Twilio"] },
    { name: "Workflow Automation", tools: ["n8n", "Make (Integromat)", "Zapier", "Pipedream", "Retool", "Bardeen"] },
    { name: "Voice & Audio AI", tools: ["ElevenLabs", "Whisper", "Deepgram", "PlayHT", "Descript"] },
    { name: "Image & Video AI", tools: ["Midjourney", "Runway ML Gen-3", "Kling AI", "DALL-E 3", "Adobe Firefly", "HeyGen"] },
  ],
};

/* Per-slug overrides for tools when a service demands a very specific stack */
export const TOOL_OVERRIDES = {
  "wordpress-development": [
    { name: "Core Platform", tools: ["WordPress 6.7", "Gutenberg", "Full-Site Editing", "WP-CLI", "Composer"] },
    { name: "Page Builders", tools: ["Elementor Pro", "Divi", "Beaver Builder", "Bricks Builder", "Oxygen"] },
    { name: "WooCommerce Ecosystem", tools: ["WooCommerce", "WooPayments", "WooCommerce Subscriptions", "WooCommerce Bookings", "Stripe for Woo"] },
    { name: "Performance & Security", tools: ["WP Rocket", "Cloudflare", "Wordfence Premium", "iThemes Security", "Sucuri"] },
    { name: "SEO", tools: ["Rank Math Pro", "Yoast SEO Premium", "Schema Pro", "All in One SEO"] },
    { name: "Custom Development", tools: ["Advanced Custom Fields Pro", "Meta Box", "Local by Flywheel", "Query Monitor", "Debug Bar"] },
    { name: "Managed Hosting", tools: ["Kinsta", "WP Engine", "Cloudways", "SiteGround", "Pressable"] },
  ],
  "shopify-development": [
    { name: "Core Platform", tools: ["Shopify Plus", "Shopify", "Liquid", "Hydrogen (React)", "Shopify Functions", "Shopify Flow"] },
    { name: "Themes & Storefront", tools: ["Dawn", "Impulse", "Prestige", "Warehouse", "Custom Theme"] },
    { name: "Marketing & Retention", tools: ["Klaviyo", "Postscript", "Attentive", "Judge.me", "Loox", "Yotpo", "Stamped.io"] },
    { name: "Subscriptions & Bundles", tools: ["Recharge", "Bold Subscriptions", "Rebuy Personalization", "Bundler", "Fast Bundle"] },
    { name: "Fulfillment & Ops", tools: ["Shiprocket", "ShipStation", "EasyShip", "Ryder", "ShipHero"] },
    { name: "Support & CX", tools: ["Gorgias", "Zendesk", "Tidio", "Re:amaze", "Richpanel"] },
    { name: "Analytics & Attribution", tools: ["TripleWhale", "Northbeam", "Peel Insights", "Lifetimely", "Elevar", "Segments Analytics"] },
  ],
  "webflow-development": [
    { name: "Core Platform", tools: ["Webflow", "Webflow CMS", "Webflow Ecommerce", "Webflow Interactions 2.0", "Webflow Logic"] },
    { name: "Finsweet & Ecosystem", tools: ["Finsweet Attributes", "Finsweet CMS Filter", "Client First Class System", "Relume Library"] },
    { name: "Integrations", tools: ["Zapier", "Make (Integromat)", "Airtable", "Memberstack", "Outseta", "MemberSpace"] },
    { name: "Design", tools: ["Figma", "Framer", "Illustrator", "Photoshop"] },
    { name: "SEO & Analytics", tools: ["Semrush", "Ahrefs", "GA4", "Google Search Console", "Hotjar"] },
  ],
  "google-ads": [
    { name: "Core Platform", tools: ["Google Ads", "Google Ads Editor", "Performance Max", "Demand Gen", "SA360", "Google Ads Scripts"] },
    { name: "Shopping & Merchant", tools: ["Google Merchant Center", "GMC Next", "Comparison Shopping Services"] },
    { name: "Optimization", tools: ["Optmyzr", "Adalysis", "Adzooma", "Opteo"] },
    { name: "Landing Pages & CRO", tools: ["Unbounce", "Instapage", "Leadpages", "Webflow", "Hotjar", "VWO"] },
    { name: "Tracking & Attribution", tools: ["Enhanced Conversions", "GTM", "Server-Side GTM (Stape)", "GA4", "Hyros"] },
    { name: "Feed Management", tools: ["DataFeedWatch", "GoDataFeed", "Feedonomics", "Channable"] },
  ],
  "meta-ads": [
    { name: "Core Platform", tools: ["Meta Ads Manager", "Meta Business Suite", "Advantage+ Shopping", "Meta Pixel", "Meta Conversions API"] },
    { name: "Creative Ops", tools: ["Foreplay", "Motion", "Atria", "Creative OS", "CapCut Pro", "Adobe Premiere"] },
    { name: "Testing & Insights", tools: ["Meta Experiments (Lift Studies)", "Motion Ad Reports", "Madgicx"] },
    { name: "Attribution", tools: ["TripleWhale", "Northbeam", "Hyros", "Meta CAPI", "GA4"] },
    { name: "UGC & Influencer", tools: ["Insense", "Billo", "TrendHERO", "Modash"] },
  ],
  "linkedin-ads": [
    { name: "Core Platform", tools: ["LinkedIn Campaign Manager", "LinkedIn Sales Navigator", "LinkedIn Insight Tag"] },
    { name: "ABM Stack", tools: ["6sense", "Demandbase", "RollWorks", "Terminus", "Bombora"] },
    { name: "Enrichment & Outreach", tools: ["Apollo.io", "Clay", "Instantly", "Lemlist", "Smartlead"] },
    { name: "CRM Integration", tools: ["HubSpot", "Salesforce", "Pipedrive", "Attio"] },
  ],
  "whatsapp-automation": [
    { name: "WhatsApp Business API Providers", tools: ["WATI", "Interakt", "AiSensy", "DoubleTick", "Gallabox", "Twilio", "360dialog"] },
    { name: "Chatbot Builders", tools: ["Voiceflow", "Botpress", "ManyChat", "Chatfuel", "Landbot"] },
    { name: "CRM Integrations", tools: ["HubSpot", "Zoho CRM", "Salesforce", "Freshsales", "Pipedrive"] },
    { name: "Workflow & AI", tools: ["OpenAI GPT-4o", "Claude 3.5", "n8n", "Make", "Zapier"] },
    { name: "Analytics", tools: ["Looker Studio", "Metabase", "GA4"] },
  ],
  "chatbots": [
    { name: "LLM Providers", tools: ["OpenAI GPT-4o", "OpenAI o1", "Claude 3.5 Sonnet", "Gemini 2.5 Pro", "Llama 3.3"] },
    { name: "Chatbot Platforms", tools: ["Voiceflow", "Botpress", "Chatbase", "Intercom Fin", "Drift", "ManyChat", "Ada"] },
    { name: "Agent Frameworks", tools: ["LangChain", "LlamaIndex", "CrewAI", "AutoGen", "Vercel AI SDK"] },
    { name: "Vector Databases", tools: ["Pinecone", "Weaviate", "ChromaDB", "Qdrant", "Supabase pgvector"] },
    { name: "Voice Agents", tools: ["Vapi", "Retell AI", "Bland AI", "ElevenLabs Conversational"] },
  ],
  "video-production": [
    { name: "Editing Suites", tools: ["Adobe Premiere Pro 2025", "DaVinci Resolve Studio 19", "Final Cut Pro X", "CapCut Pro"] },
    { name: "Motion & VFX", tools: ["After Effects 2025", "Cinema 4D", "Blender", "Element 3D", "Red Giant Universe", "Motion Array"] },
    { name: "Cinema Cameras", tools: ["Sony FX3", "Sony A7S III", "Sony FX6", "Canon R5 C", "RED Komodo 6K", "Blackmagic Pocket 6K G2", "ARRI Alexa Mini"] },
    { name: "Cine Lenses", tools: ["Sony G Master", "Sigma Art Cine", "Canon RF L-Series", "Zeiss CP.3", "DZO Vespid"] },
    { name: "Drones", tools: ["DJI Mavic 3 Pro Cine", "DJI Inspire 3", "DJI Air 3", "DJI Mini 4 Pro"] },
    { name: "Lighting & Grip", tools: ["Aputure LS 600d Pro", "Godox SL200II", "Profoto B10 Plus", "ARRI SkyPanel S60", "Nanlite Forza"] },
    { name: "Audio Capture", tools: ["Rode NTG5", "Sennheiser MKH 416", "DPA 4060 Lavalier", "Zoom H8", "Sound Devices MixPre-6"] },
    { name: "Grading & Review", tools: ["DaVinci Resolve", "Frame.io", "Wipster", "Filmustage"] },
  ],
  "drone-shoot": [
    { name: "Drones", tools: ["DJI Mavic 3 Pro Cine", "DJI Inspire 3", "DJI Air 3", "DJI Mini 4 Pro", "Autel EVO II Pro"] },
    { name: "Cameras (Onboard)", tools: ["Hasselblad L2D-20c", "DJI X9-8K Air", "Zenmuse X7"] },
    { name: "Post-Production", tools: ["DaVinci Resolve", "Adobe Premiere", "After Effects", "Neat Video (Denoise)"] },
    { name: "Flight Planning & Compliance", tools: ["DGCA DigitalSky (India)", "AirData UAV", "Litchi", "Kittyhawk"] },
  ],
  "product-shoot": [
    { name: "Cameras", tools: ["Canon R5", "Sony A7R V", "Nikon Z8", "Phase One IQ4"] },
    { name: "Lenses", tools: ["Canon RF 100mm Macro", "Sony 90mm Macro G", "Sigma 105mm Art Macro"] },
    { name: "Lighting", tools: ["Profoto B10 Plus", "Godox AD600", "Aputure LS 600d", "Broncolor Siros L"] },
    { name: "Modifiers & Grip", tools: ["Profoto Softboxes", "Elinchrom Rotalux", "Wescott Rapid Box"] },
    { name: "Post-Production", tools: ["Adobe Photoshop", "Capture One Pro", "Lightroom Classic", "Retouch4me"] },
    { name: "Ecommerce Delivery", tools: ["Amazon Product Photo Specs", "Shopify Image Optimizer", "Kraken.io"] },
  ],
  "seo": [
    { name: "Keyword Research", tools: ["Ahrefs", "SEMrush", "Moz Pro", "Ubersuggest", "KWFinder", "AnswerThePublic", "Also Asked", "Keyword Insights"] },
    { name: "Technical Audit", tools: ["Screaming Frog", "Sitebulb", "DeepCrawl", "JetOctopus", "Botify", "Lighthouse", "PageSpeed Insights"] },
    { name: "Content Optimization", tools: ["Surfer SEO", "Frase", "Clearscope", "MarketMuse", "Neuronwriter"] },
    { name: "Analytics & Search", tools: ["Google Search Console", "Bing Webmaster Tools", "GA4", "Looker Studio", "Google Tag Manager"] },
    { name: "Rank Tracking", tools: ["AccuRanker", "Ahrefs Rank Tracker", "SE Ranking", "SERPWatcher"] },
    { name: "Local SEO", tools: ["Google Business Profile", "BrightLocal", "Whitespark", "Yext", "Moz Local"] },
    { name: "Link Building", tools: ["Pitchbox", "BuzzStream", "HARO", "Respona", "Hunter.io", "Postaga"] },
    { name: "Schema Markup", tools: ["Schema.org", "Merkle Schema Generator", "Rank Math Pro", "Yoast SEO Premium"] },
  ],
};

/* Deliverables per tag */
const DELIVERABLES_MAP = {
  Web: ["High-fidelity Figma design", "Fully responsive Next.js codebase", "SEO-ready meta & schema markup", "Headless CMS setup", "Analytics + GTM integration", "Contact & lead forms", "Sitemap.xml & robots.txt", "Core Web Vitals ≥ 95 score", "Cloudflare CDN + Vercel deployment", "Post-launch support (30 days)"],
  Ecom: ["Custom Shopify / Woo store", "Klaviyo email flows (welcome, abandoned cart, win-back)", "Product catalogue setup (100+ SKUs)", "Payment gateway integration", "Shipping & fulfillment setup", "Meta / Google feed integration", "Reviews app (Judge.me / Loox)", "Post-purchase upsell (Rebuy)", "GA4 + server-side tracking", "AB test framework"],
  CMS: ["Custom theme / design system", "10+ reusable content blocks", "Headless CMS schema", "Admin training + Loom videos", "Multi-language ready", "SEO metadata fields", "Media library optimization", "Version control workflow", "Staging & production env", "Ongoing support retainer"],
  App: ["iOS + Android builds (or Flutter)", "Figma UX + high-fidelity UI", "REST/GraphQL API", "Firebase / Supabase backend", "Push notifications", "Deep linking", "App Store + Play Store publishing", "In-app analytics (Mixpanel/GA4)", "Crashlytics + Sentry monitoring", "60-day post-launch support"],
  SEO: ["120-point SEO audit (PDF + Loom)", "Keyword universe (1,000+ keywords)", "Pillar/cluster architecture map", "Technical SEO fixes deployed", "On-page optimization (all pages)", "10+ backlinks / month", "Weekly ranking report", "Monthly executive report", "Looker Studio dashboard", "Content editorial calendar"],
  Ads: ["Full-funnel campaign structure", "Conversion tracking (server-side)", "80+ ad creatives / month", "Landing page(s) built + tested", "Weekly optimization sprints", "Weekly report + Loom walkthrough", "Monthly executive scorecard", "Looker Studio dashboard", "Creative testing framework", "Attribution model documentation"],
  Social: ["30-day content calendar", "20+ static posts / month", "8+ reels or shorts / month", "Community management (M–F)", "Story updates 4x / week", "Trend & meme monitoring", "Monthly analytics report", "Influencer outreach (as needed)", "Cover art & highlights", "Bio & funnel optimization"],
  Brand: ["Brand strategy document", "Naming (optional)", "Logo (primary + variants)", "Colour palette + typography", "Brand guidelines PDF (60+ pages)", "Iconography & illustrations", "Motion identity (Lottie)", "Social + stationery templates", "Sound identity (optional)", "Brand launch collateral"],
  Design: ["User research + personas", "Information architecture", "Wireframes (low + high fidelity)", "Interactive Figma prototype", "Design system + tokens", "Component library (50+)", "Motion / micro-interaction specs", "Usability testing (5 users)", "Dev handoff docs", "Design QA post-build"],
  Video: ["Concept + script + storyboard", "Pre-production planning", "1–3 day shoot (multi-cam)", "Cinematic edit (2–3 versions)", "Colour grading", "Music licensing", "Motion graphics + titles", "Voice-over + sound design", "Platform-specific cuts (Reels, Shorts, YT)", "Raw footage handover"],
  Content: ["Content strategy + calendar", "Keyword-mapped briefs", "4–8 long-form blogs / month", "Ad + landing page copy", "Social captions & scripts", "Email sequences (welcome, nurture)", "SEO optimization (Surfer)", "Editorial + fact-checking", "Publishing workflow", "Performance reporting"],
  Email: ["Email strategy audit", "Welcome / onboarding flow", "Abandoned cart flow", "Post-purchase / winback flows", "Weekly newsletter template", "Segmentation & tagging", "Design system (Stripo templates)", "Deliverability + DKIM/SPF setup", "AB testing framework", "Klaviyo/HubSpot dashboard"],
  Growth: ["Influencer campaign plan", "Contracts + brief templates", "Creator sourcing (10–50 / month)", "Content review + approvals", "UTM + attribution setup", "Discount codes & landing pages", "Reporting dashboard", "Repurposing to paid ads", "Whitelisting / paid amplification", "Post-campaign analysis"],
  AI: ["AI use-case audit", "Custom GPT / agent build", "Knowledge base training (RAG)", "System prompt engineering", "n8n / Make workflow builds", "CRM + tool integrations", "Analytics dashboard", "SOP documentation", "Team training + handover", "30-day post-launch tuning"],
};

/* Use-cases per tag */
const USECASES_MAP = {
  Web: ["Series A/B startups launching a v2 website", "Enterprises replacing sluggish WordPress builds", "D2C brands moving to headless commerce", "Agencies white-labelling premium Next.js work"],
  Ecom: ["D2C brands scaling from ₹1 Cr to ₹10 Cr", "Marketplaces migrating from Magento", "Legacy stores moving to Shopify Plus", "Global brands opening India-first storefronts"],
  CMS: ["Marketing teams wanting to ship without dev", "Publishers needing multi-author workflows", "SaaS companies building programmatic SEO", "Enterprises going headless with Sanity/Contentful"],
  App: ["Startups shipping MVPs in 90 days", "D2C brands launching loyalty apps", "Healthcare & fintech needing compliant apps", "Marketplaces going mobile-first"],
  SEO: ["Founders investing in organic long-term", "Enterprises defending market share", "D2C brands cutting Meta CAC via SEO", "SaaS teams building content moats"],
  Ads: ["D2C brands scaling from ₹5L to ₹5 Cr ad-spend", "B2B SaaS running ABM on LinkedIn", "Local businesses driving foot traffic", "Ecommerce brands launching Advantage+"],
  Social: ["Founders building personal brands", "D2C brands needing daily reels", "B2B companies humanizing on LinkedIn", "Retail chains coordinating multi-outlet content"],
  Brand: ["Pre-launch startups nailing identity", "Established brands re-positioning", "D2C brands going luxury", "Category-creators needing a house of brands"],
  Design: ["SaaS founders launching a product v1", "Startups replacing off-the-shelf UI kits", "Enterprises needing design systems", "Mobile-first product teams"],
  Video: ["D2C brands launching a hero film", "Real estate & hospitality needing property films", "B2B SaaS filming product tours", "Weddings & events wanting cinematic edits"],
  Content: ["SaaS teams needing SEO blog engines", "D2C brands needing product storytelling", "Agencies white-labelling content", "Publishers scaling to 100+ articles / month"],
  Email: ["D2C brands retaining more customers", "SaaS teams building lifecycle marketing", "Newsletter creators monetizing subscribers", "Ecommerce brands recovering carts"],
  Growth: ["D2C brands amplifying with UGC", "B2B SaaS building outbound engines", "Startups needing PLG playbooks", "Retailers running loyalty campaigns"],
  AI: ["Startups replacing 3–5 headcount with AI", "Support teams cutting response times", "Sales teams qualifying leads on WhatsApp", "Founders wanting an AI-native marketing OS"],
};

/* Mini case-study per tag (matches portfolio) */
const CASE_MAP = {
  Web: { slug: "nova-fintech", client: "Nova Fintech", headline: "1.02M organic sessions after Next.js migration.", results: [["6.4s → 0.8s", "Load time"], ["+340%", "Organic traffic"], ["-41%", "CAC"]] },
  Ecom: { slug: "aetheria-skincare", client: "Aetheria Skincare", headline: "6x revenue growth in 9 months on Shopify Plus.", results: [["6x", "Revenue"], ["-48%", "CAC"], ["+62%", "AOV"]] },
  CMS: { slug: "nova-fintech", client: "Nova Fintech", headline: "240-page Sanity CMS shipped in 8 weeks.", results: [["240", "Pages"], ["1,240", "Top-3 keywords"], ["+340%", "Traffic"]] },
  App: { slug: "pulse-fitness", client: "Pulse Fitness", headline: "210K downloads in 6 months on Flutter.", results: [["210K", "Downloads"], ["4.8★", "Store rating"], ["38%", "D7 retention"]] },
  SEO: { slug: "nova-fintech", client: "Nova Fintech", headline: "0 → 1M organic sessions in 12 months.", results: [["1.02M", "Sessions/mo"], ["1,240", "Top-3 keywords"], ["41→68", "Domain Rating"]] },
  Ads: { slug: "orbit-realty", client: "Orbit Realty", headline: "₹42 Cr closed from 8,400 qualified leads.", results: [["8,400", "Leads"], ["-52%", "CPL"], ["₹42 Cr", "Closed"]] },
  Social: { slug: "lumen-jewelry", client: "Lumen Jewelry", headline: "+120K IG followers, featured in Vogue India.", results: [["+120K", "Followers"], ["18", "PR features"], ["₹1.4 Cr", "Launch month"]] },
  Brand: { slug: "lumen-jewelry", client: "Lumen Jewelry", headline: "Luxury rebrand featured in Vogue India.", results: [["18", "PR features"], ["₹82K", "AOV"], ["+120K", "Followers"]] },
  Design: { slug: "pulse-fitness", client: "Pulse Fitness", headline: "4.8★ App Store rating driven by design.", results: [["4.8★", "Rating"], ["210K", "Downloads"], ["38%", "D7 retention"]] },
  Video: { slug: "kairos-hospitality", client: "Kairos Hotels", headline: "Cinematic drone films drove +340% direct bookings.", results: [["+340%", "Bookings"], ["-61%", "OTA dependency"], ["+28%", "RevPAR"]] },
  Content: { slug: "vireo-education", client: "Vireo Education", headline: "180K YouTube subs from a content-first engine.", results: [["180K", "Subscribers"], ["25.2K", "Paid students"], ["₹1.8 Cr", "MRR"]] },
  Email: { slug: "aetheria-skincare", client: "Aetheria Skincare", headline: "34% repeat-buyer rate with Klaviyo flows.", results: [["34%", "Repeat rate"], ["+62%", "AOV"], ["6x", "Revenue"]] },
  Growth: { slug: "aetheria-skincare", client: "Aetheria Skincare", headline: "UGC & influencer engine 6x'd D2C revenue.", results: [["6x", "Revenue"], ["-48%", "CAC"], ["+62%", "AOV"]] },
  AI: { slug: "helix-healthcare", client: "Helix Healthcare", headline: "WhatsApp automation cut no-shows 64%.", results: [["-64%", "No-shows"], ["40K", "Patients/mo"], ["+380%", "GBP calls"]] },
};

/* Pricing & timeline per tag */
const PRICING_MAP = {
  Web: { starting: "₹75,000", model: "one-time or retainer", timeline: "2–6 weeks" },
  Ecom: { starting: "₹1.75L", model: "one-time + monthly", timeline: "4–8 weeks" },
  CMS: { starting: "₹1L", model: "one-time or retainer", timeline: "3–6 weeks" },
  App: { starting: "₹3L", model: "one-time or milestone", timeline: "8–14 weeks" },
  SEO: { starting: "₹25,000", model: "monthly retainer", timeline: "First results in 30–60 days" },
  Ads: { starting: "₹40,000", model: "monthly retainer + % of spend", timeline: "Live in 7–14 days" },
  Social: { starting: "₹30,000", model: "monthly retainer", timeline: "Live in 7 days" },
  Brand: { starting: "₹1.5L", model: "fixed-scope project", timeline: "4–8 weeks" },
  Design: { starting: "₹1L", model: "sprint or project", timeline: "2–6 weeks" },
  Video: { starting: "₹75,000", model: "per-project", timeline: "2–4 weeks per film" },
  Content: { starting: "₹35,000", model: "monthly retainer", timeline: "First delivery in 7 days" },
  Email: { starting: "₹25,000", model: "monthly retainer", timeline: "Live in 10–14 days" },
  Growth: { starting: "₹50,000", model: "monthly retainer or campaign", timeline: "Live in 14 days" },
  AI: { starting: "₹75,000", model: "sprint + monthly ops", timeline: "MVP in 3–6 weeks" },
};

/* Why-Digify4u differentiators per tag */
const WHY_MAP = {
  Web: ["Lighthouse 95+ or we rebuild for free", "Own your GitHub repo from day one", "Next.js + headless CMS best-practice", "30-day post-launch bug-fix window"],
  Ecom: ["We ship on Shopify Plus, not Wix", "Klaviyo & Rebuy senior partners in-house", "Post-launch CRO retainer available", "Full-funnel attribution (TripleWhale/Elevar)"],
  CMS: ["Content team ships without dev tickets", "Multi-lingual & multi-region ready", "Headless-first architecture", "Migration guarantee (zero SEO loss)"],
  App: ["Design-led, not template-led", "Native performance, cross-platform speed", "Founder-friendly milestone billing", "Store approval or we cover resubmission"],
  SEO: ["Only white-hat, only compounding", "Content + technical + link building under one roof", "Weekly live dashboards, no monthly PDFs", "Traffic guarantee available for enterprise"],
  Ads: ["Senior-only media buyers (10y+ average)", "Server-side conversions, iOS-14-proof", "Creative production in-house", "Weekly reviews, not monthly PDFs"],
  Social: ["Custom content, never templated Canva", "Community management included", "Reels + shorts + statics as one system", "Trend-aware culture-first content"],
  Brand: ["Strategy-first, aesthetics-second", "60+ page brand book, not a logo PDF", "Motion identity baked in", "Founders love us — 98% retention"],
  Design: ["Research → design → dev-QA loop", "Design systems that scale to 1000+ screens", "Framer + Figma dual delivery", "Motion + micro-interactions native"],
  Video: ["Cinema-grade cameras & lenses", "In-house director + editor team", "Multi-platform cuts included", "Frame.io review workflow"],
  Content: ["Senior writers, not gig-economy churn", "SEO briefs from Surfer + Frase", "Editorial fact-checking built-in", "E-E-A-T signals, not AI slop"],
  Email: ["Klaviyo Master certified team", "Deliverability-first from day one", "Copy + design + code in-house", "Segmentation strategy, not blasts"],
  Growth: ["Contracts + attribution baked in", "Only vetted, brand-safe creators", "Repurposed to paid ads at no extra cost", "Full-funnel not last-click"],
  AI: ["Real GPT-4o / Claude 3.5 engineering", "Not no-code toys — production-grade", "SOC2-aware architecture", "MLOps + monitoring built in"],
};

export function getServiceDetail(slug) {
  const s = serviceBySlug[slug];
  if (!s) return null;
  const n = s.name;
  const toolCategories = TOOL_OVERRIDES[slug] || TOOL_MAP[s.tag] || [];
  const deliverables = DELIVERABLES_MAP[s.tag] || DELIVERABLES_MAP.Web;
  const useCases = USECASES_MAP[s.tag] || USECASES_MAP.Web;
  const miniCase = CASE_MAP[s.tag] || CASE_MAP.Web;
  const pricing = PRICING_MAP[s.tag] || PRICING_MAP.Web;
  const whyItems = WHY_MAP[s.tag] || WHY_MAP.Web;

  return {
    ...s,
    hero: {
      eyebrow: `${s.category} · ${s.tag}`,
      title: `${n.split(" ").slice(0, -1).join(" ") || n}`,
      gradient: n.split(" ").slice(-1)[0],
      subtitle: s.desc,
    },
    longDesc: [
      `${s.desc}`,
      `Every ${n.toLowerCase()} engagement at Digify4u is led by senior specialists — the average team member has 10+ years of experience across Fortune 500, unicorn startups and category-defining D2C brands. You never get handed off to junior account managers or offshore freelancers.`,
      `We combine boutique craft with startup speed: weekly sprints, Slack access, Loom-first communication and live Looker Studio dashboards from day one. You own every asset, every account and every access — zero lock-in, zero ransom-ware relationships.`,
    ],
    toolCategories,
    deliverables,
    useCases: useCases.map((u) => ({ title: u })),
    whyUs: [
      { title: "Senior-only team", desc: whyItems[0] },
      { title: "Craft over convention", desc: whyItems[1] },
      { title: "Transparent ops", desc: whyItems[2] },
      { title: "Outcomes, not deliverables", desc: whyItems[3] },
    ],
    benefits: [
      { title: "Enterprise Quality", desc: `Senior-only ${n.toLowerCase()} team with 10+ years average experience across Fortune 500 and Y-Combinator brands.` },
      { title: "Measurable Results", desc: `Every ${n.toLowerCase()} engagement is tied to a hard KPI — leads, revenue, rankings or retention.` },
      { title: "Rapid Turnaround", desc: `Weekly sprints, transparent Slack channels and Looker dashboards keep everything moving at startup speed.` },
      { title: "Full-Funnel Thinking", desc: `We connect ${n.toLowerCase()} to the rest of your marketing stack — no isolated deliverables.` },
      { title: "Own Your Assets", desc: `Every asset, account and access we build is 100% owned by you — no lock-in, no ransom.` },
      { title: "Data-First Approach", desc: `We rely on cohorts, incrementality and MMM — not vanity metrics or last-click illusions.` },
    ],
    process: [
      { step: "01", title: "Discovery Audit", desc: `Deep audit of your current ${n.toLowerCase()} setup, competitors, funnel and analytics.` },
      { step: "02", title: "Strategy & Roadmap", desc: `A 90-day ${n.toLowerCase()} roadmap with priorities, budgets, KPIs and forecasted outcomes.` },
      { step: "03", title: "Execution Sprint", desc: `Weekly sprints executed by senior specialists with daily Slack updates and Loom videos.` },
      { step: "04", title: "Measure & Optimize", desc: `Real-time Looker dashboards, weekly performance calls and monthly executive reports.` },
      { step: "05", title: "Scale", desc: `Double-down on what works, kill what doesn't, and unlock the next growth curve.` },
    ],
    pricing,
    miniCase,
    faqs: [
      { q: `How much does ${n} cost?`, a: `${n} at Digify4u starts at ${pricing.starting} (${pricing.model}) and scales up to ₹10L+ for enterprise engagements. We offer fixed-scope, retainer and performance-based models. Book a call for a custom quote.` },
      { q: `How long before I see results from ${n}?`, a: `Typical timeline: ${pricing.timeline}. Compounding results kick in from month 3 onwards. We share weekly leading indicators so you're never in the dark.` },
      { q: `Which tools and technologies do you use for ${n}?`, a: `We use the industry's best: ${toolCategories.slice(0, 3).map((c) => c.tools.slice(0, 3).join(", ")).join(" · ")} and many more. Full stack listed on this page.` },
      { q: `Do you sign NDAs and IP transfer agreements?`, a: `Yes. All ${n.toLowerCase()} work is covered by mutual NDAs and full IP ownership transfers to you at handoff. No lock-in, no license fees.` },
      { q: `Can I hire you just for ${n} without other services?`, a: `Absolutely. ${n} can be booked as a standalone service, though most clients scale into full-stack engagements once they see the results.` },
      { q: `What industries do you serve for ${n}?`, a: `Digify4u delivers ${n.toLowerCase()} for 20+ industries including SaaS, D2C ecommerce, fintech, healthcare, real estate, education and hospitality.` },
    ],
    related: services.filter((x) => x.category === s.category && x.slug !== s.slug).slice(0, 4),
    metrics: [
      { value: "250+", label: `${n} projects` },
      { value: "9x", label: "Avg. ROI" },
      { value: "98%", label: "Client retention" },
      { value: pricing.starting, label: "Starts at" },
    ],
  };
}

/* ===================== INDUSTRY DETAIL ===================== */
const ind = (slug, name, tagline, challenges, solutions) => ({ slug, name, tagline, challenges, solutions });

export const industryDetails = {
  "healthcare": ind("healthcare", "Healthcare", "HIPAA-ready digital platforms for hospitals, clinics and healthtech startups.",
    ["Complex compliance (HIPAA, GDPR)", "Sensitive patient data & trust", "Long sales cycles for B2B medical", "Doctor discovery in local search", "Multi-location clinic scaling"],
    ["HIPAA-compliant patient portals & telemedicine platforms", "Local SEO for clinics & multi-location schema", "Doctor branding & appointment automation", "Meta & Google Ads for patient acquisition", "WhatsApp automation for appointment reminders"]),
  "education": ind("education", "Education & EdTech", "LMS platforms, admission funnels and student-first marketing for schools, colleges and EdTech.",
    ["Seasonal admission cycles", "High cost per qualified lead", "Parent + student dual-audience marketing", "Content marketing for niche courses", "LMS scalability"],
    ["Admission landing pages that convert 3x industry average", "Custom LMS with live classes, quizzes, certificates", "YouTube & Instagram content engines for organic reach", "WhatsApp-driven admission automation", "SEO for evergreen course content"]),
  "travel": ind("travel", "Travel & Tourism", "Booking platforms, destination marketing and social-first campaigns for travel brands.",
    ["Seasonal demand fluctuations", "OTA competition (MakeMyTrip, Booking)", "Visual-heavy content requirements", "Multi-currency booking flows", "Trust & reviews"],
    ["Custom booking platforms with dynamic pricing", "Reels & YouTube-first destination marketing", "SEO for high-intent destination keywords", "Meta & Google Ads with dynamic retargeting", "WhatsApp itinerary automation"]),
  "real-estate": ind("real-estate", "Real Estate", "Listings, CRM and lead-gen systems for developers, brokers and REIT firms.",
    ["High cost per qualified lead", "Long sales cycles (3–12 months)", "Multi-project inventory management", "Broker & channel partner coordination", "Regulatory (RERA) compliance"],
    ["Real estate CRM with lead scoring & nurturing", "Meta & Google Ads for high-intent buyers", "Virtual tours & 3D walkthrough production", "Local SEO for hyper-local buyer searches", "Broker portals & channel automation"]),
  "restaurants": ind("restaurants", "Restaurants & F&B", "Menus, delivery, reviews and social-first campaigns for restaurants and cloud kitchens.",
    ["Zomato / Swiggy commission pressure", "Local competition & discovery", "Managing 100s of reviews", "Seasonal & festival planning", "Multi-outlet consistency"],
    ["Direct-order websites that cut aggregator commissions", "Local SEO for ‘restaurants near me’ searches", "Reels & food-first Instagram content", "Review & reputation management", "WhatsApp reservation automation"]),
  "hotels": ind("hotels", "Hotels & Hospitality", "Direct booking engines, revenue management and luxury brand marketing for hotels.",
    ["OTA parity & commission", "Seasonal RevPAR fluctuation", "Multi-property brand consistency", "Global multi-lingual audiences", "Guest loyalty & retention"],
    ["Direct-booking website with SiteMinder / Cloudbeds integration", "Global SEO + multi-lingual content", "Cinematic reels & drone videography", "Google Hotel Ads & metasearch campaigns", "CRM-driven loyalty & retention programs"]),
  "finance": ind("finance", "Finance & Fintech", "Compliant fintech platforms, wealth-tech and B2B finance marketing.",
    ["Heavy compliance (SEBI, RBI, GDPR)", "Trust & security signals", "Complex product education", "Long enterprise sales cycles", "KYC & onboarding friction"],
    ["Compliant fintech web & mobile platforms", "Educational content engines & SEO", "LinkedIn ABM for B2B fintech", "Trust-first brand identity systems", "CRM with KYC automation workflows"]),
  "manufacturing": ind("manufacturing", "Manufacturing & Industrial", "B2B lead engines, product catalogues and industrial branding for manufacturers.",
    ["Long B2B sales cycles", "Complex product catalogues", "Global export marketing", "Legacy digital presence", "Distributor & channel management"],
    ["B2B websites with product configurators & RFQ portals", "LinkedIn Ads & ABM campaigns", "IndiaMART, Alibaba & Google Ads for export", "Corporate video production & drone shoots", "CRM for global distributor networks"]),
  "automobile": ind("automobile", "Automobile", "Dealer marketing, OEM branding and lead engines for auto industry players.",
    ["Dealer vs OEM misalignment", "High cost per test-drive lead", "Complex financing conversations", "Multi-model portfolio management", "Local dealership discovery"],
    ["Dealer & OEM websites with test-drive booking", "Local SEO for showroom searches", "Meta & Google Ads with click-to-WhatsApp", "YouTube ads for model launches", "CRM automation for test-drive follow-ups"]),
  "retail": ind("retail", "Retail", "Omnichannel commerce, in-store activation and loyalty for retail brands.",
    ["Online vs offline attribution", "Inventory & multi-channel sync", "Loyalty program adoption", "Local store discovery", "Seasonal campaign planning"],
    ["Omnichannel commerce with in-store pickup", "Google Merchant Center + Local Ads", "CRM-first loyalty & retention systems", "Store-locator SEO & schema", "In-store activation branding"]),
  "fashion": ind("fashion", "Fashion & Apparel", "D2C storefronts, influencer campaigns and fashion-first content for apparel brands.",
    ["Zara, H&M & Shein price pressure", "Seasonal drops & collections", "High return rates", "Instagram & Reels dependency", "Sizing & fit trust"],
    ["Shopify D2C storefronts with drop mechanics", "Reel-first influencer marketing", "Google Shopping & Performance Max", "AR try-on & size prediction integrations", "Retention with Klaviyo flows"]),
  "construction": ind("construction", "Construction", "Project marketing, RFQ portals and B2B lead engines for construction firms.",
    ["Long project cycles", "Complex RFQ workflows", "Multi-stakeholder decisions", "Local competitive bidding", "Portfolio credibility"],
    ["Corporate websites with project portfolios", "RFQ automation & CRM integration", "Drone videography for project showcases", "LinkedIn Ads for real estate developers", "Local SEO for city-specific keywords"]),
  "ngos": ind("ngos", "NGOs & Non-Profits", "Storytelling websites, donation funnels and awareness campaigns for NGOs.",
    ["Small marketing budgets", "Donor retention challenges", "Impact storytelling", "Grant compliance reporting", "Volunteer recruitment"],
    ["Storytelling websites with donation gateways", "Google Ad Grants ($10K/mo free ads) setup", "YouTube documentary-style content", "Meta campaigns for donor acquisition", "CRM for donor & volunteer management"]),
  "law-firms": ind("law-firms", "Law Firms", "Authority-first websites, SEO and content for law firms and legal practitioners.",
    ["Bar Council advertising rules", "Trust & credibility signals", "High cost per qualified case", "Local search for practice areas", "Content compliance"],
    ["Compliant authority-first law firm websites", "Practice-area & local SEO clusters", "Legal blog engines with E-E-A-T", "LinkedIn thought leadership for partners", "Case management CRM integrations"]),
  "clinics": ind("clinics", "Clinics & Practitioners", "Local SEO, patient acquisition and clinic branding for solo and multi-doctor clinics.",
    ["Local competitor saturation", "Doctor personal branding", "Patient reviews management", "Appointment no-shows", "Insurance & payment friction"],
    ["Clinic websites with online appointment booking", "Google Business Profile optimization", "Doctor personal branding on Instagram & LinkedIn", "WhatsApp automation for reminders", "Meta Ads for patient acquisition"]),
  "startups": ind("startups", "Startups", "MVP-to-scale growth systems for founders — branding, product, marketing and AI.",
    ["Small teams, big ambitions", "Runway pressure", "Undifferentiated brand", "Slow to product-market fit", "Investor-ready storytelling"],
    ["Founder-friendly brand identities", "MVP product design & development", "Growth engines with SEO + paid + content", "Investor pitch decks & data rooms", "AI automation to punch above your weight"]),
  "ecommerce": ind("ecommerce", "Ecommerce & D2C", "Shopify stores, ads and retention engines for D2C and marketplace brands.",
    ["Rising CAC across all channels", "Amazon vs D2C tension", "Retention & repeat purchase", "Cart abandonment losses", "Creative burnout"],
    ["Shopify Plus stores with premium themes", "Full-funnel Meta + Google Ads", "Klaviyo retention automations", "UGC creative engines", "Amazon & Flipkart marketplace management"]),
  "beauty-salon": ind("beauty-salon", "Beauty & Salon", "Booking systems, influencer marketing and social-first campaigns for salons and beauty brands.",
    ["Local competition & discovery", "Appointment no-shows", "Seasonal & festival demand", "Instagram dependency", "Loyalty & repeat visits"],
    ["Online booking websites & apps", "Reels & influencer marketing engines", "Local SEO for salon-near-me searches", "WhatsApp automation for appointment reminders", "Loyalty programs with CRM"]),
  "jewelry": ind("jewelry", "Jewelry", "Luxury ecommerce, virtual try-on and heritage brand marketing for jewelers.",
    ["High-ticket online conversions", "Trust & authenticity signals", "Seasonal wedding demand", "Global export ambitions", "Legacy vs digital tension"],
    ["Luxury Shopify or custom jewelry ecommerce", "Virtual try-on & AR integrations", "Heritage-first brand storytelling & video", "Meta & Google Ads with jewelry catalog", "Influencer campaigns with celebrity stylists"]),
  "events": ind("events", "Events & Weddings", "Event websites, ticketing, RSVP automation and cinematic event branding.",
    ["Time-sensitive campaigns", "Multi-vendor coordination", "Ticketing & RSVP friction", "Cinematic content requirements", "Attendee re-engagement"],
    ["Event websites with ticketing & RSVP", "Cinematic event & wedding videography", "Social-first countdown campaigns", "Influencer amplification", "CRM for attendee re-engagement"]),
};

export function getIndustryDetail(slug) {
  const base = industriesList.find(i => i.slug === slug);
  const d = industryDetails[slug];
  if (!base || !d) return null;
  return {
    ...base,
    ...d,
    servicesOffered: [
      "Website Development", "SEO & Local SEO", "Performance Marketing",
      "Social Media Management", "Content & Video Production", "CRM & Automation",
    ],
    metrics: [
      { value: "120+", label: `${d.name} projects` },
      { value: "6x", label: "Avg. ROI" },
      { value: "40%", label: "CAC reduction" },
      { value: "98%", label: "Client retention" },
    ],
    faqs: [
      { q: `Do you have proven experience in ${d.name}?`, a: `Yes. Digify4u has delivered 40+ engagements across ${d.name.toLowerCase()} with senior specialists who know the vertical inside-out — not generalists learning on your budget.` },
      { q: `Can Digify4u handle end-to-end ${d.name} marketing?`, a: `Absolutely. We deliver brand, website, SEO, ads, social, content and automation as a single integrated engagement — or as standalone services — for ${d.name.toLowerCase()} clients.` },
      { q: `How long is a typical ${d.name} engagement?`, a: `Most ${d.name.toLowerCase()} engagements run for 6–12 months with quarterly business reviews. We also offer 90-day sprints for founders in early product-market fit stages.` },
      { q: `Do you understand compliance for ${d.name}?`, a: `Yes. We navigate industry-specific compliance — HIPAA for healthcare, RBI/SEBI for finance, RERA for real estate, Bar Council for legal — with dedicated specialists.` },
    ],
  };
}

/* ===================== PORTFOLIO ===================== */
export const portfolio = [
  { slug: "aetheria-skincare", title: "Aetheria Skincare", client: "Aetheria Wellness Pvt. Ltd.", category: "Ecommerce & Branding", cats: ["Ecommerce","Branding","Social Media"], grad: "from-fuchsia-500 via-purple-600 to-indigo-600", tagline: "Rebranded a D2C skincare startup and grew revenue 6x in 9 months.", challenge: "Aetheria was a Shopify skincare brand stuck at ₹8L/month in revenue. Their brand felt generic, ad creative was fatigued and CAC was climbing 35% quarter-over-quarter.", solution: "We rebuilt the brand identity, redesigned the Shopify store, launched a new creative engine producing 80 assets/month and rebuilt the Meta + Google ad structure around cohort-based media buying.", tech: ["Shopify Plus", "Klaviyo", "Meta Ads", "Google Ads", "After Effects"], timeline: "9 months", results: [{k:"Revenue growth",v:"6x"},{k:"CAC reduction",v:"48%"},{k:"AOV increase",v:"+62%"},{k:"Return customer rate",v:"34%"}]},
  { slug: "nova-fintech", title: "Nova Fintech", client: "Nova Financial Technologies", category: "SaaS Web App", cats: ["Website Design","SEO","UI UX"], grad: "from-indigo-600 via-purple-700 to-fuchsia-500", tagline: "Rebuilt a fintech website + SEO engine that hit 1M organic sessions.", challenge: "Nova was invisible on search despite raising a Series A. Their old WordPress site loaded in 6.4s, had no schema and blogs were unfocused.", solution: "Migrated to Next.js with headless Sanity CMS. Built a 240-page pillar/cluster SEO architecture, technical SEO overhaul and a bi-weekly editorial engine.", tech: ["Next.js", "Sanity", "Ahrefs", "GA4", "Vercel"], timeline: "12 months", results: [{k:"Organic sessions",v:"1.02M/mo"},{k:"Keywords in top 3",v:"1,240"},{k:"Domain rating",v:"41 → 68"},{k:"CAC reduction",v:"41%"}]},
  { slug: "pulse-fitness", title: "Pulse Fitness", client: "Pulse Health & Fitness", category: "Mobile App & Performance", cats: ["UI UX","Marketing Campaigns","Social Media"], grad: "from-purple-500 via-pink-500 to-orange-400", tagline: "Designed and launched a fitness app that hit 200K downloads in 6 months.", challenge: "Pulse had a validated concept but no product. They needed a full-stack partner to design, build and market the app from zero.", solution: "UX research + design in Figma, Flutter development with Firebase backend, Meta + Google UAC ad campaigns, influencer amplification with 40+ fitness creators.", tech: ["Flutter", "Firebase", "Figma", "Meta Ads", "Google UAC"], timeline: "7 months", results: [{k:"Downloads",v:"210K"},{k:"Day-7 retention",v:"38%"},{k:"App Store rating",v:"4.8"},{k:"CPI",v:"₹12"}]},
  { slug: "orbit-realty", title: "Orbit Realty", client: "Orbit Real Estate LLP", category: "Real Estate Portal", cats: ["Website Design","Marketing Campaigns","SEO"], grad: "from-blue-500 via-purple-600 to-fuchsia-600", tagline: "Built a real estate portal + Meta lead engine that generated 8,400 qualified leads.", challenge: "Orbit was drowning in unqualified leads from IndiaMART & Facebook, with sales chasing tyre-kickers.", solution: "Built a custom Next.js portal with intelligent lead-scoring, integrated Meta Ads with LeadsBridge to a HubSpot CRM, and rebuilt landing pages by RERA-approved project.", tech: ["Next.js", "HubSpot", "Meta Ads", "LeadsBridge"], timeline: "5 months", results: [{k:"Qualified leads",v:"8,400"},{k:"Cost per lead",v:"-52%"},{k:"Site tours booked",v:"1,240"},{k:"Revenue closed",v:"₹42 Cr"}]},
  { slug: "lumen-jewelry", title: "Lumen Jewelry", client: "Lumen Fine Jewelry", category: "Luxury Ecommerce", cats: ["Ecommerce","Video Production","Branding"], grad: "from-amber-500 via-purple-500 to-fuchsia-600", tagline: "Launched a luxury jewelry ecommerce brand featured in Vogue India.", challenge: "Lumen wanted to translate heritage craftsmanship into a modern D2C brand without losing gravitas.", solution: "Brand identity system, cinematic film production, Shopify Plus custom theme with AR try-on, influencer + PR campaign.", tech: ["Shopify Plus", "AR Try-On", "After Effects", "Klaviyo"], timeline: "6 months", results: [{k:"Launch-month revenue",v:"₹1.4 Cr"},{k:"PR features",v:"18"},{k:"Instagram followers",v:"+120K"},{k:"AOV",v:"₹82K"}]},
  { slug: "helix-healthcare", title: "Helix Healthcare", client: "Helix Medical Group", category: "Healthcare Platform", cats: ["Website Design","SEO","UI UX"], grad: "from-teal-500 via-purple-600 to-indigo-700", tagline: "Built a HIPAA-ready telemedicine platform serving 40K patients.", challenge: "Helix operated 12 clinics manually with paper records and no online booking. Doctor discovery was near-zero.", solution: "Custom Next.js patient portal, HIPAA-compliant infrastructure on AWS, local SEO for all 12 locations, WhatsApp appointment automation.", tech: ["Next.js", "AWS", "WATI", "Twilio", "Stripe"], timeline: "10 months", results: [{k:"Monthly patients",v:"40K"},{k:"No-show reduction",v:"-64%"},{k:"GBP calls",v:"+380%"},{k:"Doctor NPS",v:"78"}]},
  { slug: "vireo-education", title: "Vireo Education", client: "Vireo Learning", category: "EdTech Platform", cats: ["Website Design","Marketing Campaigns","UI UX"], grad: "from-emerald-500 via-purple-600 to-fuchsia-500", tagline: "Scaled an EdTech startup from 0 to 25K paid students in 14 months.", challenge: "Vireo had a course product with no marketing engine and inconsistent conversion rates.", solution: "YouTube-first content engine, high-converting course landing pages, WhatsApp-driven admission funnel, LinkedIn thought leadership for the founder.", tech: ["WordPress", "Thinkific", "YouTube", "WATI"], timeline: "14 months", results: [{k:"Paid students",v:"25,200"},{k:"YouTube subscribers",v:"180K"},{k:"Revenue MRR",v:"₹1.8 Cr"},{k:"Course NPS",v:"72"}]},
  { slug: "kairos-hospitality", title: "Kairos Hospitality", client: "Kairos Hotels & Resorts", category: "Hospitality Direct-Booking", cats: ["Website Design","Video Production","SEO"], grad: "from-rose-500 via-purple-600 to-indigo-600", tagline: "Cut OTA dependency by 61% for a luxury hotel chain.", challenge: "Kairos was 82% dependent on OTAs like Booking.com and paying 22% commission on every booking.", solution: "Redesigned website with direct-booking engine, drone-filmed cinematic property tours, multi-lingual SEO in 5 languages, Google Hotel Ads campaigns.", tech: ["Next.js", "SiteMinder", "Google Hotel Ads", "DJI Drone"], timeline: "8 months", results: [{k:"OTA dependency",v:"-61%"},{k:"Direct bookings",v:"+340%"},{k:"Revenue per room",v:"+28%"},{k:"Global rankings",v:"Top 5"}]},
];
export const portfolioBySlug = Object.fromEntries(portfolio.map(p => [p.slug, p]));

/* ===================== BLOG ===================== */
export const blogs = [
  { slug: "seo-strategy-2025", category: "SEO", icon: Search, title: "The Complete SEO Strategy for 2025: A CMO's Playbook", excerpt: "AI Overviews, entity SEO, topical authority and the new rules of ranking in Google's 2025 landscape.", author: "Rahul Verma", date: "June 18, 2025", read: "14 min", tags: ["SEO", "Strategy", "AI"], featured: true },
  { slug: "gpt-4-marketing-automation", category: "AI", icon: Bot, title: "How We Automated 60% of Our Marketing Ops with GPT-4 and n8n", excerpt: "A step-by-step blueprint for building AI-first marketing workflows that scale with your team.", author: "Ananya Sinha", date: "June 12, 2025", read: "11 min", tags: ["AI", "Automation", "Ops"] },
  { slug: "shopify-cro-2025", category: "Ecommerce", icon: ShoppingBag, title: "18 Shopify CRO Experiments That Actually Moved Revenue in 2025", excerpt: "Real experiments (not another Baymard summary) with hard revenue lift numbers from 40+ D2C brands.", author: "Karthik Iyer", date: "June 05, 2025", read: "18 min", tags: ["Ecommerce", "CRO", "Shopify"] },
  { slug: "meta-ads-creative-2025", category: "Ads", icon: Megaphone, title: "The New Meta Ads Creative Playbook: Beat Rising CPMs in 2025", excerpt: "Advantage+, creative testing frameworks and the 1:100 hook ratio driving 4x ROAS today.", author: "Meera Rao", date: "May 28, 2025", read: "12 min", tags: ["Meta Ads", "Creative", "Growth"] },
  { slug: "nextjs-vs-wordpress", category: "Development", icon: Code2, title: "Next.js vs WordPress in 2025: When to Migrate and When to Stay", excerpt: "A ruthlessly honest technical + commercial comparison based on 30+ real migrations we've delivered.", author: "Aditya Singh", date: "May 20, 2025", read: "10 min", tags: ["Next.js", "WordPress", "Tech"] },
  { slug: "whatsapp-automation-guide", category: "Automation", icon: Zap, title: "WhatsApp Business Automation: The 2025 Growth Marketer's Bible", excerpt: "Broadcasts, chatbots, CRM integrations and templates that 3x reply rates on WhatsApp.", author: "Ishaan Kapoor", date: "May 12, 2025", read: "9 min", tags: ["WhatsApp", "Automation", "CRM"] },
  { slug: "brand-identity-2025", category: "Branding", icon: Sparkles, title: "Anatomy of a Modern Brand Identity System (Digify4u Framework)", excerpt: "The 7-layer brand identity framework we use for every luxury and tech client we onboard.", author: "Nisha Menon", date: "May 04, 2025", read: "13 min", tags: ["Branding", "Design", "Identity"] },
  { slug: "performance-max-guide", category: "Ads", icon: LineChart, title: "Google Performance Max in 2025: What Actually Works Now", excerpt: "After spending ₹82 crore on PMax across 60+ accounts, here is the exact playbook that ships results.", author: "Rahul Verma", date: "April 26, 2025", read: "11 min", tags: ["Google Ads", "PMax", "Ecommerce"] },
];
export const blogBySlug = Object.fromEntries(blogs.map(b => [b.slug, b]));

/* ===================== BLOG CONTENT (rich body) ===================== */
export function getBlogContent(slug) {
  const b = blogBySlug[slug];
  if (!b) return null;
  return {
    ...b,
    toc: [
      { id: "introduction", label: "Introduction" },
      { id: "landscape", label: "The 2025 Landscape" },
      { id: "framework", label: "The Digify4u Framework" },
      { id: "execution", label: "Execution Playbook" },
      { id: "metrics", label: "Measuring Success" },
      { id: "pitfalls", label: "Common Pitfalls to Avoid" },
      { id: "conclusion", label: "Conclusion" },
      { id: "faq", label: "FAQ" },
    ],
    body: [
      { type: "h2", id: "introduction", text: "Introduction" },
      { type: "p", text: `2025 is not a continuation of 2024 — it is a phase-shift. In this in-depth guide, we unpack everything the Digify4u team has learned running ${b.category.toLowerCase()} playbooks across 250+ engagements this year, and we hand you the exact framework we use with every new client.` },
      { type: "p", text: `Whether you are a founder scaling from ₹1 Cr to ₹10 Cr in ARR, or a CMO trying to defend market share against nimbler competitors, this article is written for you — not for beginners looking for surface-level tips.` },
      { type: "h2", id: "landscape", text: "The 2025 Landscape" },
      { type: "p", text: `Three forces are reshaping ${b.category.toLowerCase()} in 2025: (1) the collapse of last-click attribution, (2) the rise of AI-native competitors, and (3) rising CPMs across every paid channel. Winners are the ones who adapt fastest.` },
      { type: "quote", text: `"The brands that will win 2025 are not the ones with the biggest budgets — they are the ones with the tightest feedback loops between creative, data and product."`, author: "Rahul Verma, Head of Growth at Digify4u" },
      { type: "h2", id: "framework", text: "The Digify4u Framework" },
      { type: "p", text: `We rely on a 5-layer framework: Insight → Strategy → Creative → Distribution → Measurement. Each layer feeds the next in a compounding loop.` },
      { type: "list", items: [ "Insight: incrementality & MMM, not last-click.", "Strategy: 90-day roadmap tied to hard KPIs.", "Creative: 80 assets/month, tested via 1:100 hooks.", "Distribution: full-funnel across owned + paid.", "Measurement: Looker dashboards + weekly reviews." ] },
      { type: "callout", text: `Pro tip: Insight without measurement is opinion. Measurement without strategy is noise. All five layers must run in tandem.` },
      { type: "h2", id: "execution", text: "Execution Playbook" },
      { type: "p", text: `Here is exactly what our first 90 days with a new client looks like when we deploy this framework in ${b.category.toLowerCase()}:` },
      { type: "list", items: [ "Week 1-2: Audit + baseline metrics + KPI alignment.", "Week 3-4: Creative & content sprints kick off.", "Week 5-8: Full campaign launches + iteration cycles.", "Week 9-12: Optimization + scale + quarterly review." ] },
      { type: "code", text: `// Example: Meta Ads structure we deploy on day 1\nCampaign\n  \u2514\u2500 ABO (Cold, Warm, Hot)\n     \u251c\u2500 Cold: Advantage+ Shopping (broad)\n     \u251c\u2500 Warm: Website visitors 30d\n     \u2514\u2500 Hot: Add-to-cart 14d + Purchasers 180d lookalike` },
      { type: "h2", id: "metrics", text: "Measuring Success" },
      { type: "p", text: `Track leading indicators weekly and lagging indicators monthly. Leading = hook rate, CTR, CVR. Lagging = LTV, retention, ROAS.` },
      { type: "h2", id: "pitfalls", text: "Common Pitfalls to Avoid" },
      { type: "list", items: [ "Over-testing without statistical significance.", "Ignoring incrementality — credit-hoarding channels.", "Cutting brand spend when performance underdelivers.", "Fragmented reporting across 12 tools." ] },
      { type: "h2", id: "conclusion", text: "Conclusion" },
      { type: "p", text: `${b.category} in 2025 rewards operators, not spectators. If you'd like Digify4u to deploy this framework for your brand, book a strategy call — the first audit is on us.` },
    ],
    faqs: [
      { q: `What tools do you recommend to get started with ${b.category}?`, a: `Start with the free versions of GA4, GSC, Looker Studio and Ahrefs Webmaster Tools. Once ROI is proven, layer in paid tools like Ahrefs, Semrush, Klaviyo and n8n.` },
      { q: `How long before I see results?`, a: `30–60 days for leading indicators, 90–180 days for compounding results. Anyone promising instant results is selling snake oil.` },
      { q: `Do you offer ${b.category} consulting as a standalone?`, a: `Yes — we offer 90-minute strategy calls (₹15K) and 90-day sprints (₹3L+) as standalone engagements, though most clients scale into full retainers.` },
    ],
  };
}

export const testimonials = [
  { name: "Ananya Kapoor", role: "Founder, Aetheria", quote: "Digify4u re-imagined our entire brand and grew our D2C revenue 6x in 9 months. Rare combination of taste and execution.", rating: 5 },
  { name: "Rohan Mehta", role: "CMO, Nova Fintech", quote: "Their SEO and performance team is world-class. We hit 1M organic sessions and cut CAC by 40% in two quarters.", rating: 5 },
  { name: "Sara Iyer", role: "CEO, Pulse Fitness", quote: "It felt like hiring an in-house team, but 10x sharper. Every touchpoint of our app now feels premium.", rating: 5 },
  { name: "Vikram Shah", role: "Director, Kairos Hotels", quote: "They cut our OTA dependency 61% in 8 months and made us look like a luxury global brand.", rating: 5 },
  { name: "Priya Nair", role: "Founder, Lumen Jewelry", quote: "Digify4u launched our brand into Vogue India — no other agency I spoke to could pull that off.", rating: 5 },
  { name: "Dr. Arjun Rao", role: "CEO, Helix Healthcare", quote: "They built our HIPAA-ready platform and grew organic patient enquiries by 380%. Zero downtime, zero drama.", rating: 5 },
];
