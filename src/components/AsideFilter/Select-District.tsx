import {
  InputAdornment,
  MenuItem,
  SelectChangeEvent,
  useTheme,
} from "@mui/material";

import { KeyboardArrowDown } from "@mui/icons-material";
import { MapIcon } from "lucide-react";

import { OptionsWrapper } from "./";
import { SelectWithPlaceholder } from "../atomic";

import { TOptionsData } from "~/common";
import { useState } from "react";

export const SelectDistrict = ({
  optionsData,
}: {
  optionsData: TOptionsData;
}) => {
  const { custom } = useTheme().palette;

  const [selectedValue, setSelectedValue] = useState(""); 
 
  const handleSelectChange = (e: SelectChangeEvent<any>) => {
    setSelectedValue(e.target.value as string);
  };

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
        onChange={handleSelectChange}
        value={selectedValue}
      >
        {optionsData.districts.map((district, i) => (
          <MenuItem key={district + i} value={district}>
            {district}
          </MenuItem>
        ))}
      </SelectWithPlaceholder>
    </OptionsWrapper>
  );
};
