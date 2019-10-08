import React from 'react';
import Tags from './Tags';
import StyledLink from '../shared/Link';
import CourseCard from '../CourseCard';
import ContentSection from '../shared/ContentSection';
import './Course.scss';

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

export default Course;
