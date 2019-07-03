import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people,</h1>
    <p>My name is Alori Peyton</p>
    <p>I have experience in application development and testing which includes experience with Java Programming JavaScript development Salesforce data migration environment testing support and troubleshooting.</p>
    <div style={{width: `100%`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
