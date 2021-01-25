module.exports = {
  siteMetadata: {
    title: 'help-jbnu--page',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [
          require('tailwindcss')('./configs/tailwind.config.js'),
          require('autoprefixer'),
        ],
      },
    },
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@hooks': 'src/hooks',
          '@containers': 'src/containers',
          '@components': 'src/components',
          '@pages': 'src/pages',
          '@utils': 'src/utils',
          '@images': 'src/images',
        },
        extensions: ['js', 'jsx'],
      },
    },
  ],
};
