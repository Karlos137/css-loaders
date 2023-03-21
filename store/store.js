import { create } from "zustand"

// Constants
import {
  DEFAULT_LOADER_COLORS,
  DEFAULT_ANIMATION_SPEED,
} from "@/utils/constants"

const useStore = create(set => ({
  color: DEFAULT_LOADER_COLORS.colorDialog,
  setColor: value => {
    set({ color: value })
  },
  accentColor: DEFAULT_LOADER_COLORS.accentColor,
  setAccentColor: value => {
    set({ accentColor: value })
  },
  animationSpeed: DEFAULT_ANIMATION_SPEED,
  setAnimationSpeed: value => {
    set({ animationSpeed: value })
  },
}))

export default useStore
