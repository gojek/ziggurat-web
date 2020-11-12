/** @jsx jsx */
import { jsx, Flex } from "theme-ui"

import Layout from "../components/layout"
import ZigguratLogo from "../components/ziggurat_logo"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section
      sx={{
        minHeight: "fit-content",
        width: "100vw",
        maxWidth: "100%",
        height: "100vh",
        marginBottom: "10vh",
      }}
    >
      <Flex
        sx={{
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ZigguratLogo />
        <h1
          sx={{
            fontFamily: "body",
            fontSize: ["1.3rem", "1.5rem", "2.25rem", "3.5rem", "2rem"],
            color: "white",
            textAlign: "center",
            letterSpacing: "0.05em",
          }}
        >
          Redefining how you work with real time events.
        </h1>
        <p
          className="gradient-text"
          sx={{
            fontFamily: "body",
            fontSize: ["0.867rem", "1rem", "1.5rem", "2rem", "1.5rem"],
            color: "white",
            backgroundSize: "100%",
            textAlign: "center",
          }}
        >
          Powering more than 250 applications at Gojek.
        </p>
        <br />
        <a
          href="https://github.com/gojek/ziggurat"
          target="_blank"
          rel="noreferrer"
          sx={{
            borderRadius: "5px",
            background: "#31C38B",
            padding: ["10px", "10px", "15px", "15px", "15px"],
            display: "flex",
            textDecoration: "none",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3
            sx={{
              color: "white",
              marginTop: "0px",
              marginBottom: "0px",
              fontFamily: "body",
              fontSize: ["0.8rem", "0.8rem", "1rem", "2rem", "1.3rem"],
            }}
          >
            Get Started →
          </h3>
        </a>
      </Flex>
    </section>
    <br />
    <section
      id="description"
      sx={{
        minHeight: "fit-content",
        width: "100vw",
        maxWidth: "100%",
        height: "100vh",
      }}
    >
      <Flex
        sx={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          sx={{
            fontFamily: "body",
            color: "white",
            fontSize: ["1.3rem", "1.5rem", "2.25rem", "3.5rem", "2.3rem"],
          }}
        >
          Ziggurat
        </h1>
        <h2
          sx={{
            fontFamily: "body",
            color: "#9B7D8E",
            fontSize: ["0.867rem", "1rem", "1.5rem", "2.5rem", "1.8rem"],
          }}
        >
          /ˈzɪɡʊˌræt/
        </h2>

        <p
          sx={{
            fontFamily: "body",
            color: "white",
            textAlign: "center",
            width: "60%",
            fontSize: ["0.8rem", "1rem", "1rem", "2rem", "1.5rem"],
            lineHeight: "1.5",
          }}
        >
          Ziggurat is a framework built to simplify Stream processing on Kafka.
          It can be used to create a full-fledged Clojure app that reads and
          processes messages from Kafka. Ziggurat is built with the intent to
          abstract out
        </p>
        <pre
          sx={{
            fontFamily: "code",
            border: "2px",
            borderColor: "white",
            borderStyle: "solid",
            color: "white",
            textAlign: "left",
            padding: ["10px", "10px", "10px", "15px", "20px"],
          }}
        >
          <code>
            <ul
              sx={{
                listStyle: "none",
                fontSize: ["0.8rem", "0.8rem", "1rem", "1.8rem", "1.3rem"],
              }}
            >
              <li>→ reading messages from Kafka</li>
              <li>→ retrying failed messages</li>
              <li style={{ marginBottom: "0px" }}>
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
