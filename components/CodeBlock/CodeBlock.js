// React
import { useEffect } from "react"

// Styled Components
import { Code, Label } from "./CodeBlock.styles"

// Prism
import Prism from "prismjs"
import "prismjs/components/prism-jsx"
import "prismjs/plugins/toolbar/prism-toolbar.min.css"
import "prismjs/plugins/toolbar/prism-toolbar.min"
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min"

const CodeBlock = ({ value, label, language }) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [value])

  const getLabel = () => {
    switch (language) {
      case "css":
        return "CSS"
      case "html":
        return "HTML"
      case "jsx":
        return "JSX"
      default:
        return "Code"
    }
  }

  const getCssClassName = () => {
    switch (language) {
      case "css":
        return "language-css"
      case "html":
        return "language-html"
      case "jsx":
        return "language-jsx"
      default:
        return "language-css"
    }
  }

  return (
    <div>
      <Label>{label ? label : getLabel()}</Label>
      <pre className="copy-to-clipboard">
        <Code className={getCssClassName()}>{value}</Code>
      </pre>
    </div>
  )
}
export default CodeBlock
