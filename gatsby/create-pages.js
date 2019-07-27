"use strict";

const path = require("path");
const _ = require("lodash");
const createCategoriesPages = require("./pagination/create-categories-pages.js");
const createTagsPages = require("./pagination/create-tags-pages.js");
const createCoursesPages = require("./pagination/create-courses-pages.js");
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
    if (_.get(edge, "node.frontmatter.template") === "page") {
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve("./src/templates/page-template.js"),
        context: { slug: edge.node.fields.slug }
      });
    } else if (_.get(edge, "node.frontmatter.template") === "course") {
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve("./src/templates/course-template.js"),
        context: { slug: edge.node.fields.slug }
      });
    } else if (_.get(edge, "node.frontmatter.template") === "lesson") {
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve("./src/templates/lesson-template.js"),
        context: { slug: edge.node.fields.slug }
      });
      // Create quiz pages for every lesson
      createPage({
        path: `${edge.node.fields.slug}/quiz`,
        component: path.resolve("./src/templates/quiz-template.js"),
        context: { slug: edge.node.fields.slug }
      });
    }
  });

  // Feeds
  await createTagsPages(graphql, actions);
  await createCategoriesPages(graphql, actions);
  await createCoursesPages(graphql, actions);
};

module.exports = createPages;
