import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {Badge, Button} from 'reactstrap'
import {slugify} from "../../functions/utility"

const tagsPage = ({ pageContext }) => {

    const { tags, tagPostCounts} = pageContext;
    return (
        <Layout pageTitle="App tags">
            <SEO title="All tags" keywords={['tags','topics']}/>
            {/*<ul>*/}
            {/*    {tags.map(tag => (*/}
            {/*        <li key={tag} style={{ marginBottom: '10px'}}>*/}
            {/*            <Button color="primary" href={`/tag/${slugify(tag)}`}>*/}
            {/*                {tag} <Badge color="light">{tagPostCounts[tag]}</Badge>*/}
            {/*            </Button>*/}
            {/*        </li>*/}
            {/*    ))*/}

            {/*    }*/}
            {/*</ul>*/}
            <div className="container tager">
                <div className="flexy" >
                    {tags.map(tag => (
                    <Button className="badge" color="primary" href={`/tag/${slugify(tag)}`}>
                        {tag} <Badge color="light">{tagPostCounts[tag]}</Badge>
                    </Button>
                    ))

                    }
                </div>
            </div>

        </Layout>
        )
}


export default tagsPage