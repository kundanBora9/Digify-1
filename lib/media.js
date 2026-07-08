/* Central image manifest — all real Unsplash / Pexels URLs curated for their subjects */

const unsplash = (id, w = 1600) => `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;
const pexels = (id, w = 1600) => `https://images.pexels.com/photos/${id.split("/")[0]}/pexels-photo-${id.split("/")[0]}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const portfolioImages = {
  "aetheria-skincare": {
    hero: unsplash("photo-1567721913486-6585f069b332"),
    gallery: [
      unsplash("photo-1567721913486-6585f069b332", 1200),
      "https://images.pexels.com/photos/4857813/pexels-photo-4857813.jpeg?auto=compress&cs=tinysrgb&w=1200",
      unsplash("photo-1526628953301-3e589a6a8b74", 1200),
    ],
  },
  "nova-fintech": {
    hero: unsplash("photo-1526628953301-3e589a6a8b74"),
    gallery: [
      unsplash("photo-1526628953301-3e589a6a8b74", 1200),
      "https://images.pexels.com/photos/27641095/pexels-photo-27641095.jpeg?auto=compress&cs=tinysrgb&w=1200",
      unsplash("photo-1551288049-bebda4e38f71", 1200),
    ],
  },
  "pulse-fitness": {
    hero: unsplash("photo-1541534741688-6078c6bfb5c5"),
    gallery: [
      unsplash("photo-1541534741688-6078c6bfb5c5", 1200),
      unsplash("photo-1526506118085-60ce8714f8c5", 1200),
      unsplash("photo-1571019613454-1cb2f99b2d8b", 1200),
    ],
  },
  "orbit-realty": {
    hero: "https://images.pexels.com/photos/26838218/pexels-photo-26838218.jpeg?auto=compress&cs=tinysrgb&w=1600",
    gallery: [
      "https://images.pexels.com/photos/26838218/pexels-photo-26838218.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/12594566/pexels-photo-12594566.jpeg?auto=compress&cs=tinysrgb&w=1200",
      unsplash("photo-1560518883-ce09059eeffa", 1200),
    ],
  },
  "lumen-jewelry": {
    hero: "https://images.pexels.com/photos/29043373/pexels-photo-29043373.jpeg?auto=compress&cs=tinysrgb&w=1600",
    gallery: [
      "https://images.pexels.com/photos/29043373/pexels-photo-29043373.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/7700270/pexels-photo-7700270.jpeg?auto=compress&cs=tinysrgb&w=1200",
      unsplash("photo-1515562141207-7a88fb7ce338", 1200),
    ],
  },
  "helix-healthcare": {
    hero: "https://images.pexels.com/photos/8442034/pexels-photo-8442034.jpeg?auto=compress&cs=tinysrgb&w=1600",
    gallery: [
      "https://images.pexels.com/photos/8442034/pexels-photo-8442034.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/6129679/pexels-photo-6129679.jpeg?auto=compress&cs=tinysrgb&w=1200",
      unsplash("photo-1576091160399-112ba8d25d1d", 1200),
    ],
  },
  "vireo-education": {
    hero: unsplash("photo-1524178232363-1fb2b075b655"),
    gallery: [
      unsplash("photo-1524178232363-1fb2b075b655", 1200),
      unsplash("photo-1571260899304-425eee4c7efc", 1200),
      unsplash("photo-1523240795612-9a054b0db644", 1200),
    ],
  },
  "kairos-hospitality": {
    hero: unsplash("photo-1599696848652-f0ff23bc911f"),
    gallery: [
      unsplash("photo-1599696848652-f0ff23bc911f", 1200),
      unsplash("photo-1549654378-6a6d59af5767", 1200),
      unsplash("photo-1520250497591-112f2f40a3f4", 1200),
    ],
  },
};

export const blogImages = {
  "seo-strategy-2025": unsplash("photo-1560472354-b33ff0c44a43"),
  "gpt-4-marketing-automation": unsplash("photo-1677442136019-21780ecad995"),
  "shopify-cro-2025": "https://images.pexels.com/photos/7620566/pexels-photo-7620566.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "meta-ads-creative-2025": "https://images.pexels.com/photos/533446/pexels-photo-533446.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "nextjs-vs-wordpress": unsplash("photo-1461749280684-dccba630e2f6"),
  "whatsapp-automation-guide": unsplash("photo-1592890288564-76628a30a657"),
  "brand-identity-2025": "https://images.pexels.com/photos/4623113/pexels-photo-4623113.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "performance-max-guide": unsplash("photo-1551288049-bebda4e38f71"),
};

export function getPortfolioImage(slug) {
  return portfolioImages[slug] || { hero: unsplash("photo-1497366216548-37526070297c"), gallery: [] };
}
export function getBlogImage(slug) {
  return blogImages[slug] || unsplash("photo-1497366216548-37526070297c");
}
