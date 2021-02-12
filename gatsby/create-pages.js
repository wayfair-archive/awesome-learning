const path = require("path");
const _ = require("lodash");
const createCategoriesPages = require("./pagination/create-categories-pages.js");
const createTagsPages = require("./pagination/create-tags-pages.js");
const siteConfig = require('../config.js');

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const { coursesPerPage } = siteConfig;

  // Home page
  createPage({
    path: "/",
    component: path.resolve("./src/templates/index-template.js"),
    context: {
      coursesLimit: coursesPerPage,
      coursesOffset: 0
    }
  });

  // 404
  createPage({
    path: "/404",
    component: path.resolve("./src/templates/not-found-template.js")
  });

  // Tags list
  createPage({
    path: "/tags",
    component: path.resolve("./src/templates/tags-list-template.js")
  });

  // How to
  createPage({
    path: "/howTo",
    component: path.resolve("./src/templates/howTo-template.js")
  });

  // Categories list
  createPage({
    path: "/categories",
    component: path.resolve("./src/templates/categories-list-template.js")
  });

  // Courses list
  createPage({
    path: "/courses",
    component: path.resolve("./src/templates/course-list-template.js")
  });

  // Tracks list
  createPage({
    path: "/tech-talks",
    component: path.resolve("./src/templates/tech-talk-list-template.js")
  });

  // Courses and pages from markdown
  const result = await graphql(`
    {
      allMarkdownRemark(filter: { frontmatter: { draft: { ne: true } } }) {
        edges {
          node {
            frontmatter {
              template
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  const { edges } = result.data.allMarkdownRemark;

  _.each(edges, (edge) => {
    const templateName = _.get(edge, "node.frontmatter.template");
    const templateNameToComponentLocationMap = {
      course: "./src/templates/course-template.js",
      lesson: "./src/templates/lesson-template.js",
      page: "./src/templates/page-template.js",
      techtalk: "./src/templates/tech-talk-template.js",
    };
    
    // If the requested template matches a known template,
    // create a page for it
    if (templateNameToComponentLocationMap[templateName]) {
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve(templateNameToComponentLocationMap[templateName]),
        context: { slug: edge.node.fields.slug }
      });
      if (templateName === "lesson") {
        // Create quiz pages for every lesson
        createPage({
          path: `${edge.node.fields.slug}/quiz`,
          component: path.resolve("./src/templates/quiz-template.js"),
          context: { slug: edge.node.fields.slug }
        });
      }
    }
  });

  // Feeds
  await createTagsPages(graphql, actions);
  await createCategoriesPages(graphql, actions);
};

module.exports = createPages;
