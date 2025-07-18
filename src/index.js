import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import App from "./App";

import { ThemeProvider } from "@material-ui/core/styles";
import { getTheme } from "./theme";  // import your theme function

// You can set mode dynamically, here example "light"
const theme = getTheme("light");

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
