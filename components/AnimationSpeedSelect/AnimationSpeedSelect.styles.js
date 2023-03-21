import styled from "styled-components"
import * as Select from "@radix-ui/react-select"

export const SelectTrigger = styled(Select.Trigger)`
  font-family: inherit;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 0 15px;
  font-size: 13px;
  line-height: 1;
  height: 35px;
  gap: 5px;
  border: none;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.14);

  &:hover {
    background-color: ${({ theme }) => theme.colors.green50};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.purple30};
  }

  &[data-placeholder] {
    color: ${({ theme }) => theme.colors.black};
  }
`

export const SelectIcon = styled(Select.Icon)`
  color: ${({ theme }) => theme.colors.black};
`

export const SelectContent = styled(Select.Content)`
  font-family: inherit;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 6px;
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
`

export const SelectViewPort = styled(Select.Viewport)`
  padding: 5px;
`

export const SelectItem = styled(Select.Item)`
  font-family: inherit;
  font-size: 13px;
  line-height: 1;
  color: ${({ theme }) => theme.colors.black};
  border-radius: 3px;
  display: flex;
  align-items: center;
  height: 25px;
  padding: 0 35px 0 25px;
  position: relative;
  user-select: none;

  &[data-disabled] {
    color: ${({ theme }) => theme.colors.purple10};
    pointer-events: none;
  }

  &[data-highlighted] {
    outline: none;
    background-color: ${({ theme }) => theme.colors.green100};
    color: ${({ theme }) => theme.colors.white};
  }
`

export const SelectLabel = styled(Select.Label)`
  font-family: inherit;
  padding: 0 25px;
  font-size: 12px;
  line-height: 25px;
  color: ${({ theme }) => theme.colors.purple100};
`

export const SelectSeparator = styled(Select.Separator)`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.purple10};
  margin: 5px;
`

export const SelectItemIndicator = styled(Select.ItemIndicator)`
  position: absolute;
  left: 0;
  width: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`

export const SelectScrollDownButton = styled(Select.ScrollDownButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  background-color: white;
  color: ${({ theme }) => theme.colors.purple100};
  cursor: default;
`

export const SelectScrollUpButton = styled(Select.ScrollUpButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  background-color: white;
  color: ${({ theme }) => theme.colors.purple100};
  cursor: default;
`

export const SelectItemText = styled(Select.ItemText)`
  font-family: inherit;
`
