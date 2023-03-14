// Next.js - Google fonts
import { Poppins } from "next/font/google"

const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin-ext"],
  display: "swap",
  style: ["normal", "italic"],
})

export default function App({ Component, pageProps }) {
  return (
    <div className={`${poppins.className} app`}>
      <Component {...pageProps} />
    </div>
  )
}
