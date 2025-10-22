/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://aliairtravels.com",
  generateRobotsTxt: true,
  sitemapSize: 5000, 
  changefreq: "daily",
  priority: 0.8,
  exclude: ["/admin/*", "/login/*", "/api/*"],
  alternateRefs: [
    {
      href: "https://aliairtravels.com/",
      hreflang: "en",
    },
    {
      href: "https://aliairtravels.com/",
      hreflang: "bn",
    },
  ],
};
