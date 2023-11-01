import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    btColor: string;
    btHighlight: string;
    btTextColor: string;
    shadowColor: string;
    cardBgColor: string;
    cardTextColor: string;
  }
}
