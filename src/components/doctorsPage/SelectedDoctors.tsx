import { Box, Chip, Stack, Typography, useTheme } from "@mui/material";
import { CustomizedPaper } from "../atomic";
import { useState } from "react";

interface ChipData {
  key: number;
  label: string;
}

export const SelectedDoctors = () => {
  const { palette } = useTheme();

  const [chipData, setChipData] = useState<readonly ChipData[]>([
    { key: 0, label: "Приватна клініка" },
    { key: 1, label: "Добре" },
    { key: 2, label: "Дуже добре" },
    { key: 3, label: "Вища освіта" },
    { key: 4, label: "Бімба! :) " },
  ]);

  const handleDelete = (chipToDelete: ChipData) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

  return (
    <CustomizedPaper
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "32px",
        p: "24px 24px 32px 24px",
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h5" color={palette.custom.primary20}>
          Ви обрали
        </Typography>

        <Typography variant="body2" color={palette.custom.primary20}>
          287 лікарів
        </Typography>
      </Stack>

      <Stack
        direction="row"
        justifyContent="space-between"
        flexWrap="wrap"
        columnGap="8px"
        rowGap="12px"
      >
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
    </CustomizedPaper>
  );
};
