// Styled Components
import {
  SettingsPopoverWrapper,
  PopoverContent,
  PopoverClose,
  IconButton,
  Fieldset,
  Label,
  Input,
  Text,
  PopoverArrow,
} from "./SettingsPopover.styles"

// Radix UI
import * as Popover from "@radix-ui/react-popover"

// Radix Icons
import { MixerHorizontalIcon, Cross2Icon } from "@radix-ui/react-icons"

// Next Font
import { poppins } from "@/pages/_app"

// Store
import useStore from "@/store/store"

const SettingsPopover = ({ loader }) => {
  const color = useStore(state => state.color)
  const setColor = useStore(state => state.setColor)
  const accentColor = useStore(state => state.accentColor)
  const setAccentColor = useStore(state => state.setAccentColor)

  return (
    <SettingsPopoverWrapper>
      <Popover.Root>
        <Popover.Trigger asChild>
          <IconButton aria-label="Edit loader">
            <MixerHorizontalIcon />
          </IconButton>
        </Popover.Trigger>
        <Popover.Anchor />
        <Popover.Portal>
          <PopoverContent sideOffset={5} className={poppins.className}>
            <Text style={{ marginBottom: 10 }}>Settings</Text>
            <Fieldset className="Fieldset">
              <Label htmlFor="width">Color</Label>
              <Input
                type="color"
                id="color"
                value={color}
                defaultValue={color}
                onChange={e => {
                  setColor(e.target.value)
                }}
              />
            </Fieldset>
            {[1].includes(loader) ? (
              <Fieldset className="Fieldset">
                <Label htmlFor="width">Accent color</Label>
                <Input
                  type="color"
                  id="color"
                  value={accentColor}
                  defaultValue={accentColor}
                  onChange={e => {
                    setAccentColor(e.target.value)
                  }}
                />
              </Fieldset>
            ) : null}
            <PopoverClose aria-label="Close">
              <Cross2Icon />
            </PopoverClose>
            <PopoverArrow />
          </PopoverContent>
        </Popover.Portal>
      </Popover.Root>
    </SettingsPopoverWrapper>
  )
}
export default SettingsPopover
