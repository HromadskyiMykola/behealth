import { useEffect, useState } from "react";
import { Chip, Stack, Typography, useTheme } from "@mui/material";
import { useDataContext } from "~/providers";

type ChipData = {
  key: string;
  label: string;
};

const genKey = () => Math.random().toFixed(10).substring(2);

export const SelectedItemsBox = () => {
  const { palette } = useTheme();

  const {
    filterOptions,
    filteredDoctors,
    optionsData,
    setFilteredDoctors,
    // selectedFilters,
    setSelectedFilters,
    handleFilterChange,
  } = useDataContext();
  const [isMounted, setIsMounted] = useState(false);
  const [chipData, setChipData] = useState<ChipData[]>([]);

  const handleDelete = (chipToDelete: ChipData) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
      return;
    }

    const {
      stateClinic,
      privateClinic,
      doctorAcceptsDeclarations,
      doctorWorksWithEHR,
      onlineConsultation,
      admissionOfChildren,
      admissionByReferral,
      admissionByNHSU,
      admissionPaid,
      rangePrice,
      male,
      female,
      rangeExperience,
      evaluationNo,
      evaluationNormally,
      evaluationGood,
      evaluationVeryGood,
      qualification,
    } = filterOptions;

    setChipData((state) => {
      if (admissionPaid.val) {
        state.push({
          key: genKey(),
          label: `${rangePrice.val.join("-")}грн`,
        });
      }

      if (stateClinic.val) {
        state.push({
          key: genKey(),
          label: stateClinic.title,
        });
      }

      if (privateClinic.val) {
        state.push({
          key: genKey(),
          label: privateClinic.title,
        });
      }

      if (doctorAcceptsDeclarations.val) {
        state.push({
          key: genKey(),
          label: doctorAcceptsDeclarations.title,
        });
      }

      if (doctorWorksWithEHR.val) {
        state.push({
          key: genKey(),
          label: doctorWorksWithEHR.title,
        });
      }

      if (onlineConsultation.val) {
        state.push({
          key: genKey(),
          label: onlineConsultation.title,
        });
      }

      if (admissionOfChildren.val) {
        state.push({
          key: genKey(),
          label: admissionOfChildren.title,
        });
      }

      if (admissionByNHSU.val) {
        state.push({
          key: genKey(),
          label: admissionByNHSU.title,
        });
      }

      if (admissionByReferral.val) {
        state.push({
          key: genKey(),
          label: admissionByReferral.title,
        });
      }

      if (female.val) {
        state.push({
          key: genKey(),
          label: female.title,
        });
      }

      if (male.val) {
        state.push({
          key: genKey(),
          label: male.title,
        });
      }

      if (evaluationNo.val) {
        state.push({
          key: genKey(),
          label: evaluationNo.title,
        });
      }

      if (evaluationNormally.val) {
        state.push({
          key: genKey(),
          label: evaluationNormally.title,
        });
      }

      if (evaluationGood.val) {
        state.push({
          key: genKey(),
          label: evaluationGood.title,
        });
      }

      if (evaluationVeryGood.val) {
        state.push({
          key: genKey(),
          label: evaluationVeryGood.title,
        });
      }

      if (rangeExperience.val) {
        const { val } = rangeExperience;

        state.push({
          key: genKey(),
          label: `Від ${val} ${
            val % 10 === 1 && val !== 11 ? "року" : "років"
          }`,
        });
      }

      if (qualification.val) {
        state.push({
          key: genKey(),
          label: qualification.val,
        });
      }

      return state;
    });

  }, [filterOptions]);

  return (
    <Stack gap="32px">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h5" color={palette.custom.primary20}>
          Ви обрали
        </Typography>

        <Typography variant="body2" color={palette.custom.primary20}>
          {filteredDoctors.length} лікарів
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
