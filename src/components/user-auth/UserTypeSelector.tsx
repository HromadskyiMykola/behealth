import { Box, Button, Stack, useTheme } from "@mui/material";
import { Glasses, Smile } from "lucide-react";
import { ReactNode } from "react";
import { EUserType } from "~/common";

interface UserTypeSelectorProps {
  userType: string;
  onChange: (userType: EUserType) => void;
}

interface IconInWraparoundProps {
  selected: boolean;
  children: ReactNode;
}

const IconInWraparound = ({ selected, children }: IconInWraparoundProps) => {
  const { palette } = useTheme();

  return (
    <Box
      sx={{
        width: "32px",
        height: "32px",
        borderRadius: "8px",
        padding: "4px",
        backgroundColor: selected ? palette.custom.primary80 : "transparent",
        transition: "background-color 0.5s",
        color: palette.custom.primary100,
      }}
    >
      {children}
    </Box>
  );
};

export function UserTypeSelector({
  userType,
  onChange,
}: UserTypeSelectorProps) {
  const { palette } = useTheme();

  const selected = {
    variant: "contained" as const,
    sx: {
      borderRadius: "10px",
      backgroundColor: palette.custom.primary100,
      color: palette.primary.main,
      border: `1px solid ${palette.custom.primary100}`,
      "&:hover": {
        border: `1px solid ${palette.custom.primary95}`,
        backgroundColor: palette.custom.primary95,
      },
    },
  };

  const unselected = {
    variant: "outlined" as const,
    sx: {
      borderRadius: "10px",
      backgroundColor: palette.primary.main,
      color: palette.custom.primary100,
      border: `1px solid ${palette.custom.primary100}`,
      "&:hover": {
        border: `1px solid ${palette.custom.primary100}`,
        backgroundColor: palette.custom.primary60,
      },
    },
  };

  return (
    <Stack mb={2} spacing={2} direction="row" aria-label="Тип користувача">
      <Button
        startIcon={
          <IconInWraparound
            selected={userType === EUserType.PATIENT}
            children={<Smile size={22} />}
          />
        }
        fullWidth
        {...(userType === EUserType.PATIENT ? selected : unselected)}
        onClick={() => onChange(EUserType.PATIENT)}
      >
        Пацієнт
      </Button>
      <Button
        startIcon={
          <IconInWraparound
            selected={!(userType === EUserType.PATIENT)}
            children={<Glasses size={22} />}
          />
        }
        fullWidth
        {...(userType === EUserType.PATIENT ? unselected : selected)}
        onClick={() => onChange(EUserType.DOCTOR)}
      >
        Лікар
      </Button>
    </Stack>
  );
}
