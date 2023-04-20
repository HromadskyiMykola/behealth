import { useState } from "react";
import {
  Box,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  InputAdornment,
  MenuItem,
  Select,
  Slider,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";

import { MapIcon } from "lucide-react";
import { KeyboardArrowDown } from "@mui/icons-material";

import { CustomizedPaper } from "../atomic";

export const FilterClinics = () => {
  const { palette, typography } = useTheme();

  return (
    <CustomizedPaper
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
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
        defaultValue="var 1"
        displayEmpty
        IconComponent={KeyboardArrowDown}
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

      <FormControlLabel
        componentsProps={{ typography: { variant: "body2" } }}
        control={<Checkbox />}
        label="Державна клініка"
      />

      <FormControlLabel
        componentsProps={{ typography: { variant: "body2" } }}
        control={<Checkbox />}
        label="Приватна клініка"
      />

      <Divider />

      <Typography variant="subtitle2" color={palette.custom.primary20}>
        Додаткові опції
      </Typography>

      <FormControlLabel
        componentsProps={{ typography: { variant: "body2" } }}
        control={<Checkbox />}
        label="Паркінг"
      />

      <FormControlLabel
        componentsProps={{ typography: { variant: "body2" } }}
        control={<Checkbox />}
        label="Дитяча кімната"
      />

      <FormControlLabel
        componentsProps={{ typography: { variant: "body2" } }}
        control={<Checkbox />}
        label="Оплата картою"
      />

      <FormControlLabel
        componentsProps={{ typography: { variant: "body2" } }}
        control={<Checkbox />}
        label="Wi-Fi зона"
      />

      <FormControlLabel
        componentsProps={{ typography: { variant: "body2" } }}
        control={<Checkbox />}
        label="Аптека"
      />
    </CustomizedPaper>
  );
};
