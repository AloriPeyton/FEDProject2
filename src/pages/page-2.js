import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Current Learning</h1>
    <h2>Udemy</h2>
    <ul>
      <li>Automation Architect - Selenium Webdriver - 7 Live Projects</li> 
      <li>Hello React - React Training for JavaScript Beginners</li>
      <li>Selenium WebDriver + Java Complete Step by Step Course</li>
    </ul>
   <h2>Your Learning Courses</h2>
    <ul>
      <li>Selenium and Cucumber Automation Test Tool Training for Technical Professionals</li> 
      <li>Combinatorial Test Design (CTD)</li>
      <li>Software Testing Foundations: Test Planning and Management</li>
    </ul>
    <h2>Badges Earned</h2>
    <table>
      <tr>
      <td>IBM Agile Explorer<img src={require('../images/AA-Badge-explorer-352.png')}height="100" width="100" align="right"/></td> 
      </tr>
      <tr>                                
      <td>IBM Automation Practitioner<img src={require('../images/Automation+Practitioner.png')}height="100" width="100" align="right"/></td>                           
      </tr>
      <tr>
      <td>Data Science Foundations - Level 1<img src={require('../images/Data+Sci+Found+Level+1+-+CC+-+2019.png')}height="100" width="100" align="right"/></td>
      </tr>
      <tr>
      <td>IGNITE Membership<img src={require('../images/IBM+IGNITE+Membership_281_29.png')}height="100" width="100" align="right"/></td>     
      </tr>
      <tr>
      <td>IBM Cloud Fundamentals<img src={require('../images/IBM+Cloud+Essentials+-+Knowledge+Badge.png')}height="100" width="100" align="right"/></td> 
      </tr>
      <tr>
      <td>IBM Blockchain Essentials<img src={require('../images/Blockchain+Essentials.png')}height="100" width="100"align="right"/></td>      
      </tr>
      <tr>
      <td>Enterprise Design Thinking Practitioner<img src={require('../images/Badges_v8-07+Practitioner.png')}height="100" width="100"align="right"/></td>      
      </tr>
      <tr>
      <td>Cognitive Practitioner<img src={require('../images/Practitioner+Bright+Green+No+Date+copy.png')}height="100" width="100"align="right"/></td>      
      </tr>
    </table>
  
    <p></p>
<table>
<tr>        
   <td> <Link to="/"align="left">Go back to the homepage</Link> </td>
    <td><Link to="/page-3" align="right">Go to page 3</Link></td>
</tr>
</table>    
  </Layout>
)

export default SecondPage
