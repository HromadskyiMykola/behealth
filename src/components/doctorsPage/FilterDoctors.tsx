import {
  Box,
  InputAdornment,
  MenuItem,
  Paper,
  Select,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { CustomizedPaper, SelectWithPlaceholder } from "../atomic";
import { MapIcon } from "lucide-react";

export const FilterDoctors = () => {
  const { palette, typography } = useTheme();

  return (
    <CustomizedPaper
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "32px",
        p: "24px 24px 32px 24px",
      }}
    >
      <Typography variant="h5" color={palette.custom.primary20}>
        Фільтр
      </Typography>
      <Typography variant="subtitle1" color={palette.custom.primary20}>
        Район
      </Typography>

      <Select
        defaultValue=""
        displayEmpty
        MenuProps={{
          sx: {
            "& .MuiMenuItem-root": {
              ...typography.body2,
            },
          },
        }}
        renderValue={(value) => {
          return (
            <Box display="flex" gap={1}>
              <MapIcon color={palette.custom.neutral70} />
              {value}
            </Box>
          );
        }}
      >
        <MenuItem value="var 1">ПЗР</MenuItem>
        <MenuItem value="var 2">Д</MenuItem>
        <MenuItem value="var 3">Центр</MenuItem>
      </Select>

      <Typography variant="subtitle2" color={palette.custom.primary20}>
        Тип медичного закладу
      </Typography>
    </CustomizedPaper>
  );
};
