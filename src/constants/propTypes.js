import PropTypes from "prop-types";

export const PAGE_CONTEXT_PROP_TYPE = PropTypes.shape({
  category: PropTypes.string.isRequired,
  currentPage: PropTypes.number.isRequired,
  prevPagePath: PropTypes.string.isRequired,
  nextPagePath: PropTypes.string.isRequired,
  hasPrevPage: PropTypes.bool.isRequired,
  hasNextPage: PropTypes.bool.isRequired,
});

export const SITE_METADATA_PROP_TYPE = PropTypes.shape({
  siteMetadata: PropTypes.shape({
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired
});
