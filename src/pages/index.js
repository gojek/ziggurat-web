/** @jsx jsx */
import {jsx, Flex } from 'theme-ui'

import Layout from "../components/layout"
import ZigguratLogo from "../components/ziggurat_logo"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <div sx={{
      display: "flex", 
      alignItems:"center",
    }}> */}
    <section
    sx={{
      height: "100vh",
      width: "100vw",
      maxWidth: "100%"
    }
    }>
      <Flex
      sx={{alignItems:"center",
      flexDirection: "column"}}>
        <ZigguratLogo/>
      <h1
        sx={{
          fontFamily: "body",
          fontSize: "2.5vw",
          color: "white",
          textAlign: "center"
          }}>Redefining how you work with real time events.</h1>
      <p 
      sx={{
        fontFamily: "body",
        fontSize: "1.5vw",
        color: "white",
         backgroundSize: "100%"
         }}>
        <span className="gradient-text">Powering more than 250 applications at Gojek.</span></p>
      <a href="https://github.com/gojek/ziggurat"
      target="_blank"
      rel="noreferrer"
       sx={{
        borderRadius: "5px",
        background: "#54b67d",
        padding: "15px",
        display:"flex",
        textDecoration: "none"}}>
      <h3 sx={{ color: "white", marginBottom: "0px", fontFamily: "body"}}>
        Get Started →
        </h3>
        {/* <RightArrow/> */}
      </a>
      </Flex>
    </section>
    <section
    id="description"
    sx={{
      height: "70vh",
      width: "100vw",
      maxWidth: "100%"
    }}>
      <Flex
      sx={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}>
      <h1 sx={{
        fontFamily: "body",
        color: "white"
      }}>Ziggurat</h1>
      <h2 
      sx={{
        fontFamily: "body",
        color: "#9B7D8E"
      }}>/ˈzɪɡʊˌræt/</h2>
      <br/>

      <p sx={{
        fontFamily: "body",
        color: "white",
        textAlign: "center",
        width: "50%",
        fontSize: "100%"
      }}>Ziggurat is a framework built to simplify Stream processing on Kafka. It can be used to create a full-fledged Clojure app that reads and processes messages from Kafka. Ziggurat is built with the intent to abstract out
      </p>
      <pre
      sx={{
        fontFamily:"code",
        border: "2px",
        borderColor: "white",
        borderStyle: "solid",
        color: "white",
        textAlign: "left"
      }}>
        <code>
          <ul style={{listStyle: "none"}}>
            <li>
            → reading messages from Kafka
            </li>
            <li>
            → retrying failed messages
            </li>
            <li style={{marginBottom: "0px"}}>
            → setting up an HTTP server
            </li>
          </ul>
        
        </code>
      </pre>
      </Flex>
    </section>
    
  </Layout>
)

export default IndexPage
