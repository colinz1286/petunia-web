/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.petuniapets.com',
  generateRobotsTxt: true,
  exclude: ['/app', '/loginsignup'], // optional: hide private/dynamic routes
  sitemapSize: 5000,
};
