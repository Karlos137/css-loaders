import styled from "styled-components"

// Radix UI
import * as Dialog from "@radix-ui/react-dialog"

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
    animation: rotation ${
      animationSpeed === "normal"
        ? "1s"
        : animationSpeed === "slow"
        ? "1.3s"
        : animationSpeed === "fast" && "0.7s"
    } linear infinite;
`

export const getLoaderOneAnimation = () => `
@keyframes rotation {
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
  animation: rotation ${
    animationSpeed === "normal"
      ? "1s"
      : animationSpeed === "slow"
      ? "1.3s"
      : animationSpeed === "fast" && "0.7s"
  } linear infinite;
`

export const getLoaderTwoAnimation = () => `
@keyframes rotation {
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
} = {}) => `
  display: inline-block;
  width: 8px;
  height: 8px;
  margin: 0 4px;
  border-radius: 50%;
  background-color: ${color};
  animation: bounce 1.3s infinite ease-in-out;
`

export const getLoaderFourCssBall2 = () => `
  animation-delay: -0.5s;
`

export const getLoaderFourCssBall3 = () => `
  animation-delay: -1s;
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
    ${({ color }) => getLoaderFourCssBall({ color })}
  }

  & > .ball:nth-child(2) {
    ${getLoaderFourCssBall2()}
  }

  & > .ball:nth-child(3) {
    ${getLoaderFourCssBall3()}
  }
  ${getLoaderFourAnimation()}
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
