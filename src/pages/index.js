/** @jsx jsx */
import {jsx, Button, Flex } from 'theme-ui'

import Layout from "../components/layout"
import ZigguratLogo from "../components/ziggurat_logo"
import GitHubLogo from "../components/github_logo"
import SEO from "../components/seo"

const handlePageChange = () => {
  window.location.href="https://github.com/gojek/ziggurat"
  }

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <div sx={{
      display: "flex", 
      alignItems:"center",
    }}> */}
    <Flex
    sx={{alignItems:"center"}}>
    <div>
    <h1
      sx={{
        fontFamily: "title",
        fontSize: "5vw",
        color: "white",
        }}>Redefining how you work with real time events.</h1>
    <h3 style={{color: "white"}}>Powering more than 250 applications at Gojek.</h3>
    </div>
    <ZigguratLogo/>
    </Flex>
  {/* </div> */}
  <br/>
  <div style={{display: "flex", justifyContent:"center"}}>
    <Button onClick={handlePageChange} style={{display:"flex"}}>
        <GitHubLogo/>
      <h2 style={{marginBottom: "0px"}}>
         View on GitHub
        </h2>
        </Button>
  </div>
    
  </Layout>
)

export default IndexPage
