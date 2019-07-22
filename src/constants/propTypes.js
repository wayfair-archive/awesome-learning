import PropTypes from "prop-types";

export const PAGE_CONTEXT_PROP_TYPE = PropTypes.shape({
  category: PropTypes.string,
  currentPage: PropTypes.number,
  prevPagePath: PropTypes.string,
  nextPagePath: PropTypes.string,
  hasPrevPage: PropTypes.bool,
  hasNextPage: PropTypes.bool
});

export const TITLE_PROP_TYPE = PropTypes.shape({
  site: PropTypes.shape({
    siteMetadata: PropTypes.shape({
      subtitle: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
});
