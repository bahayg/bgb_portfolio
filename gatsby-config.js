module.exports = {
  siteMetadata: {
    title: 'Bahay Gulle Bilgi - Portfolio',
    author: 'Bahay Gulle Bilgi',
    description: 'Portfolio website for Bahay Gulle Bilgi',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/bgb-favicon512.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
