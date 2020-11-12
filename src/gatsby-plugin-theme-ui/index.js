import "../fonts/fonts.css"
import "typeface-fira-mono"

export default {
  colors: {
    text: "#333",
    background: "#0e0e0e",
    primary: "#31C38B",
    secondary: "#9B7D8E",
  },
  fonts: {
    body: "Maison Neue",
    heading: "system-ui, sans-serif",
    monospace: "Menlo, monospace",
    title: "Poppins, sans-serif",
    header: "Balsamiq Sans, cursive",
    code: "Fira Mono",
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  breakpoints: ["320px", "640px", "760px", "1080px", "1440px"],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
}
