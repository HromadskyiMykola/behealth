import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    captionS: React.CSSProperties;
    overline: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    captionS?: React.CSSProperties;
    overline?: React.CSSProperties;
  }
}
declare module "@mui/material/styles/createPalette" {}
// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    captionS: true;
    overline: true;
  }
}
declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    mobile: true;
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

export const createOverrideTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#006C53",
      light: "#7DF8D0",
      dark: "#002117",
    },
    secondary: {
      main: "#002117",
      light: "#CEE9DC",
      dark: "#082018",
    },
    error: {
      main: "#BA1A1A",
      light: "#FFDAD6",
      dark: "#410002",
    },
    info: {
      main: "#406375",
      light: "#C3E8FE",
      dark: "#001E2B",
    },
    background: {
      default: "#FBFDF9",
    },
    text: {
      // secondary70: '#97B1A5',
      primary: "#212121",
      secondary: "#7D968B",
      disabled: "#A9ACA9",
    },
  },
  breakpoints: {
    values: {
      xs: 380,
      sm: 768,
      md: 1024,
      lg: 1408,
      xl: 1536,
      mobile: 380,
      tablet: 1024,
      laptop: 1200,
      desktop: 1600,
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    fontSize: 16,
    h1: {
      color: "#212121",
      fontSize: "56px",
      fontWeight: "700",
      lineHeight: "64px",
      letterSpacing: "0em",
    },
    h2: {
      color: "#212121",
      fontSize: "48px",
      fontWeight: "700",
      lineHeight: "56px",
      letterSpacing: "0em",
    },
    h3: {
      color: "#212121",
      fontSize: "40px",
      fontWeight: "700",
      lineHeight: "48px",
      letterSpacing: "0em",
    },
    h4: {
      color: "#212121",
      fontSize: "32px",
      fontWeight: "700",
      lineHeight: "40px",
      letterSpacing: "0em",
    },
    h5: {
      color: "#212121",
      fontSize: "24px",
      fontWeight: "700",
      lineHeight: "32px",
      letterSpacing: "0em",
    },
    body1: {
      color: "#212121",
      fontSize: "18px",
      fontWeight: "500",
      lineHeight: "26px",
      letterSpacing: "0em",
    },
    body2: {
      color: "#212121",
      fontSize: "16px",
      fontWeight: "500",
      lineHeight: "24px",
      letterSpacing: "0em",
    },
    subtitle1: {
      color: "#212121",
      fontSize: "18px",
      fontWeight: "700",
      lineHeight: "26px",
      letterSpacing: "0.012em",
    },
    subtitle2: {
      color: "#212121",
      fontSize: "16px",
      fontWeight: "700",
      lineHeight: "24px",
      letterSpacing: "0.012em",
    },
    caption: {
      color: "#212121",
      fontSize: "14px",
      fontWeight: "600",
      lineHeight: "22px",
      letterSpacing: "0.5px",
    },
    captionS: {
      fontSize: "12px",
      fontWeight: "600",
      lineHeight: "22px",
      letterSpacing: "0.45px",
    },
    button: {
      fontSize: "16px",
      fontWeight: "500",
      lineHeight: "20px",
      letterSpacing: "0em",
      textTransform: "none",
    },
    overline: {
      fontSize: "12px",
      fontWeight: "600",
      lineHeight: "20px",
      letterSpacing: "2.5px",
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: "1408px",
          paddingLeft: "0",
          paddingRight: "0",
          // padding:'0 !important',
          "&._containerHeader": {
            display: "flex",
            alignItems: "center",
            height: "80px",
            justifyContent: "space-between",
          },
        },
      },
    },

    MuiTypography: {
      styleOverrides: {
        root: {
          "&._logo": {
            color: "black",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "#FFFFFF",
          boxShadow: "none",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          //Якщо ви не знаєете де ваш падінг між текстом і іконкою то я тут його обнулив тому що не зміг найти інгшого варінта
          paddingRight: "0 !important",
          "&._selectChooseCity": {
            // paddingRight: '0 !important',
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          "&._headerNavLink": {
            textDecoration: "none",
            color: "#212121",
          },
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {},
      },
    },

    MuiAccordion: {
      styleOverrides: {
        root: {
          "&._containerAccordion": {
            boxShadow: "none",
          },
        },
      },
    },

    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          "&._containerAccordionSummary": {
            padding: "0",
          },
        },
      },
    },

    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          "&._containerAccordionDetails": {
            padding: "0",
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          padding: "10px 24px",
          textTransform: "none",
          ...(ownerState.variant === "contained" && {
            backgroundColor: "#3ABD98",
            color: theme.palette.primary.contrastText,
            borderRadius: "8px",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "#5EDCB5",
              color: theme.palette.primary.contrastText,
              boxShadow:
                "0px 1px 4px rgba(66, 199, 161, 0.2), 0px 1px 3px 1px rgba(66, 199, 161, 0.15)",
            },
            "&:focused": {
              backgroundColor: "#5EDCB5",
              color: theme.palette.primary.contrastText,
              boxShadow: "none",
            },
            "&:active": {
              backgroundColor: "#09A480",
              color: theme.palette.primary.contrastText,
              boxShadow: "none",
            },
            "&:disable": {
              backgroundColor: "#E1E3E0",
              color: "#8E918F",
              boxShadow: "none",
            },
          }),
          ...(ownerState.variant === "outlined" && {
            border: "1px solid #3ABD98",
            color: "#3ABD98",
            borderRadius: "8px",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "#E7FFF3",
              boxShadow: "none",
            },
            "&:focused": {
              background: "#F4FFF8",
              boxShadow: "none",
            },
            "&:active": {
              backgroundColor: "#E7FFF3",
              boxShadow: "none",
            },
            "&:disable": {
              color: "#8E918F",
              boxShadow: "none",
            },
          }),
          ...(ownerState.variant === "text" && {
            color: "#3ABD98",
            borderRadius: "8px",
            padding: "10px 12px",
            height: "auto",
            width: "auto",
            "&:hover": {
              backgroundColor: "#DCF7EA",
              boxShadow: "none",
            },
            "&:focused": {
              backgroundColor: "#DCF7EA",
              boxShadow: "none",
            },
            "&:active": {
              color: "#008769",
              backgroundColor: "#CEE9DC",
              boxShadow: "none",
            },
            "&:disable": {
              color: "#A9ACA9",
              boxShadow: "none",
            },
          }),
        }),
      },
    },
  },
});
