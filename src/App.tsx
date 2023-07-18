import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./syles/themes/default"
import { GlobalStyle } from "./syles/global"

export function App() {
  return(
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      
      <h1>Hello World</h1>
    </ThemeProvider>
  )
}
