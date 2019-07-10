import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const ThirdPage = () => (
  <Layout>
    <SEO title="Page Three" />
    <h1>Page 3 Placeholder</h1>
    
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/">Go to Home page</Link>
  </Layout>
)

export default ThirdPage
