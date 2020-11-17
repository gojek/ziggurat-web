/** @jsx jsx */
import React from "react"
import {jsx, Image, Flex} from "theme-ui"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MemeFetchService from "../services/meme-fetch-service"

class NotFoundPage extends React.Component {

  constructor() {
    super()
    this.state = {
      memeURL: ""
    }
    this.getProgrammerMeme()
  }

  getProgrammerMeme = () => {
    const memeFetchService = new MemeFetchService()
    memeFetchService
    .memefetch()
    .then(response => {
      const memeURL = response.data.memes[0]["url"]
      this.setState({memeURL})
    })
    .catch(error => {
      console.log('Err!', error)
    })
  }

render() {
  const {memeURL} = this.state
  return (
  <Layout>
    <meta http-equiv="refresh" content="10;url=/" />
    <SEO title="404: Not found" />
    <Flex
    sx={{
      justifyContent:"center",
      alignItems:"center",
      flexDirection: "column",
    }}>
    <h1 sx={{
            fontFamily: "body",
            fontSize: ["1.3rem", "1.5rem", "2rem", "2rem", "2.5rem"],
            color: "white",
            textAlign: "center",
            letterSpacing: "0.05em",
          }}>404: You got lost in Mesopotamia</h1>
    <p
    sx={{
      fontFamily: "body",
      color: "white",
      textAlign: "center",
      width: "60%",
      fontSize: ["0.8rem", "1.2rem", "1.5rem", "1.5rem", "1.8rem"],
      lineHeight: "1.5",
    }}
    >
      Here's a programmer meme to cheer you up while we get you back to Ziggurat!</p>
    <Image sx={{
      width: ["80%", "60%", "40%", "45%", "40%", "25%"]
      }} src={memeURL}></Image>
    </Flex>
  </Layout>
)
  }
}

export default NotFoundPage
