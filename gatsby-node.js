const path = require('path');

module.exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allBikeQuery: allContentfulBike {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  `)
  .then(result => {
    result.data.allBikeQuery.edges.forEach(({ node }) => {
      createPage({ path: `bikes/${node.title}`,
                   component: path.resolve('./src/templates/bike-template.js'),
                   context: {
                     id: node.id
                   }
      })
    })
  })
  .catch(err => console.log(err))
}
