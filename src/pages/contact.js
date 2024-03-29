import React from "react"
import Layout from "../components/layout"
import Success from "../pages/success"

const Contact = () => {
  return (
      <Layout>
        <form name="contact" method="post" netlify-honeypot="bot-field" data-netlify="true" action="/success">
        <div className="container contact">
          <input type="hidden" name="form-name" value="contact" />
          <div className="row">
            <div className="col-md-3">
              <div className="contact-info">
                <img src="https://image.ibb.co/kUASdV/contact-image.png" alt="image"/>
                <h2>Contact Us</h2>
                <h4>We would love to hear from you !</h4>
              </div>
            </div>
            <div className="col-md-9">
              <div className="contact-form">
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="name">Your Name:</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" id="name" placeholder="Enter First Name"  name="name" required/>
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="email">Email:</label>
                  <div className="col-sm-10">
                    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" required/>
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="comment">Message:</label>
                  <div className="col-sm-10">
                    <textarea className="form-control" rows="5" name="message" required/>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-offset-2 col-sm-10">
                    <button type="submit" className="btn btn-default">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </form>
      </Layout>
  )
}

export default Contact;
