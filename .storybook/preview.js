import React from 'react'
import {ThemeProvider, theme, CSSReset, Box} from '@chakra-ui/react'
import {addDecorator} from '@storybook/react'
import {withConsole} from '@storybook/addon-console'

import Center from '../src/components/Center/Center'
// Global decorator. ALLT blir wrappat med center komponenten: se nedan
// addDecorator(story => <Center>{story()}</Center>)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
// wrappa in storyn med theme
addDecorator(story => (
<ThemeProvider theme={theme}>
  <CSSReset />
  <Box m='4'>
  {story()}
  </Box>
  </ThemeProvider>
))
addDecorator((storyFn, context) => withConsole()(storyFn)(context))

export const decorators = [
  (Story) => (
<ThemeProvider theme={theme}>
  <CSSReset />
  <Box m='4'>
    <Story />
  </Box>
</ThemeProvider>
  )
]