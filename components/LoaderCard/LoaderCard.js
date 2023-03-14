// Styles / Styled Components
import {
  LoaderCardWrapper,
  getLoaderOneCss,
  getLoaderOneAnimation,
  LoaderOne,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "./LoaderCard.styles"

// React components
import CodeBlock from "../CodeBlock"

// Radix UI
import * as Dialog from "@radix-ui/react-dialog"

const LoaderCard = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <LoaderCardWrapper>
          <LoaderOne />
        </LoaderCardWrapper>
      </Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay>
          <DialogContent>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              <LoaderCardWrapper darkBackground={true}>
                <LoaderOne />
              </LoaderCardWrapper>
              <CodeBlock
                label="Test"
                value={`.loader {${getLoaderOneCss({
                  size: 32,
                })}}
        ${getLoaderOneAnimation()}`}
              />
            </DialogDescription>
            <Dialog.Close />
          </DialogContent>
        </DialogOverlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
export default LoaderCard
