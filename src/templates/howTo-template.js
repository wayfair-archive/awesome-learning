import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/shared/Layout';
import HowTo from '../components/HowTo';

const HowToTemplate = ({path}) => (
  <Layout 
    title="How To Get Started" 
    description="Learn how to use the Awesome Learning education platform!" 
    isFullBleed
    slug={path}
  >
    <HowTo />
  </Layout>
);

HowToTemplate.propTypes = {
  path: PropTypes.string.isRequired
};

export default HowToTemplate;
