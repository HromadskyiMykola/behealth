import { Button, Stack } from "@mui/material";

interface UserTypeSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export default function UserTypeSelector({
  value,
  onChange,
}: UserTypeSelectorProps) {
  return (
    <Stack mb={2} spacing={2} direction="row" aria-label="Тип користувача">
      <Button
        fullWidth
        variant={value === "patient" ? "contained" : "outlined"}
        onClick={() => onChange("patient")}
      >
        {"Пацієнт"}
      </Button>
      <Button
        fullWidth
        variant={value === "doctor" ? "contained" : "outlined"}
        onClick={() => onChange("doctor")}
      >
        {"Доктор"}
      </Button>
    </Stack>
  );
}
