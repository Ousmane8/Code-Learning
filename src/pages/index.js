import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout pageTitle="Home Page">
    <SEO title="Home" keywords={['gatsby','application','react']}/>
     <main role="main" className="site-main">
         <div className="header-image">
             <div className="header-image-text">
                 <h2 className="header-title">Code with Us</h2>
                 <p className="header-description">Let's learn to code by building projects for nonprofits</p>
                 <a className="button button-yellow" href="#">Start learning to code (it's free!)</a><a
                 className="button button-blue" href="#">My nonprofit needs coding help</a>
             </div>
         </div>
          <section className="fixed-width highlighted-bg">
              <h2>How it Works</h2>
              <div className="col fourth">
                  <h3>Get Connected</h3>
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/197359/landingIcons_connect.svg" alt=""
                       className="landing-icon"/>
                      <p>Join a community of busy, motivated people.</p>
              </div>

              <div className="col fourth">
                  <h3>Learn JavaScript</h3>
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/197359/landingIcons_learn.svg" alt=""
                       className="landing-icon"/>
                      <p>Work together on Full Stack JavaScript coding challenges.</p>
              </div>

              <div className="col fourth">
                  <h3>Build your Portfolio</h3>
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/197359/landingIcons_portfolio.svg" alt=""
                       className="landing-icon"/>
                      <p>Build apps that solve real problems for real people.</p>
              </div>

              <div className="col fourth">
                  <h3>Help Nonprofits</h3>
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/197359/landingIcons_nonprofits.svg" alt=""
                       className="landing-icon"/>
                      <p>Give nonprofits a boost by empowering them with code.</p>
              </div>
          </section>

          <section className="fixed-width">
              <h2>Skills You'll Learn</h2>

              <div className="col fourth highlighted-bg small-box">
                  <h3>HTML5</h3>
                  <div className="icon icon-large ion-social-html5"/>
              </div>

              <div className="col fourth highlighted-bg small-box">
                  <h3>CSS3</h3>
                  <div className="icon icon-large ion-social-css3"/>
              </div>

              <div className="col fourth highlighted-bg small-box">
                  <h3>JavaScript</h3>
                  <div className="icon icon-large ion-social-javascript"/>
              </div>

              <div className="col fourth highlighted-bg small-box">
                  <h3>Databases</h3>
                  <div className="icon icon-large ion-stats-bars"/>
              </div>


              <div className="col fourth highlighted-bg small-box">
                  <h3>Git</h3>
                  <div className="icon icon-large ion-social-github"/>
              </div>

              <div className="col fourth highlighted-bg small-box">
                  <h3>Node.js</h3>
                  <div className="icon icon-large ion-social-nodejs"/>
              </div>

              <div className="col fourth highlighted-bg small-box">
                  <h3>Angular.js</h3>
                  <div className="icon icon-large ion-social-angular"/>
              </div>

              <div className="col fourth highlighted-bg small-box">
                  <h3>Agile</h3>
                  <div className="icon icon-large ion-ios-loop-strong"/>
              </div>

          </section>

          <section className="fixed-width highlighted-bg">
              <h2>Campers You'll Hang Out With</h2>

              <div className="col third">
                  <img src="https://cdn.pixabay.com/photo/2017/01/31/19/07/avatar-2026510_1280.png" alt=""
                       className="landing-icon testimonial-avatar"/>
                      <p>Getting back on track with Free Code Camp and committing to a new career in 2015!
                          <br/><a href="">@julie</a></p>
              </div>

              <div className="col third">
                  <img src="https://cdn.pixabay.com/photo/2014/03/25/15/23/man-296678__480.png" alt=""
                       className="landing-icon testimonial-avatar"/>
                  <p>I'm currently working through Free Code Camp to improve my JavaScript.
                      <br/><a href="">@Benji</a>
                  </p>
              </div>

              <div className="col third">
                  <img src="https://cdn.pixabay.com/photo/2016/12/07/21/01/cartoon-1890438_1280.jpg" alt=""
                       className="landing-icon testimonial-avatar"/>
                      <p>Just built my company's website with skills I've learned from Free Code Camp!
                          <br/><a href="#">@Joe</a></p>
              </div>

          </section>

          <section className="fixed-width">
              <h2>Why you should join our open source community right now:</h2>

              <ul className="large-list">
                  <li className="icon ion-code">You'll get help in real time from our community chat rooms.</li>
                  <li className="icon ion-code">You'll meet up with other coders in your city.</li>
                  <li className="icon ion-code">You'll learn to code at your own pace, in your browser or on your
                      phone.
                  </li>
                  <li className="icon ion-code">You'll work through our focused, interactive courses and tutorials.</li>
                  <li className="icon ion-code">You'll learn state-of-the-art <strong>full stack
                      JavaScript</strong> technologies.
                  </li>
                  <li className="icon ion-code">You'll build projects that help nonprofits carry out their missions more
                      effectively.
                  </li>
                  <li className="icon ion-code">You'll assemble a portfolio of real apps used by real people.</li>
                  <li className="icon ion-code">Learn to code today (it's free)</li>
              </ul>

              <a href="#" className="button button-yellow">Learn to code today (it's free!)</a>
          </section>

      </main>

  </Layout>
)

export default IndexPage
