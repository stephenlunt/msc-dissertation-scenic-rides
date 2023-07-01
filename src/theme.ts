/**
 * https://docs.nativebase.io/customizing-theme
 */

import { extendTheme } from "native-base";

const customTheme = extendTheme({
  colors: {
    primary: "rgb(225, 37, 25)",
    transparentBlack: "rgba(0, 0, 0, 0.5)"
  },
  config: {
    initialColorMode: "light"
  },
  components: {
    Text: {
      baseStyle: {
        fontSize: 16
      }
    },
    Heading: {
      defaultProps: {
        size: "md"
      }
    },
    ScrollView: {
      defaultProps: {
        showsVerticalScrollIndicator: false
      }
    }
  }
});

export default customTheme;

/**
 * https://docs.nativebase.io/typescript
 */

type CustomThemeType = typeof customTheme;

declare module "native-base" {
  interface ICustomTheme extends CustomThemeType {}
}
