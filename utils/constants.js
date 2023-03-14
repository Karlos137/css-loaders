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
