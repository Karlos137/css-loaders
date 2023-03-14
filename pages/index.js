// React components
import CodeBlock from "@/components/CodeBlock"

const Home = () => {
  return (
    <div>
      CSS Loaders
      <CodeBlock
        label="Test"
        value={`  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }`}
      />{" "}
    </div>
  )
}
export default Home
