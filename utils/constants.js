export const BREAKPOINTS = {
  /* Mobile-first */
  // Phone - from 0px to 549px
  tabletMin: 550, // Tablet - from 550px to 1099px,
  laptopMin: 1100, // Laptops - from 1100px to 1499px
  desktopMin: 1500, // Desktop - 1500px and up
}

export const QUERIES = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin}px)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin}px)`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktopMin}px)`,
}

export const COLORS = {
  white: "hsl(0deg 0% 100%)", // #FFFFFF
  black: "hsl(0deg 0% 0%)", // #000000
  purple10: "hsl(270deg 80% 96%)",
  purple20: "hsl(273deg 76% 92%)",
  purple30: "hsl(273deg 77% 88%)",
  purple100: "hsl(272deg 76% 53%)",
  blue100: "hsl(260deg 100% 44%)", // #4A00E0
  green10: "hsl(180deg 40% 96%)",
  green50: "hsl(180deg 41% 84%)",
  green100: "hsl(178deg 40% 47%)", // #48A8A5
  green190: "hsl(173deg 50% 10%)",
}

export const DEFAULT_LOADER_COLORS = {
  colorHome: "#FFFFFF",
  colorDialog: "#4A00E0",
  accentColor: "#48A8A5",
}
