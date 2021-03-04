const siteConfig = require('./config.js');

module.exports = {
  pathPrefix: '/awesome-learning',
  siteMetadata: {
    url: siteConfig.url,
    title: siteConfig.title,
    subtitle: siteConfig.subtitle,
    copyright: siteConfig.copyright,
    repoName: siteConfig.repoName,
    repoOwner: siteConfig.repoOwner,
    menu: siteConfig.menu,
    author: siteConfig.author,
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/static`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {wrapperStyle: 'margin-bottom: 1.0725rem'},
          },
          'gatsby-remark-autolink-headers',
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [siteConfig.googleAnalyticsId],
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: siteConfig.title,
        short_name: siteConfig.title,
        start_url: '/',
        background_color: '#FFF',
        theme_color: '#455A81',
        display: 'standalone',
        icon: 'static/wayfair.svg',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        cssLoaderOptions: {
          camelCase: false,
        },
        data: `@import "${__dirname}/src/assets/scss/styles";`,
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    `custom-mui-theme`,
    {
      resolve: 'gatsby-plugin-eslint',
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Muli`, `Varela`],
        display: 'swap',
      },
    },
    `gatsby-plugin-preload-fonts`,
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        // A unique name for the search index. This should be descriptive of
        // what the index contains. This is required.
        name: 'techtalks',

        // Set the search engine to create the index. This is required.
        // The following engines are supported: flexsearch, lunr
        engine: 'flexsearch',

        // GraphQL query used to fetch all data for the search index. This is
        // required.
        query: `
          {
            allMarkdownRemark {
              nodes {
                id
                frontmatter {
                  description
                  group
                  tags
                  title
                  speakers {
                    name
                  }
                }
              }
            }
          }
        `,

        // Field used as the reference value for each document.
        // Default: 'id'.
        ref: 'id',

        // List of keys to index. The values of the keys are taken from the
        // normalizer function below.
        // Default: all fields
        index: ['title', 'tags', 'name', 'description', 'group', 'id'],

        // List of keys to store and make available in your UI. The values of
        // the keys are taken from the normalizer function below.
        // Default: all fields
        store: ['title', 'tags', 'name', 'description', 'group', 'id'],

        // Function used to map the result from the GraphQL query. This should
        // return an array of items to index in the form of flat objects
        // containing properties to index. The objects must contain the `ref`
        // field above (default: 'id'). This is required.
        normalizer: ({ data }) =>
          data.allMarkdownRemark.nodes.map(node => ({
            id: node.id,
            description: node.frontmatter.description,
            group: node.frontmatter.group,
            tags: node.frontmatter.tags,
            title: node.frontmatter.title,
          })),
      },
    },
  ],
};
