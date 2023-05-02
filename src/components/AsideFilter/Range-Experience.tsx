import { useState } from "react";

import { FormControl, Slider, Stack, TextField, Typography, useTheme } from "@mui/material";

const minDistance = 10;

export const RangeExperience = () => {
  const [rangeExperience, setRangeExperience] = useState<number[]>([0, 10]);
  const { palette, typography } = useTheme();

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
  );
};
