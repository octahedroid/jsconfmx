module.exports = {
  siteMetadata: {
    title: `Mexico`,
    description: `We do JAMstack`,
    author: `@jmolivas`,
    github: `https://github.com/octahedroid`,
    blog: `/#`,
    product: `/#`,
    docs: `/#`,
    siteUrl: 'http://example.com'
  },
  plugins: [
    {
      resolve: `gatsby-theme-jsconfmx`,
      options: {
        root: __dirname,
        themePath: `${__dirname}/theme`
      }
    }
  ]
};
