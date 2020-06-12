import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticQuery, graphql } from "gatsby"
import Post from '../components/post'
import Sidebar from '../components/sidebar'
import {Row, Col} from 'reactstrap'
import PaginationLinks from '../components/paginationLinks'


const blogPage = () => {
    const postsPerPage = 2;
    let numberOfPages

    return (
    <Layout pageTitle="About our Blog..">
        <SEO title="Blog" keywords={['gatsby','application','react']}/>
        <Row>
            <Col md="8">
                <StaticQuery query={MyQuery}
                             render={data => {
                                 numberOfPages = Math.ceil(data.allMarkdownRemark.totalCount / postsPerPage)
                    return(
                        <div>
                            {data.allMarkdownRemark.edges.map(({node}) => (
                                <Post
                                    key={node.id}
                                    title={node.frontmatter.title}
                                    author={node.frontmatter.author}
                                    slug={node.fields.slug}
                                    tags={node.frontmatter.tags}
                                    date={node.frontmatter.date}
                                    body={node.excerpt}
                                    fluid={node.frontmatter.image.childImageSharp.fluid}/>
                            ))}
                            <PaginationLinks currentPage={1} numberOfPage={numberOfPages}/>
                        </div>
                    )
                }}
                />
            </Col>
            <Col md="4">
                <Sidebar/>
            </Col>
        </Row>
    </Layout>
)
}

const MyQuery = graphql`
    query MyQuery {
        allMarkdownRemark ( 
        sort: {fields: [frontmatter___date], order: DESC}
        limit: 2
        )
        { 
        totalCount
            edges {
                node {
                id
                    frontmatter {
                        title
                        date(formatString: "MMM Do YYYY")
                        author                      
                        tags
                        image{
                        childImageSharp{
                        fluid(maxWidth: 600){
                        ...GatsbyImageSharpFluid
                         }
                       }
                     }   
                   }
                   fields{
                      slug
                   }
                    excerpt
                }
            }
        }
    }
`

export default blogPage
