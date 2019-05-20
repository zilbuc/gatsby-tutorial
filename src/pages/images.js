import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import dude from '../images/portfolio/W_2014_365.jpg';
import DudeGatsby from '../components/dude';

const Images = ({data}) => {
  const imageData = data.siteImagesQuery.edges;

  return  <Layout>
            <h1>Hello - this is IMAGES page</h1>
            <h6>{data.siteImagesQuery.totalCount}</h6>
            <h6>{JSON.stringify(data.siteImagesQuery.edges[0])}</h6>
            <h6>{data.siteImagesQuery.edges[0].node.relativePath}</h6>
            <h4>All Images:</h4>
              {imageData.map(({ node }, index) => {
                return <h5 key={index}>{node.relativePath}</h5>
              })}
              <img src={dude} alt='cisgender man in black' />
              <br />
              <DudeGatsby />
            <Link to='/' >Home</Link>
          </Layout>
};

export const query = graphql`
  {
    siteImagesQuery: allFile {
      totalCount
      edges {
        node {
          relativePath
        }
      }
    }
  }
`

export default Images;
