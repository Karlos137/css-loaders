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
  getLoaderFourAnimation,
  getLoaderFiveAnimation,
  getLoaderSixAnimation,
  getLoaderSevenAnimation,
  getLoaderEightAnimation,
  getLoaderFourCss,
  getLoaderFourCssBall,
  getLoaderFourCssBall2,
  getLoaderFourCssBall3,
  getLoaderFiveCss,
  getLoaderFiveCssBall,
  getLoaderFiveCssBall1,
  getLoaderFiveCssBall2,
  getLoaderFiveCssBall3,
  getLoaderFiveCssBall4,
  getLoaderSixCss,
  getLoaderSixCssBall,
  getLoaderSixCssBall1,
  getLoaderSixCssBall2,
  getLoaderSixCssBall3,
  getLoaderSixCssBall4,
  getLoaderSevenCss,
  getLoaderSevenBeforeAfter,
  getLoaderSevenAfter,
  getLoaderEightCss,
  getLoaderEightCol,
  getLoaderEightCol2,
  getLoaderEightCol3,
  getLoaderEightCol4,
  getLoaderEightCol5,
  getLoaderNineCss,
  getLoaderNineSquare,
  getLoaderNineSquare1,
  getLoaderNineSquare2,
  getLoaderNineSquare3,
  getLoaderNineSquare4,
  LoaderOne,
  LoaderTwo,
  LoaderThree,
  LoaderFour,
  LoaderFive,
  LoaderSix,
  LoaderSeven,
  LoaderEight,
  LoaderNine,
  DialogOverlay,
  DialogContent,
  // DialogTitle,
  DialogDescription,
  CloseButton,
  getLoaderNineAnimation,
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
      case 5:
        return (
          <LoaderFive
            color={defaultColor}
            animationSpeed={defaultAnimationSpeed}
          >
            <span className="ball"></span>
            <span className="ball"></span>
            <span className="ball"></span>
            <span className="ball"></span>
          </LoaderFive>
        )
      case 6:
        return (
          <LoaderSix
            color={defaultColor}
            animationSpeed={defaultAnimationSpeed}
          >
            <span className="ball"></span>
            <span className="ball"></span>
            <span className="ball"></span>
            <span className="ball"></span>
          </LoaderSix>
        )
      case 7:
        return (
          <LoaderSeven
            color={defaultColor}
            animationSpeed={defaultAnimationSpeed}
          />
        )
      case 8:
        return (
          <LoaderEight
            color={defaultColor}
            animationSpeed={defaultAnimationSpeed}
          >
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
          </LoaderEight>
        )
      case 9:
        return (
          <LoaderNine
            color={defaultColor}
            animationSpeed={defaultAnimationSpeed}
          >
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
          </LoaderNine>
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
    // const beforeClassName = `${mainClassName}:before`
    const beforeAfterClassName = `${mainClassName}:before,
${mainClassName}:after`

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

.loader > .ball {${getLoaderFourCssBall({
                color,
                animationSpeed,
              })}}
.loader > .ball:nth-child(2) {${getLoaderFourCssBall2({
                animationSpeed,
              })}}

.loader > .ball:nth-child(3) {${getLoaderFourCssBall3({
                animationSpeed,
              })}}
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
      case 5:
        return (
          <>
            <CodeBlock
              label={cssLabel}
              value={`${mainClassName} {${getLoaderFiveCss()}}
  
.loader > .ball {${getLoaderFiveCssBall({
                color,
                animationSpeed,
              })}}

.loader > .ball:nth-child(1) {${getLoaderFiveCssBall1({
                animationSpeed,
              })}}
  
.loader > .ball:nth-child(2) {${getLoaderFiveCssBall2({
                animationSpeed,
              })}}
  
.loader > .ball:nth-child(3) {${getLoaderFiveCssBall3({
                animationSpeed,
              })}}

.loader > .ball:nth-child(4) {${getLoaderFiveCssBall4({
                animationSpeed,
              })}}
  ${getLoaderFiveAnimation()}`}
            />
            <CodeBlock
              label={htmlLabel}
              language="html"
              value={`<div class="loader">
    <span class="ball"></span>
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
    <span className="ball" />
</div>`}
            />
          </>
        )
      case 6:
        return (
          <>
            <CodeBlock
              label={cssLabel}
              value={`${mainClassName} {${getLoaderSixCss({ animationSpeed })}}
    
.loader > .ball {${getLoaderSixCssBall({
                color,
              })}}
  
.loader > .ball:nth-child(1) {${getLoaderSixCssBall1()}}
    
.loader > .ball:nth-child(2) {${getLoaderSixCssBall2()}}
    
.loader > .ball:nth-child(3) {${getLoaderSixCssBall3()}}
  
.loader > .ball:nth-child(4) {${getLoaderSixCssBall4()}}
    ${getLoaderSixAnimation()}`}
            />
            <CodeBlock
              label={htmlLabel}
              language="html"
              value={`<div class="loader">
  <span class="ball"></span>
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
  <span className="ball" />
</div>`}
            />
          </>
        )
      case 7:
        return (
          <>
            <CodeBlock
              label={cssLabel}
              value={`${mainClassName} {${getLoaderSevenCss()}}
  
${beforeAfterClassName} {${getLoaderSevenBeforeAfter({
                color,
                animationSpeed,
              })}}

${afterClassName} {${getLoaderSevenAfter({ animationSpeed })}}
${getLoaderSevenAnimation()}`}
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
      case 8:
        return (
          <>
            <CodeBlock
              label={cssLabel}
              value={`${mainClassName} {${getLoaderEightCss()}}
      
.loader > .col {${getLoaderEightCol({
                color,
                animationSpeed,
              })}}
    
.loader > .col:nth-child(2) {${getLoaderEightCol2()}}
      
.loader > .col:nth-child(3) {${getLoaderEightCol3()}}
      
.loader > .col:nth-child(4) {${getLoaderEightCol4()}}
    
.loader > .col:nth-child(5) {${getLoaderEightCol5()}}
      ${getLoaderEightAnimation()}`}
            />
            <CodeBlock
              label={htmlLabel}
              language="html"
              value={`<div class="loader">
  <span class="col"></span>
  <span class="col"></span>
  <span class="col"></span>
  <span class="col"></span>
  <span class="col"></span>
</div>`}
            />
            <CodeBlock
              label={jsxLabel}
              language="jsx"
              value={`<div className="loader">
  <span className="col" />
  <span className="col" />
  <span className="col" />
  <span className="col" />
  <span className="col" />
</div>`}
            />
          </>
        )
      case 9:
        return (
          <>
            <CodeBlock
              label={cssLabel}
              value={`${mainClassName} {${getLoaderNineCss()}}
        
.loader > .square {${getLoaderNineSquare({
                color,
                animationSpeed,
              })}}
      
.loader > .square:nth-child(1) {${getLoaderNineSquare1({ animationSpeed })}}

.loader > .square:nth-child(2) {${getLoaderNineSquare2({ animationSpeed })}}
        
.loader > .square:nth-child(3) {${getLoaderNineSquare3({ animationSpeed })}}
        
.loader > .square:nth-child(4) {${getLoaderNineSquare4({ animationSpeed })}}
        ${getLoaderNineAnimation()}`}
            />
            <CodeBlock
              label={htmlLabel}
              language="html"
              value={`<div class="loader">
  <span class="square"></span>
  <span class="square"></span>
  <span class="square"></span>
  <span class="square"></span>
</div>`}
            />
            <CodeBlock
              label={jsxLabel}
              language="jsx"
              value={`<div className="loader">
  <span className="square" />
  <span className="square" />
  <span className="square" />
  <span className="square" />
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
