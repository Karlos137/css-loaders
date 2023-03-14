import styled from "styled-components"
// Radix UI
import * as Dialog from "@radix-ui/react-dialog"

export const getLoaderOneCss = ({ size = 48 } = {}) => `
    width: ${size}px;
    height: ${size}px;
    display: inline-block;
    border: 4px solid #fff;
    border-bottom-color: #2EAFA0;
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
  background-color: ${({ darkBackground }) =>
    darkBackground ? "rgba(0, 0, 0, 0.2)" : "rgba(255, 255, 255, 0.1);"};
  display: grid;
  place-items: center;
  border-radius: 4px;
  transition: background-color 0.4s ease;
  padding: 16px;
  cursor: pointer;

  &:hover {
    background-color: ${({ darkBackground }) =>
      darkBackground ? "rgba(0, 0, 0, 0.3)" : "rgba(255, 255, 255, 0.2);"};
  }

  @media (${({ theme }) => theme.queries.tabletAndUp}) {
    padding: 24px;
  }
`

export const LoaderOne = styled.div`
  ${getLoaderOneCss()}
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
  background-color: white;
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
