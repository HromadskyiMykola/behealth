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

import { SelectWithPlaceholder } from "../atomic";

const minDistance = 10;

export const FilterDoctors = () => {
  const { palette, typography } = useTheme();
  const [rangeCost, setRangeCost] = useState<number[]>([0, 10]);
  const [rangeExperience, setRangeExperience] = useState<number[]>([0, 10]);

  const handleRangeCost = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) return;

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setRangeCost([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setRangeCost([clamped - minDistance, clamped]);
      }
    } else {
      setRangeCost(newValue as number[]);
    }
  };

  const handleRangeExperience = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) return;

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setRangeExperience([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setRangeExperience([clamped - minDistance, clamped]);
      }
    } else {
      setRangeExperience(newValue as number[]);
    }
  };

  return (
    <Stack gap="12px">
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
        label="Лікар приймає декларації"
      />

      <FormControlLabel
        componentsProps={{ typography: { variant: "body2" } }}
        control={<Checkbox />}
        label="Лікар працює з eHealth (ЕСОЗ)"
      />

      <FormControlLabel
        componentsProps={{ typography: { variant: "body2" } }}
        control={<Checkbox />}
        label="Онлайн консультація"
      />

      <FormControlLabel
        componentsProps={{ typography: { variant: "body2" } }}
        control={<Checkbox />}
        label="Прийом дітей"
      />

      <Divider />

      <Typography variant="subtitle2" color={palette.custom.primary20}>
        Оплата послуг
      </Typography>

      <FormControlLabel
        componentsProps={{ typography: { variant: "body2" } }}
        control={<Checkbox />}
        label="Безкоштовно за направленням"
      />

      <FormControlLabel
        componentsProps={{ typography: { variant: "body2" } }}
        control={<Checkbox />}
        label="Безкоштовно за декларацією НСЗУ"
      />

      <FormControlLabel
        componentsProps={{ typography: { variant: "body2" } }}
        control={<Checkbox />}
        label="Платний прийом"
      />

      {/* range windows */}
      <FormControl>
        <Stack direction="row" alignItems="center" gap="14.5px">
          <TextField
            value={rangeCost[0]}
            sx={{ width: "112px", height: "48px" }}
          />
          <hr
            style={{
              width: "28px",
              border: "1.5px solid #212121",
            }}
          />
          <TextField
            value={rangeCost[1]}
            sx={{ width: "112px", height: "48px" }}
          />
        </Stack>

        <Slider
          valueLabelDisplay="auto"
          defaultValue={[20, 40]}
          sx={{ width: `calc(100% - 20px)`, alignSelf: "center" }}
          value={rangeCost}
          onChange={handleRangeCost}
          disableSwap
        />
      </FormControl>
      {/* range windows */}

      <Divider />

      <Typography variant="subtitle2" color={palette.custom.primary20}>
        Стать лікаря
      </Typography>

      <FormControlLabel
        componentsProps={{ typography: { variant: "body2" } }}
        control={<Checkbox />}
        label="Чоловік"
      />

      <FormControlLabel
        componentsProps={{ typography: { variant: "body2" } }}
        control={<Checkbox />}
        label="Жінка"
      />

      <Divider />

      {/* range windows */}
      <FormControl>
        <Stack direction="row" alignItems="center" gap="14.5px">
          <Typography variant="subtitle2" color={palette.custom.primary20}>
            Стаж лікаря:
          </Typography>
          <Typography variant="body2" color={palette.custom.primary20}>
            {rangeExperience}
          </Typography>
        </Stack>

        <Slider
          valueLabelDisplay="auto"
          defaultValue={[20, 40]}
          sx={{ width: `calc(100% - 20px)`, alignSelf: "center" }}
          value={rangeExperience}
          onChange={handleRangeExperience}
          disableSwap
        />
      </FormControl>
      {/* range windows */}

      <Divider />

      <Typography variant="subtitle2" color={palette.custom.primary20}>
        Оцінювання пацієнтами
      </Typography>

      <FormControlLabel
        componentsProps={{ typography: { variant: "body2" } }}
        control={<Checkbox />}
        label="Без оцінювань"
      />

      <FormControlLabel
        componentsProps={{ typography: { variant: "body2" } }}
        control={<Checkbox />}
        label="Нормально"
      />

      <FormControlLabel
        componentsProps={{ typography: { variant: "body2" } }}
        control={<Checkbox />}
        label="Добре"
      />

      <FormControlLabel
        componentsProps={{ typography: { variant: "body2" } }}
        control={<Checkbox />}
        label="Дуже добре"
      />

      <Typography variant="subtitle2" color={palette.custom.primary20}>
        Оцінювання пацієнтами
      </Typography>

      <SelectWithPlaceholder
        value="var 1"
        displayEmpty
        MenuProps={{
          sx: {
            "& .MuiMenuItem-root": {
              ...typography.body2,
            },
          },
        }}
      >
        <MenuItem value="var 1">Вища</MenuItem>
        <MenuItem value="var 2">Не вища</MenuItem>
        <MenuItem value="var 3">Ніяка 😄</MenuItem>
      </SelectWithPlaceholder>
    </Stack>
  );
};
