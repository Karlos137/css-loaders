// Prism
import "prismjs/themes/prism-tomorrow.css"

// Styled Components
import { ThemeProvider } from "styled-components"
import GlobalStyle from "@/styled-components/globalStyles"
import { theme } from "@/styled-components/theme"

// Next.js - Google fonts
import { Poppins } from "next/font/google"

export const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin-ext"],
  display: "swap",
  style: ["normal", "italic"],
})

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className={`${poppins.className} app`}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}
