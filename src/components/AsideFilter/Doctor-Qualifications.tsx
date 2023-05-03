import { MenuItem, SelectChangeEvent } from "@mui/material";

import { OptionsWrapper } from "./";
import { SelectWithPlaceholder } from "../atomic";
import { TOptionsData } from "~/common";
import { useState } from "react";

export const DoctorQualifications = ({
  optionsData,
}: {
  optionsData: TOptionsData;
}) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (e: SelectChangeEvent<any>) => {
    setSelectedValue(e.target.value as string);
  };

  return (
    <OptionsWrapper label="Кваліфікація лікаря" variant="subtitle1">
      <SelectWithPlaceholder
        value={selectedValue}
        onChange={handleSelectChange}
        {optionsData.qualifications.map((qualification, i) => (
          <MenuItem key={qualification + i} value={qualification}>
            {qualification}
          </MenuItem>
        ))}
      </SelectWithPlaceholder>
    </OptionsWrapper>
  );
};
