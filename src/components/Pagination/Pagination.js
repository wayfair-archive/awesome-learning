import React from "react";
import { Link } from "gatsby";
import { PAGINATION } from "../../constants";
import "./Pagination.scss";

const Pagination = ({
  prevPagePath,
  nextPagePath,
  hasNextPage,
  hasPrevPage
}) => (
  <div className="Pagination">
    {hasPrevPage && (
      <div className="Pagination-prev">
        <Link rel="prev" to={prevPagePath} className="Pagination-prev-link">
          {PAGINATION.PREV_PAGE}
        </Link>
      </div>
    )}
    {hasNextPage && (
      <div className="Pagination-next">
        <Link rel="next" to={nextPagePath} className="Pagination-next-link">
          {PAGINATION.NEXT_PAGE}
        </Link>
      </div>
    )}
  </div>
);

export default Pagination;
