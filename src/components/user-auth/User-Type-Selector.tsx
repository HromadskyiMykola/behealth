import { PropsWithChildren, ReactNode } from "react";
import { Box, Button, Stack, useTheme } from "@mui/material";
import { Glasses, Smile } from "lucide-react";

import { EUserType } from "~/common";

interface UserTypeSelectorProps {
  userType: string;
  onChange: (userType: EUserType) => void;
}

interface IconInWraparoundProps {
  isSelected: boolean;
  patient?: boolean;
}

const IconInWraparound = ({ isSelected, patient }: IconInWraparoundProps) => {
  const { primary80, primary100 } = useTheme().palette.custom;

  return (
    <Box
      sx={{
        width: "32px",
        height: "32px",
        borderRadius: "8px",
        padding: "4px",
        backgroundColor: isSelected ? primary80 : "transparent",
        transition: "background-color 0.5s",
        color: primary100,
      }}
    >
      {patient ? <Smile size={22} /> : <Glasses size={22} />}
    </Box>
  );
};

export const UserTypeSelector = ({
  userType,
  onChange,
}: UserTypeSelectorProps) => {
  const { primary, custom } = useTheme().palette;
  const isSelected = userType === EUserType.PATIENT;

  const selectedStyle = {
    variant: "contained" as const,
    sx: {
      borderRadius: "10px",
      backgroundColor: custom.primary100,
      color: primary.main,
      border: `1px solid ${custom.primary100}`,
      "&:hover": {
        border: `1px solid ${custom.primary95}`,
        backgroundColor: custom.primary95,
      },
    },
  };

  const unselectedStyle = {
    variant: "outlined" as const,
    sx: {
      borderRadius: "10px",
      backgroundColor: primary.main,
      color: custom.primary100,
      border: `1px solid ${custom.primary100}`,
      "&:hover": {
        border: `1px solid ${custom.primary100}`,
        backgroundColor: custom.primary60,
      },
    },
  };

  return (
    <Stack mb={2} spacing={2} direction="row" aria-label="Тип користувача">
      <Button
        startIcon={<IconInWraparound patient isSelected={isSelected} />}
        fullWidth
        {...(isSelected ? selectedStyle : unselectedStyle)}
        onClick={() => onChange(EUserType.PATIENT)}
      >
        Пацієнт
      </Button>

      <Button
        startIcon={<IconInWraparound isSelected={!isSelected} />}
        fullWidth
        {...(isSelected ? unselectedStyle : selectedStyle)}
        onClick={() => onChange(EUserType.DOCTOR)}
      >
        Лікар
      </Button>
    </Stack>
  );
};
