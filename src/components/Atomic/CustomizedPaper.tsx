import { Paper } from "@mui/material";
import { ReactNode } from "react";

export type CustomPaperProps = {
  gap?: number | string;
  children: ReactNode;
};

export default function CustomizedPaper({ children, gap = "24px" }: CustomPaperProps) {
  return (
    <Paper
      sx={{
        maxWidth: "1048px",
        borderRadius: "12px",
        padding: "32px",
        width: "100%",
        gap: gap,
      }}
    >
      {children}
    </Paper>
  );
}
