import { useEffect, useState } from "react";
import { Chip, Stack, Typography, useTheme } from "@mui/material";
import { useDataContext } from "~/providers";
import { genKey, yearsFormatter } from "~/helper-function";

type ChipData = {
  key: string;
  label: string;
};

const pushToState = (state: ChipData[], label: string) => {
  state.push({
    key: genKey(),
    label,
  });
};

export const SelectedItemsBox = () => {
  const { palette } = useTheme();

  const {
    selectedFilters,
    filteredDoctors,
    optionsData,
    setFilteredDoctors,
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
    } = selectedFilters;

    // console.log("eff>>", );
    setChipData((state) => {
      if (admissionPaid.val) {
        pushToState(chipData, `${rangePrice.val.join("-")}грн`);
      }

      if (stateClinic.val) {
        pushToState(chipData, stateClinic.title);
      }

      if (privateClinic.val) {
        pushToState(chipData, privateClinic.title);
      }

      if (doctorAcceptsDeclarations.val) {
        pushToState(chipData, doctorAcceptsDeclarations.title);
      }

      if (doctorWorksWithEHR.val) {
        pushToState(chipData, doctorWorksWithEHR.title);
      }

      if (onlineConsultation.val) {
        pushToState(chipData, onlineConsultation.title);
      }

      if (admissionOfChildren.val) {
        pushToState(chipData, admissionOfChildren.title);
      }

      if (admissionByNHSU.val) {
        pushToState(chipData, admissionByNHSU.title);
      }

      if (admissionByReferral.val) {
        pushToState(chipData, admissionByReferral.title);
      }

      if (female.val) {
        pushToState(chipData, female.title);
      }

      if (male.val) {
        pushToState(chipData, male.title);
      }

      if (evaluationNo.val) {
        pushToState(chipData, evaluationNo.title);
      }

      if (evaluationNormally.val) {
        pushToState(chipData, evaluationNormally.title);
      }

      if (evaluationGood.val) {
        pushToState(chipData, evaluationGood.title);
      }

      if (evaluationVeryGood.val) {
        pushToState(chipData, evaluationVeryGood.title);
      }

      if (rangeExperience.val) {
        const { val } = rangeExperience;
        pushToState(chipData, `Від ${val} ${yearsFormatter(val)}`);
      }

      if (qualification.val) {
        pushToState(chipData, qualification.val);
      }

      return state;
    });
  }, [selectedFilters]);
  // console.log("comp>>", isMounted);
  // console.log("comp>>", selectedFilters);

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
            sx={{ display: { xs: "inline-flex", md: "none" } }}
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
        sx={{ cursor: "pointer", display: { xs: "none", md: "block" } }}
        onClick={() => setChipData([])}
      >
        Скинути всі
      </Typography>
    </Stack>
  );
};
