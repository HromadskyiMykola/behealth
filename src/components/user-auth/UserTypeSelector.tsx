import { Box, Button, Stack } from "@mui/material";
import { LucideProps } from "lucide-react";
import { Glasses, Smile } from "lucide-react";

interface UserTypeSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

const IconInWraparound = ({
  children,
  value,
}: LucideProps & { value: string }) => (
  <Box sx={{ borderRadius: "8px", padding: "4px", border: "1px dotted" }}>
    {children}
  </Box>
);

export function UserTypeSelector({ value, onChange }: UserTypeSelectorProps) {
  return (
    <Stack mb={2} spacing={2} direction="row" aria-label="Тип користувача">
      <Button
        startIcon={<IconInWraparound value={value} children={<Smile />} />}
        fullWidth
        // sx={{height: "48px"}}
        variant={value === "patient" ? "contained" : "outlined"}
        onClick={() => onChange("patient")}
      >
        {"Пацієнт"}
      </Button>
      <Button
        startIcon={<IconInWraparound value={value} children={<Glasses />} />}
        fullWidth
        variant={value === "doctor" ? "contained" : "outlined"}
        onClick={() => onChange("doctor")}
      >
        {"Доктор"}
      </Button>
    </Stack>
  );
}
