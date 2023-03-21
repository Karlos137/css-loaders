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
  getLoaderFourCss,
  getLoaderFourCssBall,
  getLoaderFourCssBall2,
  getLoaderFourCssBall3,
  getLoaderFourAnimation,
  LoaderOne,
  LoaderTwo,
  LoaderThree,
  LoaderFour,
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
import { rubik } from "@/pages/_app"

// Store
import useStore from "@/store/store"

// Constants
import {
  DEFAULT_ANIMATION_SPEED,
  DEFAULT_LOADER_COLORS,
} from "@/utils/constants"

const LoaderCard = ({ loader }) => {
  const color = useStore(state => state.color)
  const accentColor = useStore(state => state.accentColor)
  const animationSpeed = useStore(state => state.animationSpeed)

  const getLoader = ({ home = false } = {}) => {
    const defaultColor = home ? DEFAULT_LOADER_COLORS.colorHome : color
    const defaultAccentColor = home
      ? DEFAULT_LOADER_COLORS.accentColor
      : accentColor
    const defaultAnimationSpeed = home
      ? DEFAULT_ANIMATION_SPEED
      : animationSpeed

    switch (loader) {
      case 1:
        return (
          <LoaderOne
            color={defaultColor}
            accentColor={defaultAccentColor}
            animationSpeed={defaultAnimationSpeed}
          />
        )
      case 2:
        return (
          <LoaderTwo
            color={defaultColor}
            animationSpeed={defaultAnimationSpeed}
          />
        )
      case 3:
        return (
          <LoaderThree
            color={defaultColor}
            animationSpeed={defaultAnimationSpeed}
          />
        )
      case 4:
        return (
          <LoaderFour
            color={defaultColor}
            animationSpeed={defaultAnimationSpeed}
          >
            <span className="ball"></span>
            <span className="ball"></span>
            <span className="ball"></span>
          </LoaderFour>
        )
      default:
        return (
          <LoaderOne
            color={defaultColor}
            accentColor={defaultAccentColor}
            animationSpeed={defaultAnimationSpeed}
          />
        )
    }
  }

  const getCodeBlock = () => {
    const cssLabel = "CSS"
    const htmlLabel = "HTML"
    const jsxLabel = "JSX"
    const mainClassName = ".loader"
    const afterClassName = `${mainClassName}:after`

    switch (loader) {
      case 1:
        return (
          <>
            <CodeBlock
              label={cssLabel}
              value={`${mainClassName} {${getLoaderOneCss({
                color,
                accentColor,
                animationSpeed,
              })}}
  ${getLoaderOneAnimation()}`}
            />
            <CodeBlock
              label={htmlLabel}
              language="html"
              value={`<div class="loader"></div>`}
            />
            <CodeBlock
              label={jsxLabel}
              language="jsx"
              value={`<div className="loader" />`}
            />
          </>
        )
      case 2:
        return (
          <>
            <CodeBlock
              label={cssLabel}
              value={`${mainClassName} {${getLoaderTwoCss({
                color,
                animationSpeed,
              })}}
${getLoaderTwoAnimation()}`}
            />
            <CodeBlock
              label={htmlLabel}
              language="html"
              value={`<div class="loader"></div>`}
            />
            <CodeBlock
              label={jsxLabel}
              language="jsx"
              value={`<div className="loader" />`}
            />
          </>
        )
      case 3:
        return (
          <>
            <CodeBlock
              label={cssLabel}
              value={`${mainClassName} {${getLoaderThreeCss()}}

${afterClassName} {${getLoaderThreeAfter({
                color,
                animationSpeed,
              })}}
${getLoaderThreeAnimation()}`}
            />
            <CodeBlock
              label={htmlLabel}
              language="html"
              value={`<div class="loader"></div>`}
            />
            <CodeBlock
              label={jsxLabel}
              language="jsx"
              value={`<div className="loader" />`}
            />
          </>
        )
      case 4:
        return (
          <>
            <CodeBlock
              label={cssLabel}
              value={`${mainClassName} {${getLoaderFourCss()}}

.loader > .ball {${getLoaderFourCssBall()}}

.loader > .ball:nth-child(2) {${getLoaderFourCssBall2()}}

.loader > .ball:nth-child(3) {${getLoaderFourCssBall3()}}
${getLoaderFourAnimation()}`}
            />
            <CodeBlock
              label={htmlLabel}
              language="html"
              value={`<div class="loader">
  <span class="ball"></span>
  <span class="ball"></span>
  <span class="ball"></span>
</div>`}
            />
            <CodeBlock
              label={jsxLabel}
              language="jsx"
              value={`<div className="loader">
  <span className="ball" />
  <span className="ball" />
  <span className="ball" />
</div>`}
            />
          </>
        )
      default:
        return (
          <>
            <CodeBlock
              label={cssLabel}
              value={`${mainClassName} {${getLoaderOneCss({
                color,
                accentColor,
                animationSpeed,
              })}}
${getLoaderOneAnimation()}`}
            />
            <CodeBlock
              label={htmlLabel}
              language="html"
              value={`<div class="loader"></div>`}
            />
            <CodeBlock
              label={jsxLabel}
              language="jsx"
              value={`<div className="loader" />`}
            />
          </>
        )
    }
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <LoaderCardWrapper as="button" aria-label="CSS Loader">
          {getLoader({ home: true })}
        </LoaderCardWrapper>
      </Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay>
          <DialogContent className={rubik.className}>
            {/* <DialogTitle>Edit profile</DialogTitle> */}
            <DialogDescription as="div">
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
