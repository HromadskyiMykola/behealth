import { useState } from "react";

import {
  Button,
  InputAdornment,
  MenuItem,
  SelectChangeEvent,
  Stack,
  useTheme,
} from "@mui/material";
import { SearchIcon } from "lucide-react";

import {
  CustomizedInput,
  CustomizedPaper,
  SelectWithPlaceholder,
} from "../atomic";
import { useDeviceType } from "~/common";

export const SearchBar = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const { custom } = useTheme().palette;
  const { isSmDown } = useDeviceType();

  const handleSelectChange = (event: SelectChangeEvent<unknown>) => {
    setSelectedValue(event.target.value as string);
  };

  return (
    <CustomizedPaper
      sx={{ p: isSmDown ? "24px 16px 28px 16px" : "32px 32px 40px 32px" }}
    >
      <Stack
        direction={isSmDown ? "column" : "row"}
        gap="24px"
        alignItems={isSmDown ? "stretch" : "flex-end"}
        justifyItems="center"
      >
        <SelectWithPlaceholder
          sx={{ display: "flex", flexBasis: "40%", minWidth: "150px" }}
          label="Спеціальність"
          placeholder="Обрати"
          value={selectedValue}
          onChange={handleSelectChange}
        >
          <MenuItem value={1}>Option 1</MenuItem>
          <MenuItem value={2}>Option 2</MenuItem>
          <MenuItem value={3}>Option 3</MenuItem>
        </SelectWithPlaceholder>

        <CustomizedInput
          sx={{ display: "flex", flexBasis: "60%" }}
          label="ПІБ лікаря"
          placeholder="Введіть імʼя лікаря"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color={custom.neutral70} />
              </InputAdornment>
            ),
          }}
        />

        <Button sx={{ minWidth: "175px" }} variant="contained">
          Знайти
        </Button>
      </Stack>
    </CustomizedPaper>
  );
};
