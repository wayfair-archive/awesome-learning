import React from 'react';
import Block from '../shared/Block';
import SectionTitle from '../shared/SectionTitle';
import Carousel from '../Carousel';
import './Landing.scss';

const COURSE_DATA_MAPPING = {
  'Data Types': {
    icon: 'data',
    subTitle: 'Deep dive into types, equality, coercion, immutability and more.'
  },
  'Array Methods': {
    icon: 'array',
    subTitle: 'Learn functional array methods like filter, map, and reduce!'
  },
  Promises: {
    icon: 'async',
    subTitle: 'Learn the Promise API inside and out.'
  },
  Testing: {
    icon: 'testing',
    subTitle:
      'Learn frontend testing with Jest, Enzyme, and React Testing Library.'
  },
  'React Hooks': {
    icon: 'hook',
    subTitle: 'Learn react hooks.'
  },
  'Functions and Scope': {
    icon: 'function',
    subTitle: 'Learn about function and scopes.',
  },
  'CSS Layouts': {
    icon: 'info',
    subTitle: 'Learn about CSS fundamentals on layouts.',
  }
};

const Landing = ({courseEdges}) => (
  <div className="Landing">
    <div className="Landing-heroWrapper">
      <div className="Landing-titleWrapper">
        <SectionTitle is="h2" fontSize="xl" mb="32px">
          Learn JavaScript and Front-End Fundamentals.
        </SectionTitle>
        <Block mb="16px">
          Awesome Learning is Frontend focused learning platform built around{' '}
          <b>deliberate practice</b>.
        </Block>
        <Block>
          Our courses are designed to be perfect for <b>group programming</b>.
        </Block>
      </div>
    </div>
    <div className="Landing-callOut">
      <div className="Landing-courseWrapper">
        <Block mb="20px" is="h3">
          Our Courses:
        </Block>
        <Carousel
          items={courseEdges.map(({node}) => {
            const {id, frontmatter, fields} = node;
            const {title} = frontmatter;
            return {
              id,
              title,
              icon: COURSE_DATA_MAPPING[title]
                ? COURSE_DATA_MAPPING[title].icon
                : 'array',
              subTitle: COURSE_DATA_MAPPING[title]
                ? COURSE_DATA_MAPPING[title].subTitle
                : title,
              path: fields.slug
            };
          })}
        />
      </div>
    </div>
  </div>
);

export default Landing;
