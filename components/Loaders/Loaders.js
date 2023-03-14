// Styled Components
import { LoadersWrapper } from "./Loaders.styles"

// React components
import LoaderCard from "../LoaderCard"

const Loaders = () => {
  return (
    <LoadersWrapper>
      {[...Array(9)].map((_, i) => {
        return <LoaderCard key={i} loader={i + 1} />
      })}
    </LoadersWrapper>
  )
}
export default Loaders
