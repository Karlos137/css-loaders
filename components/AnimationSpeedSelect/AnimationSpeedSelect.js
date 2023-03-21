// React
import { forwardRef } from "react"

// Radix UI
import * as Select from "@radix-ui/react-select"

// Radix Icons
import {
  ChevronDownIcon,
  ChevronUpIcon,
  CheckIcon,
} from "@radix-ui/react-icons"

// Styled Components
import {
  SelectTrigger,
  SelectIcon,
  SelectContent,
  SelectViewPort,
  SelectItem as CustomSelectItem,
  SelectItemIndicator,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectItemText,
} from "./AnimationSpeedSelect.styles"

// Store
import useStore from "@/store/store"

// Next Font
import { rubik } from "@/pages/_app"

const AnimationSpeedSelect = () => {
  const setAnimationSpeed = useStore(state => state.setAnimationSpeed)
  const animationSpeed = useStore(state => state.animationSpeed)

  return (
    <Select.Root
      value={animationSpeed}
      onValueChange={value => {
        setAnimationSpeed(value)
      }}
      className={rubik.className}
    >
      <SelectTrigger aria-label="Animation speed">
        <Select.Value placeholder="Select speed" />
        <SelectIcon>
          <ChevronDownIcon />
        </SelectIcon>
      </SelectTrigger>
      <Select.Portal>
        <SelectContent>
          <SelectScrollUpButton>
            <ChevronUpIcon />
          </SelectScrollUpButton>
          <SelectViewPort className={rubik.className}>
            <SelectItem value="slow">Slow</SelectItem>
            <SelectItem value="normal">Normal</SelectItem>
            <SelectItem value="fast">Fast</SelectItem>
          </SelectViewPort>
          <SelectScrollDownButton>
            <ChevronDownIcon />
          </SelectScrollDownButton>
        </SelectContent>
      </Select.Portal>
    </Select.Root>
  )
}

const SelectItem = forwardRef(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <CustomSelectItem {...props} ref={forwardedRef}>
        <SelectItemText>{children}</SelectItemText>
        <SelectItemIndicator>
          <CheckIcon />
        </SelectItemIndicator>
      </CustomSelectItem>
    )
  }
)

export default AnimationSpeedSelect
