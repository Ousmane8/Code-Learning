import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import {Badge, Card, CardSubtitle, CardBody} from 'reactstrap'
import Img from 'gatsby-image'
import {slugify} from "../../functions/utility"
import {DiscussionEmbed} from "disqus-react";
// import authors from "../../functions/authors"
// import Sidebar from "../components/sidebar"
// import {Row, Col} from 'reactstrap'


const blogSinglePost = ({ data, pageContext}) => {
    const post = data.markdownRemark.frontmatter
    const baseUrl = 'https://gatsbytutorial.co.uk/'
    const disqusShortname = 'https-gatsbytutorial-co-uk'
    const disqusConfig = {
        identifier: data.markdownRemark.id,
        title: post.title,
        url: baseUrl + pageContext.slug
    }
    // const author = authors.find(x => x.name === post.author)
    // postAuthor={author} authorImageFluid={data.file.childImageSharp.fluid}
    return (
        <Layout pageTitle={post.title}>
            <SEO title={post.title}/>
            {/*<Row>*/}
            {/*    <Col md="8">*/}
                    <Card>
                        <Img className="card-image-top"
                             fluid={post.image.childImageSharp.fluid}/>
                        <CardBody>
                            <CardSubtitle>
                                <span className="text-info">{post.date}</span> by{' '}
                                <span className="text-info">{post.author}</span>
                            </CardSubtitle>
                            <div dangerouslySetInnerHTML={{ __html:data.markdownRemark.html }}/>
                            <ul className="post-tags">
                                {post.tags.map(tag => (
                                    <li key={tag}>
                                        <Link to={`/tag/${slugify(tag)}`}>
                                            <Badge color="primary" className="text-uppercase">
                                                {tag}
                                            </Badge>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </CardBody>
                    </Card>
                    <h3 className="text-center">
                        Share this post
                    </h3>
                    <div className="text-center social-share-links">
                        <ul>
                            <li>
                                <a href={
                                    'https://www.facebook.com/sharer/sharer.php?u=' +
                                baseUrl +
                                pageContext.slug
                                }
                                   className="facebook"
                                   target="_blank"
                                   rel="noopener noreferrer">
                                    <i className="fa fa-facebook-f fa-2x"/>
                                </a>
                            </li>
                            <li>
                                <a href={
                                    'https://twitter.com/share?url=' +
                                baseUrl +
                                pageContext.slug + '&text=' +
                                        post.title +
                                        "&via" +
                                        "twitterHandle"
                                }
                                   className="twitter"
                                   target="_blank"
                                   rel="noopener noreferrer">
                                    <i className="fa fa-twitter fa-2x"/>
                                </a>
                            </li>
                            <li>
                                <a href={
                                    'https://www.linkedin.com/shareArticle?url=' +
                                baseUrl +
                                pageContext.slug
                                }
                                   className="linkedin"
                                   target="_blank"
                                   rel="noopener noreferrer">
                                    <i className="fa fa-linkedin fa-2x"/>
                                </a>
                            </li>
                            <li>
                                <a href={
                                    'https://plus.google.com/share?url=' +
                                baseUrl +
                                pageContext.slug
                                }
                                   className="google"
                                   target="_blank"
                                   rel="noopener noreferrer">
                                    <i className="fa fa-google fa-2x"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
            {/*    </Col>*/}
            {/*    <Col md="4">*/}
            {/*        <Sidebar/>*/}
            {/*    </Col>*/}
            {/*</Row>*/}
        </Layout>
    )
}

export default blogSinglePost

export const postQuery = graphql`
    query blogPostBySlug($slug: String!)
    {
        markdownRemark( fields: { slug: { eq:$slug}}){
                    id
                    html       
                    frontmatter {
                        title
                        date(formatString: "MMM Do YYYY")
                        author                  
                        tags
                        image{
                        childImageSharp{
                        fluid(maxWidth: 700){
                            ...GatsbyImageSharpFluid
                         }                                            
                   }
                }
            }
        }
        
    }
`

// $imageUrl: String!
//     file( relativePath: { eq : $imageUrl}){
//     childImageSharp{
//         fluid(maxWidth: 300){
//         ...GatsbyImageSharpFluid
//         }
//     }
// }