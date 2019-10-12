import React from "react";
import PropTypes from "prop-types";
import Tags from "./Tags";
import StyledLink from "../Link";
import CourseCard from "../CourseCard";
import ContentSection from "../ContentSection";
import "./Course.scss";

const Course = ({ course }) => {
  const { tags, title, description, lessons } = course.frontmatter;
  const { tagSlugs, slug } = course.fields;
  return (
    <div className="Course">
      <div className="Course-backLink">
        <StyledLink variation={"tertiary"} path={"/courses"}>
          Back to Courses
        </StyledLink>
      </div>
      <ContentSection title={title}>
        <p>{description}</p>
      </ContentSection>
      <ul>
        {lessons.map(({ link, title, description }) => {
          const composedLink = `${slug}${link}`;
          return (
            <CourseCard
              key={title}
              title={title}
              link={composedLink}
              description={description}
            />
          );
        })}
      </ul>
      {tags.length > 2 && (
        <React.Fragment>
          <div className="Course-footer" />
          <ContentSection title="Related Themes">
            <Tags tags={tags} tagSlugs={tagSlugs} />
          </ContentSection>
        </React.Fragment>
      )}
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.shape({
    frontmatter: PropTypes.shape({
      tags: PropTypes.array,
      title: PropTypes.string,
      description: PropTypes.node,
      lessons: PropTypes.arrayOf(PropTypes.object)
    }).isRequired,
    fields: PropTypes.shape({
      tagSlugs: PropTypes.array,
      slug: PropTypes.string
    })
  })
}

export default Course;
