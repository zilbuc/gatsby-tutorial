import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const componentQuery = graphql`
  {
    siteMetadataQuery: site {
      siteMetadata {
        title
        author
      }
    }
  }
`;

const Info = () => {
  return (
    <StaticQuery
      query={componentQuery}
      render={data => {
        const siteInfo = data.siteMetadataQuery.siteMetadata;
        const { title, author } = siteInfo;
        return (
          <div>{title} by {author}</div>
        )
      }}
    />
  )
}

export default Info;
