module.exports = {
  siteMetadata: {
    siteUrl: `https://help-jbnu.minung.dev`,
    title: `알려줘전북대`,
    description: `전북대생을 위한 정보 챗봇. 알려줘전북대의 웹페이지입니다.`,
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
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'G-VFMH8MD505', // Google Analytics / GA
        ],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    // 'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `알려줘전북대`,
        short_name: `알려줘전북대`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#f59f0b`,
        display: `fullscreen`,
        icon: 'src/images/logo.png',
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
          '@api': 'src/api',
        },
        extensions: ['js', 'jsx'],
      },
    },
  ],
};
