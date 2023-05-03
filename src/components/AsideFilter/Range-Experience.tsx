import { useState } from "react";

import {
  FormControl,
  Slider,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { TOptionsData } from "~/common";

export const RangeExperience = ({
  optionsData: { maxExperience },
}: {
  optionsData: TOptionsData;
}) => {
  const [range, setRange] = useState<number>(0);

  const { primary20 } = useTheme().palette.custom;

  const handleChange = (event: Event, newValue: number | number[]) => {
    setRange(newValue as number);
  };

  return (
    <FormControl>
      <Stack direction="row" alignItems="center" gap="14.5px">
        <Typography variant="subtitle2" color={primary20}>
          Стаж лікаря від:
        </Typography>
        <Typography variant="body2" color={primary20}>
          {range} {range % 10 === 1 && range !== 11 ? "року" : "років"}
        </Typography>
      </Stack>

      <Slider
        defaultValue={0}
        max={maxExperience}
        sx={{ width: `calc(100% - 20px)`, alignSelf: "center" }}
        onChange={handleChange}
      />
    </FormControl>
  );
};
