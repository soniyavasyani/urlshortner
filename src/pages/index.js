import React from "react"
import Header from "../components/header"
import First_section from "../components/first_section" 
import Second_section from "../components/second_section"
import Third_section from "../components/third_secton"
import Fourth_section from "../components/fourth_section"
import Footer from "../components/footer";
import "../components/style.css"

const IndexPage = () => (
  <div>
    <Header />
    <First_section/>
    <Second_section/>
    <Third_section />
    <Fourth_section/>
    <Footer />
  </div>
)

export default IndexPage
{/* <Link to="/page-2/">Go to page 2</Link> */}