import { useEffect, useState } from "react";

import { MenuItem, SelectChangeEvent } from "@mui/material";

import { useDataContext } from "~/providers";

import { OptionsWrapper } from "./";
import { SelectWithPlaceholder } from "../atomic";

export const DoctorQualifications = () => {
  const { optionsData, selectedFilters, handleFilterChange } = useDataContext();
  const { val } = selectedFilters.qualification;

  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (e: SelectChangeEvent<any>) => {
    setSelectedValue(e.target.value as string);
    handleFilterChange("qualification", e.target.value);
  };

  useEffect(() => {
    setSelectedValue("");
  }, [val]);

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
