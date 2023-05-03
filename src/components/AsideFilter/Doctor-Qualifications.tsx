import { MenuItem, SelectChangeEvent } from "@mui/material";

import { OptionsWrapper } from "./";
import { SelectWithPlaceholder } from "../atomic";
import { TAsideFilterComps } from "~/common";
import { useState } from "react";

export const DoctorQualifications = ({
  optionsData,
  handleFilterChange,
}: TAsideFilterComps) => {
  const [selectedValue, setSelectedValue] = useState("");

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
