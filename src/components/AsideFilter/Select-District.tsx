import { InputAdornment, MenuItem, useTheme } from "@mui/material";

import { KeyboardArrowDown } from "@mui/icons-material";
import { MapIcon } from "lucide-react";
import { OptionsWrapper } from "./";
import { SelectWithPlaceholder } from "../atomic";

export const SelectDistrict = () => {
  const {
    palette: { custom },
  } = useTheme();

  return (
    <OptionsWrapper label="Район" variant="subtitle1">
      <SelectWithPlaceholder
        placeholder="Всі райони"
        startAdornment={
          <InputAdornment position="start">
            <MapIcon color={custom.neutral70} />
          </InputAdornment>
        }
        // displayEmpty
        IconComponent={KeyboardArrowDown}
      >
        <MenuItem value="var 1">ПЗР</MenuItem>
        <MenuItem value="var 2">Д</MenuItem>
        <MenuItem value="var 3">Центр</MenuItem>
      </SelectWithPlaceholder>
    </OptionsWrapper>
  );
};
