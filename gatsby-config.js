module.exports = {
  siteMetadata: {
    title: 'BLOGari',
    author: 'Ander F. L.',
    description: 'Lanbide heziketako dokumentazioa',
  },
  plugins: [
    `gatsby-plugin-fontawesome-css`,
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#BCC6D4',
        theme_color: '#BCC6D4',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
