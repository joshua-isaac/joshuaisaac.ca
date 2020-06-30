exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      allMdx(filter: { frontmatter: { type: { eq: "post" } } }) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)
  const posts = data.allMdx.edges
  posts.forEach((edge, index) => {
    const slug = edge.node.frontmatter.slug
    const prev = index === 0 ? false : posts[index - 1].node
    const next = index === posts.length - 1 ? false : posts[index + 1].node
    actions.createPage({
      path: `/blog/${slug}`,
      component: require.resolve(`./src/templates/blog-template.js`),
      context: {
        slug: slug,
        prev,
        next,
      },
    })
  })
}
