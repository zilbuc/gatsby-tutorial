import React from 'react';
import Layout from '../components/layout';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Bikes = ({ data }) => {
  const bikeData = data.allBikeQuery.edges;

  return (
    <Layout>
      <h3>Bikes</h3>

      {bikeData.map(({ node:bike }) => {
        return (
          <div key={bike.id} style={{ padding: '10px', margin: '5px'}}>
            <Img fluid={bike.image.fluid} alt='bike'/>
            <h3 style={{ marginBottom: '5px'}}>
              {bike.title}{' '}
              <span style={{ color: 'grey', marginLeft: '15px'}}>
                ${bike.price}
              </span>
            </h3>
            {/* <p>{bike.description.description}</p> */}
            <Link to={`/bikes/${bike.title}`}><h3>Details</h3></Link>
          </div>
        )
      })}

      <Link to='/' >Home</Link>
    </Layout>
  );
}

export const query = graphql`
{
  allBikeQuery: allContentfulBike {
    edges {
      node {
        id
        title
        description {
          description
        }
        price
        image {
          fluid (maxWidth: 1500) {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
}
`

export default Bikes;
