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
      <li>Selenium and Cucumber Automation Test TOol Training for Technical Professionals</li> 
      <li>Combinatorial Test Design (CTD)</li>
      <li>Software Testing Foundations: Test Planning and Management</li>
    </ul>
    <h2>Your Learning Courses</h2>
    <ul>
      <li>Selenium and Cucumber Automation Test TOol Training for Technical Professionals</li> 
      <li>Combinatorial Test Design (CTD)</li>
      <li>Software Testing Foundations: Test Planning and Management</li>
    </ul>
  
    <p></p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
