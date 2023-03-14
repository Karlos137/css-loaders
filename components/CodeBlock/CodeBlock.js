// React
import { useEffect } from "react"

// Prism
import Prism from "prismjs"

require("prismjs/components/prism-css")

const CodeBlock = ({ value, label }) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <div>
      <div>{label}</div>
      <pre>
        <code className="language-css">{value}</code>
      </pre>
    </div>
  )
}
export default CodeBlock
