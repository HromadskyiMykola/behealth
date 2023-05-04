import { useState } from "react";

import { MenuItem, SelectChangeEvent } from "@mui/material";

import { useDataContext } from "~/providers";

import { OptionsWrapper } from "./";
import { SelectWithPlaceholder } from "../atomic";

export const DoctorQualifications = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const { optionsData, handleFilterChange } = useDataContext();

  const handleSelectChange = (e: SelectChangeEvent<any>) => {
    setSelectedValue(e.target.value as string);
    handleFilterChange("qualification", e.target.value);
  };

  return (
    <OptionsWrapper label="Кваліфікація лікаря" variant="subtitle1">
      <SelectWithPlaceholder
        value={selectedValue}
        onChange={handleSelectChange}
      >
        {optionsData.qualifications.map((qualification, i) => (
          <MenuItem key={qualification + i} value={qualification}>
            {qualification}
          </MenuItem>
        ))}
      </SelectWithPlaceholder>
    </OptionsWrapper>
  );
};
