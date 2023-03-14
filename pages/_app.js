// Prism
import "prismjs/themes/prism-tomorrow.css"

// Styled Components
import { ThemeProvider } from "styled-components"
import GlobalStyle from "../styled-components/globalStyles"
import { theme } from "../styled-components/theme"

// Next.js - Google fonts
import { Inter } from "next/font/google"

const inter = Inter({
  weight: ["400", "500"],
  subsets: ["latin-ext"],
  display: "swap",
  style: ["normal"],
})

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className={`${inter.className} app`}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}
