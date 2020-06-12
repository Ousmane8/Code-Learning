import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Index = ( ) => {
    return (
        <Layout pageTitle="Confirmation">
            <SEO title="Confirmation" keywords={['tags','topics']}/>
            <div className="confirm">
                Thank you for getting in touch!

                We appreciate you contacting us. One of our colleagues will get back in touch with you soon!

                Have a great day!
            </div>
        </Layout>
    )
}


export default Index