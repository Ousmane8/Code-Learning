import React from "react"
import {Link} from "gatsby";
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout pageTitle="NOT FOUND">
    <SEO title="404: Not found" />
    {/*<p>You just hit a route that doesn&#39;t exist... the sadness.</p>*/}
    {/*  <Link className="btn btn-primary text-uppercase" to={'/'}>*/}
    {/*      GO BACK TO THE HOME PAGE*/}
    {/*  </Link>*/}
      <section className="page_404">
          <div className="container text-center">
              <div className="row">
                  <div className="col-sm-12 ">
                      <div className="col-sm-10 col-sm-offset-1  text-center">
                          <div className="four_zero_four_bg">
                              <h1 className="text-center ">404</h1>


                          </div>

                          <div className="content_box_404">
                              <h3 className="h2">
                                  Look like you're lost
                              </h3>

                              <p>the page you are looking for not avaible!</p>

                              <Link to={'/'} className="link_404 btn btn-primary text-uppercase">GO BACK TO THE HOME PAGE</Link>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

  </Layout>
)

export default NotFoundPage
