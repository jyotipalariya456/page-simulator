import { createMuiTheme } from "@material-ui/core/styles";

export const getTheme = (mode) =>
  createMuiTheme({
    palette: {
      type: mode, // 'light' ya 'dark'
      primary: {
        main: mode === 'light' ? '#0D47A1' : '#90caf9', // navy blue or light blue
      },
      secondary: {
        main: mode === 'light' ? '#388E3C' : '#66bb6a', // dark green or light green
      },
    },
  });
