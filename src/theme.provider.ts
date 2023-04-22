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
          // paddingLeft: "0",
          // paddingRight: "0",
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

    MuiLinearProgress: {
      styleOverrides: {
        root: {
          "&._LinearRatingDoctor": {
            background: "#E0E0E0",
            "& .MuiLinearProgress-barColorPrimary": {
              backgroundColor: "#FFB82E",
            },
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
        // ButtonL styles
        root: ({ ownerState, theme }) => ({
          padding: "10px 24px",
          height: "48px",
          borderRadius: "8px",
          boxShadow: "none",

          ...(ownerState.variant === "contained" && {
            "&:hover": {
              backgroundColor: theme.palette.custom.primary80,
              boxShadow:
                "0px 1px 4px rgba(66, 199, 161, 0.2), 0px 1px 3px 1px rgba(66, 199, 161, 0.15)",
            },
            "&:focused": {
              backgroundColor: theme.palette.custom.primary80,
            },
            "&:active": {
              backgroundColor: theme.palette.custom.primary60,
            },
            "&:disable": {
              backgroundColor: theme.palette.custom.neutral90,
              color: theme.palette.custom.neutral60,
            },
          }),

          ...(ownerState.variant === "outlined" && {
            border: `1px solid ${theme.palette.primary.main}`,
            "&:hover": {
              backgroundColor: "#E7FFF3",
            },
            "&:focused": {
              background: theme.palette.custom.primary99,
            },
            "&:active": {
              border: `1px solid ${theme.palette.custom.primary60}`,
              backgroundColor: "#E7FFF3",
              color: theme.palette.custom.primary60,
            },
            "&:disable": {
              backgroundColor: theme.palette.custom.neutral70,
              color: theme.palette.custom.neutral70,
            },
          }),

          ...(ownerState.variant === "text" && {
            "&:hover": {
              backgroundColor: theme.palette.custom.primary95,
            },
            "&:focused": {
              backgroundColor: theme.palette.custom.primary95,
            },
            "&:active": {
              backgroundColor: theme.palette.custom.primary90,
              color: theme.palette.custom.primary50,
            },
            "&:disable": {
              color: theme.palette.custom.neutral70,
            },
          }),
        }),
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: "8px",
          height: "48px",
          "& .MuiOutlinedInput-input": {
            padding: "12px 16px",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderWidth: "1.1px",
          },
          "&:hover:not(.Mui-disabled, .Mui-error) fieldset": {
            borderWidth: `1.1px`,
            borderColor: theme.palette.custom.neutral60,
          },
          "&.Mui-disabled": {
            backgroundColor: theme.palette.custom.neutral95,
            borderColor: theme.palette.custom.neutral80,
            color: theme.palette.custom.neutral40,
          },
        }),
      },
    },
  },
});
