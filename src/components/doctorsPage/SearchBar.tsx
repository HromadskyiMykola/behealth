import {
  Button,
  InputAdornment,
  MenuItem,
  Stack,
  useTheme,
} from "@mui/material";
import { SearchIcon } from "lucide-react";

import {
  CustomizedInput,
  CustomizedPaper,
  SelectWithPlaceholder,
} from "../atomic";

export const SearchBar = () => {
  const { custom } = useTheme().palette;

  return (
    <CustomizedPaper sx={{ p: "32px 32px 40px 32px" }}>
      <Stack direction="row" gap="24px" alignItems="flex-end">
        <SelectWithPlaceholder
          sx={{ display: "flex", flexBasis: "40%", minWidth: "150px" }}
          label="Спеціальність"
          placeholder="Обрати"
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

        <Button sx={{ maxWidth: "175px", width: "100%" }} variant="contained">
          Знайти
        </Button>
      </Stack>
    </CustomizedPaper>
  );
};
