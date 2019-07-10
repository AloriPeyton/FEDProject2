import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThirdPage = () => (
  <Layout>
    <SEO title="Page Three" />
    <h1>Under Construction...</h1>
    
    <p></p>
<table>
<tr>        
   <td> <Link to="/"align="left">Go back to the homepage</Link> </td>
    <td><Link to="/page-2" align="right">Go to page 2</Link></td>
</tr>
</table>    

  </Layout>
)

export default ThirdPage
