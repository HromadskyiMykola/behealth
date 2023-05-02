import { useState } from "react";

import { FormControl, Slider, Stack, TextField } from "@mui/material";

const minDistance = 10;

export const RangeCost = () => {
  const [rangeCost, setRangeCost] = useState<number[]>([0, 10]);

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

  return (
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
  );
};
