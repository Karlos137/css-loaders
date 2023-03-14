import styled from "styled-components"

// Radix UI
import * as Dialog from "@radix-ui/react-dialog"

import { DEFAULT_LOADER_COLORS } from "@/utils/constants"

export const getLoaderOneCss = ({
  size = 48,
  color = DEFAULT_LOADER_COLORS.colorDialog,
  accentColor = DEFAULT_LOADER_COLORS.accentColor,
} = {}) => `
    width: ${size}px;
    height: ${size}px;
    display: inline-block;
    border: 4px solid ${color};
    border-bottom-color: ${accentColor};
    border-radius: 50%;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
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
  /* cursor: ${({ dialog }) => !dialog && "pointer"}; */

  &:hover {
    background-color: ${({ dialog }) =>
      dialog ? "transparent" : "rgba(255, 255, 255, 0.2)"};
  }

  @media (${({ theme }) => theme.queries.tabletAndUp}) {
    padding: 24px;
  }
`

export const LoaderOne = styled.div`
  ${({ color, accentColor }) =>
    getLoaderOneCss({
      color,
      accentColor,
    })}
  ${getLoaderOneAnimation()}
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
