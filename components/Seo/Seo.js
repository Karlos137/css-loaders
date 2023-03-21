// Next.js
import Head from "next/head"

const Seo = ({
  title = "CSS Loaders",
  description = "Simple CSS loaders for your next project!",
}) => {
  return (
    <Head>
      <title>{`${title} | cssloaders.dev`}</title>
      <meta name="description" content={description} />
    </Head>
  )
}
export default Seo
