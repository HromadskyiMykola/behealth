import { SetStateAction, useState } from "react";

import { KeyboardArrowDown } from "@mui/icons-material";
import {
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Typography,
  styled,
} from "@mui/material";

import { TDoctor } from "~/common";

const StyledSelect = styled(Select)(({ theme }) => ({
  width: "100%",
  "&:focus": {
    outline: "none",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "transparent",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "transparent !important",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "transparent !important",
  },
  ...theme.typography.body2,
}));

interface IDocsSortList {
  // TODO: define props for clinics page
  setFilteredData: (value: SetStateAction<TDoctor[]>) => void;
}

export const SelectTopBar = ({ setFilteredData }: IDocsSortList) => {
  const [selected, setSelected] = useState<keyof TDoctor>("grade");

  const handleSelectChange = (e: SelectChangeEvent<any>) => {
    const value = e.target.value as keyof TDoctor;

    const sortData = (data: TDoctor[]) =>
      [...data].sort((a: TDoctor, b: TDoctor) => {
        if (typeof a[value] === "number") {
          const key = value as "experience" | "rating";

          return b[key] - a[key];
        } else if (typeof a[value] === "string") {
          const key = value as "grade";

          return a[key].localeCompare(b[key]);
        } else {
          return 0;
        }
      });

    setFilteredData(sortData);
    setSelected(value);
  };

  return (
    <Paper sx={{ mb: "24px", p: "10px 16px", borderRadius: "8px" }}>
      <StyledSelect
        IconComponent={KeyboardArrowDown}
        value={selected}
        onChange={handleSelectChange}
      >
        <MenuItem value="grade">
          <Typography variant="body2">Рекомендовані</Typography>
        </MenuItem>

        <MenuItem value="rating">
          <Typography variant="body2">За рейтингом</Typography>
        </MenuItem>

        <MenuItem value="experience">
          <Typography variant="body2">За стажем</Typography>
        </MenuItem>
      </StyledSelect>
    </Paper>
  );
};
