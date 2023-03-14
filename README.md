# CSS Loaders

Simple CSS loaders.

Keywords:

- JavaScript
- React
- Next.js
- styled-components
- Prism.js
- ESLint
- Prettier

### `Before launch`

```
yarn install
```

### `develop`

```
yarn develop
```

### `build`

```
yarn build
```

### `start`

```
yarn start
```

## Other stuff

- Media queries defined are based on clusters containing most popular screen resolutions by platform.
- Font sizes are set in the following way (example for `18px`) - `(18 - 2) / theme.fontSizes.root + 'rem'`. REM units because of accessibility. Value is calculated as the quotient of the desired px value and the set root font size (commonly as `16px`).
