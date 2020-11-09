import "../fonts/fonts.css"
import "typeface-fira-mono"

export default {
  colors: {
    text: "#333",
    background: "#0e0e0e",
    primary: "#54b67d",
    secondary: "#ff6347",
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
  breakpoints: ["300px", "740px", "992px", "1200px"],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
}
