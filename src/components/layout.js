/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql} from "gatsby"

import Header from './header';
import Footer from './footer';
import '../styles/index.scss';
// import {Row, Col} from 'reactstrap';
// import Sidebar from '../components/sidebar';


const Layout = ({ children, pageTitle }) => (
    <StaticQuery
        query={graphql`
            query SiteTitleQuery {
              site {
                siteMetadata {
                    title
                 }
               }
            }
        `}
    render={data => (
        <>
            <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                  rel="stylesheet"
                  integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
                  crossOrigin="anonymous"/>
                  <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"/>
            <Header siteTitle={data.site.siteMetadata.title}/>
            <div className="container" id="content">
            <script type="text/javascript" src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
                <h1>{pageTitle}</h1>
                {children}
                {/*<Row>*/}
                {/*    <Col md="8">*/}
                {/*       */}
                {/*    </Col>*/}
                {/*    <Col md="4">*/}
                {/*        <Sidebar author={postAuthor} authorFluid={authorImageFluid}/>*/}
                {/*    </Col>*/}
                {/*</Row>*/}
            </div>
            <Footer/>
        </>
)}
    />
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
