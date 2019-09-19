"use strict";

const siteConfig = require("./config.js");

// sort: { order: DESC, fields: [frontmatter___date] },
module.exports = {
  pathPrefix: '/awesome-learning',
  siteMetadata: {
    url: siteConfig.url,
    title: siteConfig.title,
    subtitle: siteConfig.subtitle,
    copyright: siteConfig.copyright,
    repoName: siteConfig.repoName,
    repoOwner: siteConfig.repoOwner,
    disqusShortname: siteConfig.disqusShortname,
    menu: siteConfig.menu,
    author: siteConfig.author
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content`,
        name: "pages"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/media`,
        name: "media"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/static`
      }
    },
    {
      resolve: "gatsby-plugin-feed",
      options: {
        query: `
          {
            site {
              siteMetadata {
                site_url: url
                title
                description: subtitle
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) =>
              allMarkdownRemark.edges.map(edge =>
                Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.frontmatter.description,
                  // date: edge.node.frontmatter.date,
                  url: site.siteMetadata.site_url + edge.node.fields.slug,
                  guid: site.siteMetadata.site_url + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }]
                })),
            query: `
              {
                allMarkdownRemark(
                  limit: 1000,
                  filter: { frontmatter: { template: { eq: "course" }, draft: { ne: true } } }
                ) {
                  edges {
                    node {
                      html
                      fields {
                        slug
                      }
                      frontmatter {
                        title
                        template
                        draft
                        description
                        timeToCompletion
                        videoLinks
                        preReadQuizLink
                        secondaryExerciseUrl
                        course
                        lessons {
                          description
                          link
                          title
                        }
                        readingLinks {
                          link
                          description
                          title
                        }
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml"
          }
        ]
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-katex",
            options: {
              strict: "ignore"
            }
          },
          {
            resolve: "gatsby-remark-images",
            options: { maxWidth: 960 }
          },
          {
            resolve: "gatsby-remark-responsive-iframe",
            options: { wrapperStyle: "margin-bottom: 1.0725rem" }
          },
          "gatsby-remark-autolink-headers",
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants"
        ]
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-netlify",
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [siteConfig.googleAnalyticsId],
        pluginConfig: {
          head: true
        }
      }
    },
    // {
    //   resolve: 'gatsby-plugin-sitemap',
    //   options: {
    //     query: `
    //       {
    //         site {
    //           siteMetadata {
    //             url
    //           }
    //         }
    //         allSitePage(
    //           filter: {
    //             path: { regex: "/^(?!/404/|/404.html|/dev-404-page/)/" }
    //           }
    //         ) {
    //           edges {
    //             node {
    //               path
    //             }
    //           }
    //         }
    //       }
    //     `,
    //     output: '/sitemap.xml',
    //     serialize: ({ site, allSitePage }) => allSitePage.edges.map((edge) => ({
    //       url: site.siteMetadata.url + edge.node.path,
    //       changefreq: 'daily',
    //       priority: 0.7
    //     }))
    //   }
    // },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: siteConfig.title,
        short_name: siteConfig.title,
        start_url: "/",
        background_color: "#FFF",
        theme_color: "#F7A046",
        display: "standalone",
        icon: "static/photo.jpg"
      }
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-catch-links",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        cssLoaderOptions: {
          camelCase: false
        }
      }
    }
  ]
};
