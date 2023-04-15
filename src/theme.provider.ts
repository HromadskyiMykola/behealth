import { createTheme } from "@mui/material";

import { customPalette } from "./theme.palette";

export const createOverrideTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#3ABD98",
      light: "#A4FFE5",
      dark: customPalette.primary60,
      contrastText: customPalette.primary100,
    },
    background: {
      default: "#F5F5F5",
    },
    text: {
      primary: "#212121",
      disabled: customPalette.neutral60,
      secondary: customPalette.neutral70,
    },
    error: {
      main: customPalette.error50,
    },
    custom: customPalette,
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1408,
      xl: 1536,
      mobile: 0,
      tablet: 640,
      laptop: 1200,
      desktop: 1600,
    },
  },
  typography: {
    fontFamily: "Inter, SF Mono, sans-serif",
    fontSize: 16,
    h1: {
      fontSize: "56px",
      fontWeight: "700",
      lineHeight: "64px",
      letterSpacing: "0em",
    },
    h2: {
      fontSize: "48px",
      fontWeight: "700",
      lineHeight: "56px",
      letterSpacing: "0em",
    },
    h3: {
      fontSize: "40px",
      fontWeight: "700",
      lineHeight: "48px",
      letterSpacing: "0em",
    },
    h4: {
      fontSize: "32px",
      fontWeight: "700",
      lineHeight: "40px",
      letterSpacing: "0em",
    },
    h5: {
      fontSize: "24px",
      fontWeight: "700",
      lineHeight: "32px",
      letterSpacing: "0em",
    },
    body1: {
      fontSize: "18px",
      fontWeight: "500",
      lineHeight: "26px",
      letterSpacing: "0em",
    },
    body2: {
      fontWeight: "500",
      lineHeight: "24px",
      letterSpacing: "0em",
    },
    subtitle1: {
      fontSize: "18px",
      fontWeight: "700",
      lineHeight: "26px",
      letterSpacing: "0.012em",
    },
    subtitle2: {
      fontWeight: "700",
      lineHeight: "24px",
      letterSpacing: "0.012em",
    },
    caption: {
      fontSize: "14px",
      fontWeight: "600",
      lineHeight: "22px",
      letterSpacing: "0.45px",
    },
    captionS: {
      fontSize: "12px",
      fontWeight: "600",
      lineHeight: "22px",
      letterSpacing: "0.45px",
    },
    button: {
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
      textTransform: "uppercase",
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
