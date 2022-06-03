// https://mui.com/material-ui/customization/theming/
// bunu nasıl kullanacağız,
// index.js'de bütün App'ı ThemeProvider arasına alıp içine theme'i koyacağız
import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1760a5",
      light: "skyblue",
    },
    secondary: {
      main: "#15c630",
    },
    otherColor: {
      main: "#999",
    },
  },
});
