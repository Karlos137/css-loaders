// Styles / Styled Components
import {
  LoaderCardWrapper,
  getLoaderOneCss,
  getLoaderOneAnimation,
  getLoaderTwoCss,
  getLoaderTwoAnimation,
  getLoaderThreeCss,
  getLoaderThreeAfter,
  getLoaderThreeAnimation,
  LoaderOne,
  LoaderTwo,
  LoaderThree,
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

const LoaderCard = ({ loader }) => {
  const color = useStore(state => state.color)
  const accentColor = useStore(state => state.accentColor)

  const getLoader = ({ home = false } = {}) => {
    const defaultColor = home ? DEFAULT_LOADER_COLORS.colorHome : color
    const defaultAccentColor = home
      ? DEFAULT_LOADER_COLORS.accentColor
      : accentColor

    switch (loader) {
      case 1:
        return (
          <LoaderOne color={defaultColor} accentColor={defaultAccentColor} />
        )
      case 2:
        return <LoaderTwo color={defaultColor} />
      case 3:
        return <LoaderThree color={defaultColor} />
      default:
        return (
          <LoaderOne color={defaultColor} accentColor={defaultAccentColor} />
        )
    }
  }

  const getCodeBlock = () => {
    const defaultLabel = "Code"
    const mainClassName = ".loader"
    const afterClassName = `${mainClassName}:after`

    switch (loader) {
      case 1:
        return (
          <CodeBlock
            label={defaultLabel}
            value={`${mainClassName} {${getLoaderOneCss({
              color,
              accentColor,
            })}}
  ${getLoaderOneAnimation()}`}
          />
        )
      case 2:
        return (
          <CodeBlock
            label={defaultLabel}
            value={`${mainClassName} {${getLoaderTwoCss({
              color,
            })}}
${getLoaderTwoAnimation()}`}
          />
        )
      case 3:
        return (
          <CodeBlock
            label={defaultLabel}
            value={`${mainClassName} {${getLoaderThreeCss()}}

${afterClassName} {${getLoaderThreeAfter({
              color,
            })}}
${getLoaderThreeAnimation()}`}
          />
        )
      default:
        return (
          <CodeBlock
            label={defaultLabel}
            value={`${mainClassName} {${getLoaderOneCss({
              color,
              accentColor,
            })}}
  ${getLoaderOneAnimation()}`}
          />
        )
    }
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <LoaderCardWrapper>{getLoader({ home: true })}</LoaderCardWrapper>
      </Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay>
          <DialogContent className={poppins.className}>
            {/* <DialogTitle>Edit profile</DialogTitle> */}
            <DialogDescription>
              <LoaderCardWrapper dialog={true}>
                {getLoader({ home: false })}
              </LoaderCardWrapper>
              <Spacer size={16} axis="vertical" />
              <SettingsPopover loader={loader} />
              <Spacer size={16} axis="vertical" />
              {getCodeBlock()}
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
