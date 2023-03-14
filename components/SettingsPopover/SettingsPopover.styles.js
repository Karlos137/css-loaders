import styled from "styled-components"

// Radix UI
import * as Popover from "@radix-ui/react-popover"

export const SettingsPopoverWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const IconButton = styled.button`
  all: unset;
  font-family: inherit;
  border-radius: 100%;
  height: 35px;
  width: 35px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.black};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.14);
  margin: auto;
  background-color: ${({ theme }) => theme.colors.white};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.green50};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.purple30};
  }
`

export const PopoverContent = styled(Popover.Content)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 4px;
  padding: 20px;
  width: 260px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;

  &:focus {
    box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
      hsl(206 22% 7% / 20%) 0px 10px 20px -15px,
      0 0 0 2px ${({ theme }) => theme.colors.purple30};
  }

  &[data-state="open"][data-side="top"] {
    animation-name: slideDownAndFade;
  }
  &[data-state="open"][data-side="right"] {
    animation-name: slideLeftAndFade;
  }
  &[data-state="open"][data-side="bottom"] {
    animation-name: slideUpAndFade;
  }
  &[data-state="open"][data-side="left"] {
    animation-name: slideRightAndFade;
  }

  @keyframes slideUpAndFade {
    from {
      opacity: 0;
      transform: translateY(2px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideRightAndFade {
    from {
      opacity: 0;
      transform: translateX(-2px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideDownAndFade {
    from {
      opacity: 0;
      transform: translateY(-2px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideLeftAndFade {
    from {
      opacity: 0;
      transform: translateX(2px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`

export const PopoverClose = styled(Popover.Close)`
  all: unset;
  font-family: inherit;
  border-radius: 100%;
  height: 25px;
  width: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.black};
  position: absolute;
  top: 5px;
  right: 5px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.green50};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.purple30};
  }
`

export const PopoverArrow = styled(Popover.Arrow)`
  fill: ${({ theme }) => theme.colors.white};
`

export const Fieldset = styled.fieldset`
  all: unset;
  display: flex;
  gap: 20px;
  align-items: center;
`

export const Label = styled.label`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.dialog.text};
  width: 75px;
`

export const Input = styled.input`
  all: unset;
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  border-radius: 4px;
  padding: 0 10px;
  font-size: 13px;
  line-height: 1;
  color: ${({ theme }) => theme.colors.dialog.text};
  box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.purple10};
  height: 25px;

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.purple30};
  }
`

export const Text = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.dialog.text};
  font-size: ${({ theme }) => 15 / theme.fontSizes.root + "rem"};
  line-height: 19px;
  font-weight: 500;
`
