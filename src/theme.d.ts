import { CSSProperties } from "react";

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

  interface TypographyVariants {
    captionS: CSSProperties;
    overline: CSSProperties;
  }

  interface TypographyVariantsOptions {
    captionS?: CSSProperties;
    overline?: CSSProperties;
  }

  interface Palette {
    custom: typeof customPalette;
  }
  interface PaletteOptions {
    custom?: Partial<typeof customPalette>;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    captionS: true;
    overline: true;
  }
}
