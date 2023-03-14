// React
import { useEffect } from "react"

// Styled Components
import { Code, Label } from "./CodeBlock.styles"

// Prism
import Prism from "prismjs"

require("prismjs/components/prism-css")

const CodeBlock = ({ value, label }) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <div>
      <Label>{label}</Label>
      <pre>
        <Code className="language-css">{value}</Code>
      </pre>
    </div>
  )
}
export default CodeBlock
