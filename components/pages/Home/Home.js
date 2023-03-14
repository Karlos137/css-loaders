// Styled Components
import { HomeWrapper } from "./Home.styles"

// React components
import Header from "@/components/Header"
import Loaders from "@/components/Loaders"

const Home = () => {
  return (
    <HomeWrapper>
      <Header />
      <Loaders />
    </HomeWrapper>
  )
}
export default Home
