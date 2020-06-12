/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const {slugify} = require('./functions/utility')
const path = require(`path`)
const _ = require(`lodash`)
// const authors = require ('./functions/authors')

exports.onCreateNode = ({node, actions})=>{
    const { createNodeField } = actions
    if(node.internal.type === 'MarkdownRemark'){
        const slugFromTitle = slugify(node.frontmatter.title)
        createNodeField({
            node,
            name:`slug`,
            value: slugFromTitle,
        })
    }
}

exports.createPages = ({actions, graphql})=>{
    const { createPage } = actions
    // const singlePostTemplate = path.resolve('src/templates/singlePost.js')

    const templates = {
        singPost: path.resolve('src/templates/singlePost.js'),
        tagsPage: path.resolve('src/templates/tags-page.js'),
        tagPosts: path.resolve('src/templates/tag-posts.js'),
        postList: path.resolve('src/templates/post-list.js'),
    }

    return graphql(`
    {
        allMarkdownRemark{ 
            edges {
                node {
                    frontmatter {
                        author  
                        tags                      
                   }
                   fields{
                      slug
                   }
                }
            }
        }
     }
    `).then(res => {
            if(res.errors) return Promise.reject(res.errors)

            const posts = res.data.allMarkdownRemark.edges

            posts.forEach(({node}) => {
                createPage({
                    path:node.fields.slug,
                    component: templates.singPost,
                    context:{
                        slug: node.fields.slug,
                        // imageUrl: authors.find(x => x.name === node.frontmatter.author).imageUrl
                    }
                })
            })

            let tags = []
            _.each(posts, edge => {
                if (_.get(edge, 'node.frontmatter.tags')){
                    tags = tags.concat(edge.node.frontmatter.tags)
                }
            })

            let tagPostCounts= {}
            tags.forEach(tag => {
                tagPostCounts[tag] = (tagPostCounts[tag] || 0) + 1;
            })

            tags = _.uniq(tags)

            createPage({
                path: `/tags`,
                component: templates.tagsPage,
                context: {
                    tags,
                    tagPostCounts
                }
            })

        tags.forEach(tag => {
            createPage({
                path: `/tags/${slugify(tag)}`,
                component: templates.tagPosts,
                context: {
                    tags
                }
            })
        })

        const postsPerPage = 2
        const numberOfPages = Math.ceil(posts.length / postsPerPage)

        Array.from({length: numberOfPages}).forEach((_, index) => {
                const isFirstPage = index === 0
                const currentPage = index + 1

            if (isFirstPage) return

            createPage({
                path: `/page/${currentPage}`,
                component: templates.postList,
                context: {
                    limit: postsPerPage,
                    skip: index * postsPerPage,
                    currentPage,
                    numberOfPages
                }
            })
        })

    })
}

