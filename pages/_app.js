// Prism
import "prismjs/themes/prism-okaidia.css"

// Styled Components
import { ThemeProvider } from "styled-components"
import GlobalStyle from "@/styled-components/globalStyles"
import { theme } from "@/styled-components/theme"

// Next.js - Google fonts
import { Rubik } from "next/font/google"

export const rubik = Rubik({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
  style: ["normal", "italic"],
})

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className={`${rubik.className} app`}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}
