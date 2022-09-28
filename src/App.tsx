import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import Button from "./Components/button"
import Router from "./Router"
import { GlobalStyle } from "./styles/global"
import { neutralTheme } from "./styles/themes/neutral"

function App() {

  return (
    <BrowserRouter>
      <ThemeProvider theme={neutralTheme}>
        <Router />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
