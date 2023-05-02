import { MenuItem, useTheme } from "@mui/material";

import { OptionsWrapper } from "./";
import { SelectWithPlaceholder } from "../atomic";

export const DoctorQualifications = () => {
  const {
    palette: { custom },
    typography,
  } = useTheme();

  return (
    <OptionsWrapper label="Кваліфікація лікаря" variant="subtitle1">
      <SelectWithPlaceholder>
        <MenuItem value="var 1">Вища</MenuItem>
        <MenuItem value="var 2">Не вища</MenuItem>
        <MenuItem value="var 3">Ніяка 😄</MenuItem>
      </SelectWithPlaceholder>
    </OptionsWrapper>
  );
};
