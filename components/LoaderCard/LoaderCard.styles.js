import styled from "styled-components"

// Radix UI
import * as Dialog from "@radix-ui/react-dialog"

// Constants
import {
  DEFAULT_LOADER_COLORS,
  DEFAULT_ANIMATION_SPEED,
} from "@/utils/constants"

/* LOADERS START */

// Loader One
export const getLoaderOneCss = ({
  size = 48,
  color = DEFAULT_LOADER_COLORS.colorDialog,
  accentColor = DEFAULT_LOADER_COLORS.accentColor,
  animationSpeed = DEFAULT_ANIMATION_SPEED,
} = {}) => `
    width: ${size}px;
    height: ${size}px;
    display: inline-block;
    border: 4px solid ${color};
    border-bottom-color: ${accentColor};
    border-radius: 50%;
    box-sizing: border-box;
    animation: rotation-1 ${
      animationSpeed === "normal"
        ? "1s"
        : animationSpeed === "slow"
        ? "1.3s"
        : animationSpeed === "fast" && "0.7s"
    } linear infinite;
`

export const getLoaderOneAnimation = () => `
@keyframes rotation-1 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export const LoaderOne = styled.div`
  ${({ color, accentColor, animationSpeed }) =>
    getLoaderOneCss({
      color,
      accentColor,
      animationSpeed,
    })}

  ${getLoaderOneAnimation()}
`

// Loader Two
export const getLoaderTwoCss = ({
  size = 48,
  color = DEFAULT_LOADER_COLORS.colorDialog,
  animationSpeed = DEFAULT_ANIMATION_SPEED,
} = {}) => `
  width: ${size}px;
  height: ${size}px;
  display: inline-block;
  border-radius: 50%;
  border-top: 3px solid ${color};
  border-right: 3px solid transparent;
  box-sizing: border-box;
  animation: rotation-2 ${
    animationSpeed === "normal"
      ? "1s"
      : animationSpeed === "slow"
      ? "1.3s"
      : animationSpeed === "fast" && "0.7s"
  } linear infinite;
`

export const getLoaderTwoAnimation = () => `
@keyframes rotation-2 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
} `

export const LoaderTwo = styled.div`
  ${({ color, animationSpeed }) =>
    getLoaderTwoCss({
      color,
      animationSpeed,
    })}

  ${getLoaderTwoAnimation()}
`

// Loader Three
export const getLoaderThreeCss = ({ size = 48 } = {}) => `
  width: ${size}px;
  height: ${size}px;
  display: inline-block;
`

export const getLoaderThreeAfter = ({
  size = 48,
  color = DEFAULT_LOADER_COLORS.colorDialog,
  animationSpeed = DEFAULT_ANIMATION_SPEED,
} = {}) => `
  content: "";
  width: ${size}px;
  display: block;
  height: ${size}px;
  border-radius: 50%;
  border: 4px solid ${color};
  border-color: ${color} transparent ${color} transparent;
  animation: dual-rotation ${
    animationSpeed === "normal"
      ? "1.2s"
      : animationSpeed === "slow"
      ? "1.5s"
      : animationSpeed === "fast" && "0.9s"
  } linear infinite;
`

export const getLoaderThreeAnimation = () => `
@keyframes dual-rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`

export const LoaderThree = styled.div`
  ${getLoaderThreeCss()}

  ${({ color, animationSpeed }) => `&:after {
    ${getLoaderThreeAfter({ color, animationSpeed })}
  }`}

  ${getLoaderThreeAnimation()}
`

// Loader Four
export const getLoaderFourCss = () => `
  display: inline-block;
  font-size: 0;
  white-space: nowrap;
`

export const getLoaderFourCssBall = ({
  color = DEFAULT_LOADER_COLORS.colorDialog,
  animationSpeed = DEFAULT_ANIMATION_SPEED,
} = {}) => `
  display: inline-block;
  width: 8px;
  height: 8px;
  margin: 0 4px;
  border-radius: 50%;
  background-color: ${color};
  animation: bounce ${
    animationSpeed === "normal"
      ? "1.3s"
      : animationSpeed === "slow"
      ? "1.6s"
      : animationSpeed === "fast" && "1s"
  } infinite ease-in-out;
`

export const getLoaderFourCssBall2 = ({
  animationSpeed = DEFAULT_ANIMATION_SPEED,
} = {}) => `
  animation-delay: ${
    animationSpeed === "normal"
      ? "-0.5s"
      : animationSpeed === "slow"
      ? "-0.8s"
      : animationSpeed === "fast" && "-0.2s"
  };
`

export const getLoaderFourCssBall3 = ({
  animationSpeed = DEFAULT_ANIMATION_SPEED,
} = {}) => `
  animation-delay: ${
    animationSpeed === "normal"
      ? "-1s"
      : animationSpeed === "slow"
      ? "-1.3s"
      : animationSpeed === "fast" && "-0.7s"
  };
`

export const getLoaderFourAnimation = () => `
@keyframes bounce {
  0%, 100% {
    transform: translateY(2px);
  }
  50% {
    transform: translateY(-8px);
  }
}
`

export const LoaderFour = styled.div`
  ${getLoaderFourCss()}

  & > .ball {
    ${({ color, animationSpeed }) =>
      getLoaderFourCssBall({ color, animationSpeed })}
  }

  & > .ball:nth-child(2) {
    ${({ animationSpeed }) => getLoaderFourCssBall2({ animationSpeed })}
  }

  & > .ball:nth-child(3) {
    ${({ animationSpeed }) => getLoaderFourCssBall3({ animationSpeed })}
  }

  ${getLoaderFourAnimation()}
`

// Loader Five
export const getLoaderFiveCss = ({ size = 48 } = {}) => `
  display: inline-block;
  position: relative;
  width: ${size}px;
  height: ${size}px;
`

export const getLoaderFiveCssBall = ({
  color = DEFAULT_LOADER_COLORS.colorDialog,
  animationSpeed = DEFAULT_ANIMATION_SPEED,
} = {}) => `
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: ${color};
  border-radius: 50%;
  animation: pop ${
    animationSpeed === "normal"
      ? "1.2s"
      : animationSpeed === "slow"
      ? "1.5s"
      : animationSpeed === "fast" && "0.9s"
  } cubic-bezier(0.5, 0, 0.5, 1) infinite;
`

export const getLoaderFiveCssBall1 = ({
  animationSpeed = DEFAULT_ANIMATION_SPEED,
} = {}) => `
  top: 10px;
  left: 10px;
  animation-delay: ${
    animationSpeed === "normal"
      ? "-0.3s"
      : animationSpeed === "slow"
      ? "-0.6s"
      : animationSpeed === "fast" && "0s"
  };
`

export const getLoaderFiveCssBall2 = ({
  animationSpeed = DEFAULT_ANIMATION_SPEED,
} = {}) => `
  top: 10px;
  right: 10px;
  animation-delay: ${
    animationSpeed === "normal"
      ? "-0.15s"
      : animationSpeed === "slow"
      ? "-0.45s"
      : animationSpeed === "fast" && "-0.05s"
  };
`

export const getLoaderFiveCssBall3 = ({
  animationSpeed = DEFAULT_ANIMATION_SPEED,
} = {}) => `
  bottom: 10px;
  right: 10px;
  animation-delay: ${
    animationSpeed === "normal"
      ? "0s"
      : animationSpeed === "slow"
      ? "-0.3s"
      : animationSpeed === "fast" && "0.3s"
  };
`

export const getLoaderFiveCssBall4 = ({
  animationSpeed = DEFAULT_ANIMATION_SPEED,
} = {}) => `
  bottom: 10px;
  left: 10px;
  animation-delay: ${
    animationSpeed === "normal"
      ? "0.25s"
      : animationSpeed === "slow"
      ? "-0.15s"
      : animationSpeed === "fast" && "0.55s"
  };
`

export const getLoaderFiveAnimation = () => `
@keyframes pop {
  0%,
  100% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
}
`

export const LoaderFive = styled.div`
  ${getLoaderFiveCss()}

  & > .ball {
    ${({ color, animationSpeed }) =>
      getLoaderFiveCssBall({ color, animationSpeed })}
  }

  & > .ball:nth-child(1) {
    ${({ animationSpeed }) => getLoaderFiveCssBall1({ animationSpeed })}
  }

  & > .ball:nth-child(2) {
    ${({ animationSpeed }) => getLoaderFiveCssBall2({ animationSpeed })}
  }

  & > .ball:nth-child(3) {
    ${({ animationSpeed }) => getLoaderFiveCssBall3({ animationSpeed })}
  }

  & > .ball:nth-child(4) {
    ${({ animationSpeed }) => getLoaderFiveCssBall4({ animationSpeed })}
  }

  ${getLoaderFiveAnimation()}
`

// Loader Six
export const getLoaderSixCss = ({ size = 48, animationSpeed } = {}) => `
  position: relative;
  width: ${size}px;
  height: ${size}px;
  animation: rotation-3 ${
    animationSpeed === "normal"
      ? "2.2s"
      : animationSpeed === "slow"
      ? "2.6s"
      : animationSpeed === "fast" && "1.8s"
  } linear infinite;
`

export const getLoaderSixCssBall = ({
  color = DEFAULT_LOADER_COLORS.colorDialog,
} = {}) => `
  position: absolute;
  width: 8px;
  height: 8px;
  background-color: ${color};
  border-radius: 50%;
`

export const getLoaderSixCssBall1 = () => `
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`

export const getLoaderSixCssBall2 = () => `
  top: 50%;
  left: 0;
  transform: translateY(-50%);
`

export const getLoaderSixCssBall3 = () => `
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`

export const getLoaderSixCssBall4 = () => `
  top: 50%;
  right: 0;
  transform: translateY(-50%);
`

export const getLoaderSixAnimation = () => `
@keyframes rotation-3 {
  0%,
  100% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`

export const LoaderSix = styled.div`
  ${({ animationSpeed }) => getLoaderSixCss({ animationSpeed })}

  & > .ball {
    ${({ color }) => getLoaderSixCssBall({ color })}
  }

  & > .ball:nth-child(1) {
    ${({ animationSpeed }) => getLoaderSixCssBall1({ animationSpeed })}
  }

  & > .ball:nth-child(2) {
    ${({ animationSpeed }) => getLoaderSixCssBall2({ animationSpeed })}
  }

  & > .ball:nth-child(3) {
    ${({ animationSpeed }) => getLoaderSixCssBall3({ animationSpeed })}
  }

  & > .ball:nth-child(4) {
    ${({ animationSpeed }) => getLoaderSixCssBall4({ animationSpeed })}
  }
  ${getLoaderSixAnimation()}
`

// Loader Seven
export const getLoaderSevenCss = ({ size = 48 } = {}) => `
  width: ${size}px;
  height: ${size}px;
  display: inline-block;
  position: relative;
`

export const getLoaderSevenBeforeAfter = ({
  size = 48,
  color = DEFAULT_LOADER_COLORS.colorDialog,
  animationSpeed = DEFAULT_ANIMATION_SPEED,
} = {}) => `
  content: '';  
  position: absolute;
  width: ${size}px;
  height: ${size}px;
  box-sizing: border-box;
  border-radius: 50%;
  border: 2px solid ${color};
  inset: 0;
  opacity: 0;
  animation: pulse ${
    animationSpeed === "normal"
      ? "2.2s"
      : animationSpeed === "slow"
      ? "2.6s"
      : animationSpeed === "fast" && "1.8s"
  } linear infinite;
`

export const getLoaderSevenAfter = ({
  animationSpeed = DEFAULT_ANIMATION_SPEED,
} = {}) => `
animation-delay: ${
  animationSpeed === "normal"
    ? "1.2s"
    : animationSpeed === "slow"
    ? "1.6s"
    : animationSpeed === "fast" && "0.8s"
};
`

export const getLoaderSevenAnimation = () => `
@keyframes pulse {
  0%, 1% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}
`

export const LoaderSeven = styled.div`
  ${getLoaderSevenCss()}

  ${({ color, animationSpeed }) => `&:before, &:after {
    ${getLoaderSevenBeforeAfter({ color, animationSpeed })}
  }`}

${({ animationSpeed }) => `&:after {
    ${getLoaderSevenAfter({ animationSpeed })}
  }`}

  ${getLoaderSevenAnimation()}
`

// Loader Eight
export const getLoaderEightCss = ({ size = 48 } = {}) => `
  width: ${size}px;
  height: ${size}px;
  text-align: center;
  font-size: 10px;
`

export const getLoaderEightCol = ({
  color = DEFAULT_LOADER_COLORS.colorDialog,
  animationSpeed = DEFAULT_ANIMATION_SPEED,
} = {}) => `
  background-color: ${color};
  height: 100%;
  width: 4px;
  margin: 0 2px;
  display: inline-block;
  animation: stretch ${
    animationSpeed === "normal"
      ? "1.2s"
      : animationSpeed === "slow"
      ? "1.4s"
      : animationSpeed === "fast" && "1.2s"
  } infinite ease-in-out;
`

export const getLoaderEightCol2 = ({
  animationSpeed = DEFAULT_ANIMATION_SPEED,
} = {}) => `
  animation-delay: ${
    animationSpeed === "normal"
      ? "-1.1s"
      : animationSpeed === "slow"
      ? "-1.1s"
      : animationSpeed === "fast" && "-1.1s"
  }
`

export const getLoaderEightCol3 = ({
  animationSpeed = DEFAULT_ANIMATION_SPEED,
} = {}) => `
  animation-delay: ${
    animationSpeed === "normal"
      ? "-1s"
      : animationSpeed === "slow"
      ? "-0.9s"
      : animationSpeed === "fast" && "-1.05s"
  }
`

export const getLoaderEightCol4 = ({
  animationSpeed = DEFAULT_ANIMATION_SPEED,
} = {}) => `
  animation-delay: ${
    animationSpeed === "normal"
      ? "-0.9s"
      : animationSpeed === "slow"
      ? "-0.7s"
      : animationSpeed === "fast" && "-1.00s"
  }
`

export const getLoaderEightCol5 = ({
  animationSpeed = DEFAULT_ANIMATION_SPEED,
} = {}) => `
  animation-delay: ${
    animationSpeed === "normal"
      ? "-0.8s"
      : animationSpeed === "slow"
      ? "-0.5s"
      : animationSpeed === "fast" && "-0.95s"
  }
`

export const getLoaderEightAnimation = () => `
@keyframes stretch {
  0%,
  40%,
  100% {
    transform: scaleY(0.45);
  }
  20% {
    transform: scaleY(1);
  }
}
`

export const LoaderEight = styled.div`
  ${getLoaderEightCss()}

  & > .col {
    ${({ color, animationSpeed }) =>
      getLoaderEightCol({ color, animationSpeed })}
  }

  & > .col:nth-child(2) {
    ${({ animationSpeed }) => getLoaderEightCol2({ animationSpeed })}
  }

  & > .col:nth-child(3) {
    ${({ animationSpeed }) => getLoaderEightCol3({ animationSpeed })}
  }

  & > .col:nth-child(4) {
    ${({ animationSpeed }) => getLoaderEightCol4({ animationSpeed })}
  }

  & > .col:nth-child(5) {
    ${({ animationSpeed }) => getLoaderEightCol5({ animationSpeed })}
  }

  ${getLoaderEightAnimation()}
`

// Loader Nine
export const getLoaderNineCss = ({ size = 48 } = {}) => `
  width: ${size}px;
  height: ${size}px;
  position: relative;
`

export const getLoaderNineSquare = ({
  size = 12,
  color = DEFAULT_LOADER_COLORS.colorDialog,
} = {}) => `
  position: absolute;
  width: ${size}px;
  height: ${size}px;
  background-color: ${color};
`

export const getLoaderNineSquare1 = ({
  animationSpeed = DEFAULT_ANIMATION_SPEED,
} = {}) => `
  top: 0;
  left: 0;
  animation: move1 ${
    animationSpeed === "normal"
      ? "2.2s"
      : animationSpeed === "slow"
      ? "2.7s"
      : animationSpeed === "fast" && "1.7s"
  } infinite ease-in-out;
`

export const getLoaderNineSquare2 = ({
  animationSpeed = DEFAULT_ANIMATION_SPEED,
} = {}) => `
  top: 0;
  right: 0;
  animation: move2 ${
    animationSpeed === "normal"
      ? "2.2s"
      : animationSpeed === "slow"
      ? "2.7s"
      : animationSpeed === "fast" && "1.7s"
  } infinite ease-in-out;
`

export const getLoaderNineSquare3 = ({
  animationSpeed = DEFAULT_ANIMATION_SPEED,
} = {}) => `
  bottom: 0;
  right: 0;
  animation: move3 ${
    animationSpeed === "normal"
      ? "2.2s"
      : animationSpeed === "slow"
      ? "2.7s"
      : animationSpeed === "fast" && "1.7s"
  } infinite ease-in-out;
`

export const getLoaderNineSquare4 = ({
  animationSpeed = DEFAULT_ANIMATION_SPEED,
} = {}) => `
  bottom: 0;
  left: 0;
  animation: move4 ${
    animationSpeed === "normal"
      ? "2.2s"
      : animationSpeed === "slow"
      ? "2.7s"
      : animationSpeed === "fast" && "1.7s"
  } infinite ease-in-out;
`

export const getLoaderNineAnimation = () => `
@keyframes move1 {
  0%, 100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(24px, 24px);
  }
}

@keyframes move2 {
  0%, 100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(-24px, 24px);
  }
}

@keyframes move3 {
  0%, 100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(-24px, -24px);
  }
}

@keyframes move4 {
  0%, 100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(24px, -24px);
  }
}
`

export const LoaderNine = styled.div`
  ${getLoaderNineCss()}

  & > .square {
    ${({ color, animationSpeed }) =>
      getLoaderNineSquare({ color, animationSpeed })}
  }

  & > .square:nth-child(1) {
    ${({ animationSpeed }) => getLoaderNineSquare1({ animationSpeed })}
  }

  & > .square:nth-child(2) {
    ${({ animationSpeed }) => getLoaderNineSquare2({ animationSpeed })}
  }

  & > .square:nth-child(3) {
    ${({ animationSpeed }) => getLoaderNineSquare3({ animationSpeed })}
  }

  & > .square:nth-child(4) {
    ${({ animationSpeed }) => getLoaderNineSquare4({ animationSpeed })}
  }

  ${getLoaderNineAnimation()}
`

/* LOADERS END */

export const LoaderCardWrapper = styled.div`
  width: fit-content;
  margin: 0 auto;
  background-color: ${({ dialog }) =>
    dialog ? "transparent" : "rgba(255, 255, 255, 0.1)"};
  display: grid;
  place-items: center;
  border-radius: 4px;
  transition: background-color 0.4s ease;
  padding: 16px;
  box-shadow: none;
  outline: none;
  border: none;
  /* cursor: ${({ dialog }) => !dialog && "pointer"}; */

  &:hover {
    background-color: ${({ dialog }) =>
      dialog ? "transparent" : "rgba(255, 255, 255, 0.2)"};
  }

  @media (${({ theme }) => theme.queries.tabletAndUp}) {
    padding: 24px;
  }
`

// Dialog
export const DialogOverlay = styled(Dialog.Overlay)`
  background: rgba(0 0 0 / 0.5);
  position: fixed;
  inset: 0;
  display: grid;
  place-items: center;
  overflow-y: auto;
`

export const DialogContent = styled(Dialog.Content)`
  overflow: auto;
  background-color: ${({ theme }) => theme.colors.dialog.background};
  color: ${({ theme }) => theme.colors.dialog.text};
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 520px;
  max-height: 85vh;
  padding: 25px;
  animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);

  @keyframes contentShow {
    from {
      opacity: 0;
      transform: translate(-50%, -48%) scale(0.96);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }

  &:focus {
    outline: none;
  }
`

export const DialogTitle = styled(Dialog.Title)`
  margin: 0;
  font-weight: 500;
  color: blue;
  font-size: 17px;
`

export const DialogDescription = styled(Dialog.Description)`
  margin: 10px 0 20px;
  color: black;
  font-size: ${({ theme }) => 18 / theme.fontSizes.root + "rem"};
  line-height: 1.5;
`

export const CloseButton = styled.button`
  all: unset;
  font-family: inherit;
  border-radius: 100%;
  height: 25px;
  width: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 10px;
  right: 10px;
  color: ${({ theme }) => theme.colors.black};
  background-color: transparent;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.dialog.buttonHover};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.purple30};
  }
`
