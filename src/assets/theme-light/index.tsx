import { createTheme } from "@mui/material";

const themeLight = createTheme({
  palette: {
    primary: {
      main: "#0071a8",
    },
    secondary: {
      main: "#26127d",
    },
    error: {
      main: "#b10742",
    },
    warning: {
      main: "#c9741f",
    },
    text: {
      primary: "#194862",
    },
  },
});

export default themeLight;
