// React
import { useEffect } from "react"

// Styled Components
import { Code, Label } from "./CodeBlock.styles"

// Prism
import Prism from "prismjs"
import "prismjs/plugins/toolbar/prism-toolbar.min.css"
import "prismjs/plugins/toolbar/prism-toolbar.min"
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min"

const CodeBlock = ({ value, label }) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [value])

  return (
    <div>
      <Label>{label}</Label>
      <pre className="copy-to-clipboard">
        <Code className="language-css">{value}</Code>
      </pre>
    </div>
  )
}
export default CodeBlock
