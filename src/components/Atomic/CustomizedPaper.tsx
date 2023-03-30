import { Paper, PaperProps } from "@mui/material";
import { ReactNode } from "react";

export interface CustomPaperProps extends PaperProps {
  gap?: number | string;
  children: ReactNode;
};

export default function CustomizedPaper({ children, gap = "24px", ...otherProps }: CustomPaperProps) {
  return (
    <Paper
      {...otherProps}
      sx={{
        maxWidth: "1048px",
        borderRadius: "12px",
        padding: "32px",
        width: "100%",
        mb:"16px",
        gap: gap,
      }}
    >
      {children}
    </Paper>
  );
}
