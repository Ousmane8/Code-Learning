import React from "react"
import {Card, CardTitle, CardBody, Form, FormGroup, Input, NavLink} from 'reactstrap'
import { StaticQuery, graphql, Link } from "gatsby"
import Img from 'gatsby-image'

const blogSidebar = () => (
        <div>
            {/*{author && (*/}
            {/*    <Card>*/}
            {/*        <Img className="card-image-top" fluid={authorFluid}/>*/}
            {/*        <CardBody>*/}
            {/*            <CardTitle className="text-center text-uppercase md-3">{author.name}</CardTitle>*/}
            {/*            <CardText>{author.bio}</CardText>*/}
            {/*                <div className="author-social-links text-center">*/}
            {/*                    <ul>*/}
            {/*                        <li><a href={author.facebook} target="_blank" rel="noopener noreferrer" className="facebook"><i className="fa fa-facebook-f fa-lg"/></a></li>*/}
            {/*                        <li><a href={author.twitter} target="_blank" rel="noopener noreferrer" className="twitter"><i className="fa fa-twitter fa-lg"/></a></li>*/}
            {/*                        <li><a href={author.instagram} target="_blank" rel="noopener noreferrer" className="instagram"><i className="fa fa-instagram fa-lg"/></a></li>*/}
            {/*                        <li><a href={author.google} target="_blank" rel="noopener noreferrer" className="google"><i className="fa fa-google fa-lg"/></a></li>*/}
            {/*                        <li><a href={author.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin"> <i className="fa fa-linkedin fa-lgx"/></a></li>*/}
            {/*                    </ul>*/}
            {/*                </div>*/}
            {/*        </CardBody>*/}
            {/*    </Card>*/}
            {/*)*/}
            {/*}*/}
            <Card>
                <CardBody>
                    <CardTitle className="text-center text-uppercase mb-3">
                        Newsletter
                    </CardTitle>
                    <Form className="text-center">
                        <FormGroup>
                            <Input type="email" name="email" placeholder="Your email address..."/>
                        </FormGroup>
                        <button className="btn btn-outline-success text-uppercase">
                            Subscribe
                        </button>
                    </Form>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <CardTitle className="text-center text-uppercase mb-3">
                            <NavLink href="/tags">Tag</NavLink>
                    </CardTitle>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <CardTitle className="text-center text-uppercase mb-3">
                        Learning
                    </CardTitle>
                    <img src="https://cdn.pixabay.com/photo/2018/05/19/00/53/online-3412473__480.jpg" alt="Advert" style={{width:"100%"}}/>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <CardTitle className="text-center text-uppercase mb-3">
                        Recent Posts
                    </CardTitle>
                    <StaticQuery query={sidebarQuery} render={data => {
                        return(
                            <div>
                                {data.allMarkdownRemark.edges.map(({node}) => (
                                    <Card key={node.id}>
                                        <Link to={node.fields.slug}>
                                            <Img className="card-image-top" fluid={node.frontmatter.image.childImageSharp.fluid}/>
                                        </Link>
                                        <CardBody>
                                            <CardTitle>
                                                <Link to={node.fields.slug}/>
                                                {node.frontmatter.title}
                                            </CardTitle>
                                        </CardBody>
                                    </Card>
                                ))}
                            </div>
                        )
                    }}
                    />
                </CardBody>
            </Card>
        </div>
    )

const sidebarQuery = graphql`
    query sidebarQuery{
        allMarkdownRemark ( 
        sort: {fields: [frontmatter___date], order: DESC}
        limit: 3
        ){ 
            edges {
                node {
                id
                    frontmatter {
                        title                     
                        image{
                        childImageSharp{
                        fluid(maxWidth: 300){
                        ...GatsbyImageSharpFluid
                         }
                       }
                     }   
                   }
                   fields{
                      slug
                   }
                  
                }
            }
        }
    }
`


export default blogSidebar
