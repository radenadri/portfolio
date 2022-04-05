import { extendTheme, theme as base, ThemeConfig } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

const purpleRing = (props) => ({
  _focus: {
    ringColor: mode('purple.300', 'purple.600')(props),
    ring: 3,
  },
});

const inputBorder = (props) => ({
  _focus: {
    borderColor: mode('purple.300', 'purple.600')(props),
  },
});

const theme = {
  config,
  styles: {
    global: {
      body: {
        bg: '#18181B',
        color: 'white',
      },
    },
  },
  components: {
    Heading: {
      baseStyle: (props) => ({
        color: mode('white', 'white')(props),
      }),
    },
    Text: {
      baseStyle: (props) => ({
        color: mode('white', 'white')(props),
      }),
    },
    Link: {
      baseStyle: (props) => ({
        ...purpleRing(props),
      }),
    },
    Button: {
      baseStyle: (props) => ({
        ...purpleRing(props),
      }),
    },
    Input: {
      variants: {
        filled: (props) => ({
          field: {
            ...inputBorder(props),
          },
        }),
      },
    },
    Textarea: {
      variants: {
        filled: (props) => ({
          ...inputBorder(props),
        }),
      },
    },
  },
  fonts: {
    heading: `Satoshi-Regular, ${base.fonts.heading}`,
    body: `Satoshi-Regular, ${base.fonts.heading}`,
  },
  mdx: {
    h1: {
      fontSize: '3xl',
    },
    h2: {
      fontSize: 'xl',
    },
    h3: {
      fontSize: 'md',
    },
    h4: {
      fontSize: 'xs',
    },
  },
}

export default extendTheme(theme)