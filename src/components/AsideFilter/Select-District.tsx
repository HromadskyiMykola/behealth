import { useState } from "react";
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

import { useDataContext } from "~/providers";

export const SelectDistrict = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const { optionsData, handleFilterChange } = useDataContext();
  const { custom } = useTheme().palette;

  const handleSelectChange = (e: SelectChangeEvent<any>) => {
    handleFilterChange("district", e.target.value);
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
