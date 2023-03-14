import { QUERIES, COLORS } from "@/utils/constants"

export const theme = {
  colors: {
    body: COLORS.white,
    dialog: {
      background: COLORS.purple10,
      text: COLORS.green190,
      buttonHover: COLORS.green50,
    },
    ...COLORS,
  },
  queries: QUERIES,
  fontSizes: {
    root: 16,
  },
}
