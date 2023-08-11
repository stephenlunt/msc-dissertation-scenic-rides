/**
 * Last modified: 29-06-2023
 * Modifying author: Stephen Lunt
 * File description: Custom theme used to extend Native Base UI
 * components default theme.
 *
 * Documentation: https://docs.nativebase.io/customizing-theme
 */

import { extendTheme } from "native-base";

const customTheme = extendTheme({
  colors: {
    primary: "rgb(225, 37, 25)",
    secondary: "rgb(251, 168, 0)",
    backdrop: "#e5f5e3",
    transparentBlack: "rgba(0, 0, 0, 0.5)",
    borderColor: "rgb(229, 231, 235)"
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

// Extend custom theme to TypeScript types.
type CustomThemeType = typeof customTheme;

declare module "native-base" {
  interface ICustomTheme extends CustomThemeType {}
}
