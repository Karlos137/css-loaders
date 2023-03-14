// Styles / Styled Components
import {
  LoaderCardWrapper,
  getLoaderOneCss,
  getLoaderOneAnimation,
  LoaderOne,
  DialogOverlay,
  DialogContent,
  // DialogTitle,
  DialogDescription,
  CloseButton,
} from "./LoaderCard.styles"
import Spacer from "@/styled-components/shared/Spacer"

// React components
import CodeBlock from "../CodeBlock"
import SettingsPopover from "../SettingsPopover"

// Radix UI
import * as Dialog from "@radix-ui/react-dialog"

// Radix Icons
import { Cross2Icon } from "@radix-ui/react-icons"

// Next Font
import { poppins } from "@/pages/_app"

// Store
import useStore from "@/store/store"

// Constants
import { DEFAULT_LOADER_COLORS } from "@/utils/constants"

const LoaderCard = () => {
  const color = useStore(state => state.color)
  const accentColor = useStore(state => state.accentColor)

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <LoaderCardWrapper>
          <LoaderOne
            color={DEFAULT_LOADER_COLORS.colorHome}
            accentColor={accentColor}
          />
        </LoaderCardWrapper>
      </Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay>
          <DialogContent className={poppins.className}>
            {/* <DialogTitle>Edit profile</DialogTitle> */}
            <DialogDescription>
              <LoaderCardWrapper dialog={true}>
                <LoaderOne color={color} accentColor={accentColor} />
              </LoaderCardWrapper>
              <Spacer size={16} axis="vertical" />
              <SettingsPopover />
              <Spacer size={16} axis="vertical" />
              <CodeBlock
                label="Code"
                value={`.loader {${getLoaderOneCss({
                  size: 32,
                  color,
                  accentColor,
                })}}
        ${getLoaderOneAnimation()}`}
              />
            </DialogDescription>
            <Dialog.Close asChild>
              <CloseButton aria-label="Close">
                <Cross2Icon />
              </CloseButton>
            </Dialog.Close>
          </DialogContent>
        </DialogOverlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
export default LoaderCard
