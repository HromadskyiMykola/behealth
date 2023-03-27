import { Paper } from "@mui/material";
import { ReactNode } from "react";

export type CustomPaperProps = {
  padding?: number | string;
  children: ReactNode;
};

export default function CustomizedPaper({
  children,
  padding = "24px",
}: CustomPaperProps) {
  return (
    <Paper
      sx={{
        maxWidth: "1048px",
        borderRadius: "12px",
        padding: padding,
        width: "100%",
      }}
    >
      {children}
    </Paper>
  );
}
