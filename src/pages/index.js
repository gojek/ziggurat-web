/** @jsx jsx */
import React from "react"
import { Link } from "gatsby"
import {jsx, Button, Grid, Flex } from 'theme-ui'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { fontSize } from "styled-system"

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
    <Image/>
    </Flex>
  {/* </div> */}
  <br/>
  <div style={{display: "flex", justifyContent:"center"}}>
  <a href="https://google.com">
    <Button >
      <h1 style={{marginBottom: "0px"}}>
        View on GitHub
        </h1>
        </Button>
        </a>
  </div>
    
  </Layout>
)

export default IndexPage
