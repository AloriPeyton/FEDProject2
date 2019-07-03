import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people,</h1>
    <p>My name is Alori Peyton</p>
    <p>I have experience in application development and testing which includes experience with Java Programming JavaScript development Salesforce data migration environment testing support and troubleshooting.</p>
    <div style={{maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image style={{ height: imageHeight, width: imageWidth  />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
