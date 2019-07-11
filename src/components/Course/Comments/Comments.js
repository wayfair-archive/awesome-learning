import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import ReactDisqusComments from 'react-disqus-comments';

export const PureComments = ({ data, courseTitle, courseSlug }) => {
  const {
    url,
    disqusShortname
  } = data.site.siteMetadata;

  if (!disqusShortname) {
    return null;
  }

  return (
    <ReactDisqusComments
      shortname={disqusShortname}
      identifier={courseTitle}
      title={courseTitle}
      url={url + courseSlug}
    />
  );
};

export const Comments = (props) => (
  <StaticQuery
    query={graphql`
      query CommentsQuery {
        site {
          siteMetadata {
            disqusShortname
            url
          }
        }
      }
    `}
    render={(data) => <PureComments {...props} data={data}/>}
  />
);

export default Comments;
