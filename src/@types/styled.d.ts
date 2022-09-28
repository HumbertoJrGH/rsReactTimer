import "styled-components";
import { neutralTheme } from "../styles/themes/neutral";

type ThemeType = typeof neutralTheme

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {}
}