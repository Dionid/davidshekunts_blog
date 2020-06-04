import { ThemeProvider } from "@material-ui/styles"
import { theme } from "./index"


export const withThemeProvider = (Component) => (props: any) => {
  return <ThemeProvider theme={theme}>
    <Component {...props}/>
  </ThemeProvider>
}