'use strict';

const path = require('path');
const siteConfig = require('../../config.js');

module.exports = async (graphql, actions) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { template: { eq: "course" }, draft: { ne: true } } }
      ) { totalCount }
    }
  `);

  const { coursesPerPage } = siteConfig;
  const numPages = Math.ceil(result.data.allMarkdownRemark.totalCount / coursesPerPage);

  for (let i = 0; i < numPages; i += 1) {
    createPage({
      path: i === 0 ? '/courses/' : `/courses/page/${i}`,
      component: path.resolve('./src/templates/course-list-template.js'),
      context: {
        currentPage: i,
        coursesLimit: coursesPerPage,
        coursesOffset: i * coursesPerPage,
        prevPagePath: i <= 1 ? '/courses' : `/courses/page/${i - 1}`,
        nextPagePath: `/courses/page/${i + 1}`,
        hasPrevPage: i !== 0,
        hasNextPage: i !== numPages - 1
      }
    });
  }
};
