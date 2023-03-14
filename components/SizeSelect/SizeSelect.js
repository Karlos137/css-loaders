import * as Select from "@radix-ui/react-select"

const SizeSelect = () => {
  return (
    <Select.Root>
      <Select.Trigger>…</Select.Trigger>
      <Select.Portal>
        <Select.Content position="popper" sideOffset={5}>
          …
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
export default SizeSelect
