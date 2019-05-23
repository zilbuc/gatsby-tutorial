import React from 'react';
import Layout from '../components/layout';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

const BikeTemplate = ({data}) => {
  const { title, price } = data.bikeQuery;
  const { description } = data.bikeQuery.description;
  const { fluid } = data.bikeQuery.image;

  return (
    <Layout>
      <h2>Bike</h2>
      <Img fluid={fluid} alt='bike'/>
      <h3 style={{ marginBottom: '5px'}}>
        {title}{' '}
        <span style={{ color: 'grey', marginLeft: '15px'}}>
          ${price}
        </span>
      </h3>
      <p>{description}</p>

      <Link to='/bikes/'>Back to Bikes</Link>
    </Layout>
  );
}

export const query = graphql`
  query($id:String!) {
    bikeQuery: contentfulBike (id: {eq: $id}) {
      title
      price
      description	{
        description
      }
      image {
        fluid {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`

export default BikeTemplate;
