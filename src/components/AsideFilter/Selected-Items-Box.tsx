import { useState } from "react";
import { Chip, Stack, Typography, useTheme } from "@mui/material";

type ChipData = {
  key: number;
  label: string;
};

export const SelectedItemsBox = ({ data = [] }: { data?: ChipData[] }) => {
  const { palette } = useTheme();

  const [chipData, setChipData] = useState<ChipData[] | []>(data);

  const handleDelete = (chipToDelete: ChipData) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

  return (
    <Stack gap="32px">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h5" color={palette.custom.primary20}>
          Ви обрали
        </Typography>

        <Typography variant="body2" color={palette.custom.primary20}>
          287 папуг
        </Typography>
      </Stack>

      <Stack
        direction="row"
        justifyContent="space-between"
        flexWrap="wrap"
        columnGap="8px"
        rowGap="12px"
      >
        {chipData.length > 0 && (
          <Chip
            color="error"
            label="Скинути всі"
            onClick={() => setChipData([])}
          />
        )}
        {chipData.map((data) => (
          <Chip
            key={data.key}
            color="primary"
            label={data.label}
            onDelete={handleDelete(data)}
          />
        ))}
      </Stack>

      <Typography
        variant="body2"
        color={palette.primary.main}
        sx={{ cursor: "pointer" }}
        onClick={() => setChipData([])}
      >
        Скинути всі
      </Typography>
    </Stack>
  );
};
