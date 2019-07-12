import React from "react";
import StyledLink from "../Link";
import "./Courses.scss";

const Courses = ({ edges, isHorizontal }) =>
  (isHorizontal ? (
    <div className="CourseList--isHorizontal">
      {edges.map(edge => (
        <div className="CourseList-card" key={edge.node.fields.slug}>
          <div className="CourseList-itemTitle">
            <StyledLink variation={"primary"} path={edge.node.fields.slug}>
              {edge.node.frontmatter.title}
            </StyledLink>
          </div>
          <StyledLink variation={"pill"} path={edge.node.fields.slug}>
            Go Learn
          </StyledLink>
        </div>
      ))}
    </div>
  ) : (
    <div className="CourseList">
      {edges.map(edge => (
        <div className="CourseList-item" key={edge.node.fields.slug}>
          <StyledLink variation={"tertiary"} path={edge.node.fields.categorySlug}>
            {edge.node.frontmatter.category}
          </StyledLink>
          <div className="CourseList-itemTitle">
            <StyledLink variation={"primary"} path={edge.node.fields.slug}>
              {edge.node.frontmatter.title}
            </StyledLink>
          </div>
          <p className="CourseList-itemDescription">
            {edge.node.frontmatter.description}
          </p>
          <StyledLink variation={"pill"} path={edge.node.fields.slug}>
            Go Learn
          </StyledLink>
        </div>
      ))}
  </div>
  ));

export default Courses;
