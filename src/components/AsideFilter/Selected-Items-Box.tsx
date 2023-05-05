import { useEffect, useMemo, useState } from "react";
import { Chip, Stack, Typography, useTheme } from "@mui/material";

import { useDataContext } from "~/providers";
import { chipsSeparator, numberToWord } from "~/helper-function";
import { useDeviceType } from "~/hooks";
import { ChipData, TFilterOptions } from "~/common";

type TProps = { modeType: "doctor" | "clinic" };

export const SelectedItemsBox = ({ modeType }: TProps) => {
  const { palette } = useTheme();
  const { isWidth600 } = useDeviceType();

  const {
    selectedFilters,
    filteredDoctors,
    filteredClinics,
    handleFilterChange,
  } = useDataContext();

  const QTY =
    modeType === "doctor" ? filteredDoctors.length : filteredClinics.length;

  const [isMounted, setIsMounted] = useState(false);

  const [chipData, setChipData] = useState<ChipData>({});

  const chipDataKeys = useMemo(() => Object.keys(chipData), [chipData]);

  const handleResetChipsData = () => {
    chipDataKeys.forEach((key) =>
      handleFilterChange(key as keyof TFilterOptions, false)
    );

    setChipData({});
  };

  const handleDelete = (keyToDelete: keyof TFilterOptions) => () => {
    handleFilterChange(keyToDelete, false);
    setChipData((prevChips) => {
      delete prevChips[keyToDelete];
      return { ...prevChips };
    });
  };

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
      return;
    }

    setChipData((state) => chipsSeparator({ ...state }, selectedFilters));
  }, [selectedFilters]);

  return (
    <Stack gap="32px">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h5" color={palette.custom.primary20}>
          Обрано
        </Typography>

        <Typography variant="body2" color={palette.custom.primary20}>
          {QTY} {numberToWord(QTY, modeType)}
        </Typography>
      </Stack>

      {chipDataKeys.length > 0 && (
        <Stack
          direction="row"
          justifyContent="space-between"
          flexWrap="wrap"
          columnGap="8px"
          rowGap="12px"
        >
          {chipDataKeys.length > 0 && (
            <Chip
              size={isWidth600 ? "small" : "medium"}
              sx={{ display: { xs: "inline-flex", md: "none" } }}
              color="error"
              label="Скинути всі"
              onClick={handleResetChipsData}
            />
          )}

          {chipDataKeys.map((item) => {
            const { label, key } = chipData[item];
            return (
              <Chip
                size={isWidth600 ? "small" : "medium"}
                key={key}
                color="primary"
                label={label}
                onDelete={handleDelete(key)}
              />
            );
          })}
        </Stack>
      )}

      {chipDataKeys.length > 0 && (
        <Typography
          variant="body2"
          color={palette.primary.main}
          sx={{ cursor: "pointer", display: { xs: "none", md: "block" } }}
          onClick={handleResetChipsData}
        >
          Скинути всі
        </Typography>
      )}
    </Stack>
  );
};
