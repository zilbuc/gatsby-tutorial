import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

const getWill = graphql`
  {
    getWillQuery: file(relativePath: {eq: "portfolio/W_2014_365.jpg"}) {
      childImageSharp {
        fixed(width: 350, height: 200) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    getWillQueryFluid: file(relativePath: {eq: "portfolio/W_2014_365.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const dude = ({}) => {
  return (
    <StaticQuery
      query={getWill}
      render={data => {
        const willSrc = data.getWillQuery.childImageSharp.fixed;
        const willSrcFluid = data.getWillQueryFluid.childImageSharp.fluid;
        console.log(data);
        return <div>
                <Img fixed={willSrc} alt='Yo dude Will!' />
                <div style={{ maxWidth: `300px` }}>
                  <Img fluid={willSrcFluid} alt='Yo dude Will fluid bro!' />
                </div>
               </div>
      }}
    />
  );
}


export default dude;
