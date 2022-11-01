import { createTheme } from "@mui/material";

const themeDark = createTheme({
  palette: {
    primary: {
      main: "#000008",
    },
    secondary: {
      main: "#000b41",
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
    background: {
      default: "#192231",
    },
  },
});

export default themeDark;
