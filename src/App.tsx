import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./syles/themes/default"
import { GlobalStyle } from "./syles/global"
import { Transactions } from "./pages/Transactions"

export function App() {
  return(
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <Transactions />
    </ThemeProvider>
  )
}
