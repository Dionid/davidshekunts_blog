import createMuiTheme from "@material-ui/core/styles/createMuiTheme"
import deepPurple from "@material-ui/core/colors/deepPurple"

export const theme = createMuiTheme({
  palette: {
    // primary: amber,
    secondary: deepPurple,
    background: {
      default: "#f7f7f7",
    }
  },
  typography: {
    body1: {
      fontFamily: 'Arial',
      fontSize: 18,
    },
    body2: {
      fontFamily: 'Arial',
    },
    fontFamily: [
      'Lato',
      'Roboto',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  overrides: {
    MuiPaper: {
      rounded: {
        borderRadius: "8px",
      },
      elevation1: {
        boxShadow: "0px 7px 8px 0px rgba(0,0,0,0.07)",
      }
    },
    // Style sheet name ⚛️
    MuiButton: {
      contained: {
        boxShadow: "0px 7px 8px 0px rgba(0,0,0,0.05)",
      },
      containedPrimary: {
        color: "rgba(0, 0, 0, 0.87)",
      },
      containedSizeSmall: {
        padding: "7px 15px",
      },
    },
    MuiFilledInput: {
      root: {
        borderRadius: 4,
      },
      underline: {
        "&::before": {
          border: "none"
        },
        "&::after": {
          border: "none"
        },
        "&:hover": {
          "&::before": {
            border: "none"
          },
          "&::after": {
            border: "none"
          },
        }
      },
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: 5,
        backgroundColor: '#fff',
      },
    },
    MuiSelect: {
      outlined: {
        paddingTop: 12,
        paddingBottom: 12,
      }
    }
  },
});