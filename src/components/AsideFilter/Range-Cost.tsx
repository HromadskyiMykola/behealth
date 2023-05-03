import { useState } from "react";

import { FormControl, Slider, Stack, TextField } from "@mui/material";
import { TOptionsData } from "~/common";

export const RangeCost = ({
  optionsData: { rangePrice },
}: {
  optionsData: TOptionsData;
}) => {
  const [range, setRange] = useState<number[]>(rangePrice);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setRange(newValue as number[]);
  };

  return (
    <FormControl>
      <Stack direction="row" alignItems="center" gap="14.5px">
        <TextField value={range[0]} sx={{ width: "112px", height: "48px" }} />
        <hr
          style={{
            width: "28px",
            border: "1.5px solid #212121",
          }}
        />
        <TextField value={range[1]} sx={{ width: "112px", height: "48px" }} />
      </Stack>

      <Slider
        min={rangePrice[0]}
        max={rangePrice[1]}
        step={50}
        sx={{ width: `calc(100% - 20px)`, alignSelf: "center" }}
        value={range}
        onChange={handleChange}
        disableSwap
      />
    </FormControl>
  );
};
