import { useEffect, useState } from "react";

import {
  FormControl,
  Slider,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

import { useDataContext } from "~/providers";

export const RangeExperience = () => {
  const {
    optionsData: { maxExperience },
    handleFilterChange,
  } = useDataContext();

  const [isMounted, setIsMounted] = useState(false);
  const [range, setRange] = useState<number>(0);

  const { primary20 } = useTheme().palette.custom;

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
      return;
    }

    const timer = setTimeout(() => {
      handleFilterChange("rangeExperience", range);
    }, 500);

    return () => clearTimeout(timer);
  }, [range]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    typeof newValue === "number" && setRange(newValue);
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
