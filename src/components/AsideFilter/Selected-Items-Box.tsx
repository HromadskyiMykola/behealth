import { useEffect, useMemo, useState } from "react";
import { Chip, Stack, Typography, useTheme } from "@mui/material";

import { useDataContext } from "~/providers";
import { doctorFormatter, yearsFormatter } from "~/helper-function";
import { useDeviceType } from "~/hooks";
import { TFilterOptions } from "~/common";

type ChipData = {
  [key: string]: {
    key: keyof TFilterOptions;
    label: string;
  };
};

const updateState = (
  state: ChipData,
  key: keyof TFilterOptions,
  label: string
) => {
  state[key] = {
    key,
    label,
  };
};

const deleteStateKey = (state: ChipData, key: string) => {
  delete state[key];
};

export const SelectedItemsBox = () => {
  const { palette } = useTheme();
  const { isWidth600 } = useDeviceType();

  const {
    selectedFilters,
    filteredDoctors,
    handleFilterChange,
  } = useDataContext();

  const [isMounted, setIsMounted] = useState(false);

  const [chipData, setChipData] = useState<ChipData>({});

  const chipDataKeys = useMemo(() => Object.keys(chipData), [chipData]);

  const handleResetChipsData = () => {
    chipDataKeys.forEach((key) =>
      handleFilterChange(key as keyof TFilterOptions, false)
    );

    setChipData({});
    console.log("res");
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

    setChipData((state) => {
      admissionPaid.val
        ? updateState(state, "admissionPaid", `${rangePrice.val.join("-")}грн`)
        : deleteStateKey(state, "admissionPaid");

      stateClinic.val
        ? updateState(state, "stateClinic", stateClinic.title)
        : deleteStateKey(state, "stateClinic");

      privateClinic.val
        ? updateState(state, "privateClinic", privateClinic.title)
        : deleteStateKey(state, "privateClinic");

      doctorAcceptsDeclarations.val
        ? updateState(
            state,
            "doctorAcceptsDeclarations",
            doctorAcceptsDeclarations.title
          )
        : deleteStateKey(state, "doctorAcceptsDeclarations");

      doctorWorksWithEHR.val
        ? updateState(state, "doctorWorksWithEHR", doctorWorksWithEHR.title)
        : deleteStateKey(state, "doctorWorksWithEHR");

      onlineConsultation.val
        ? updateState(state, "onlineConsultation", onlineConsultation.title)
        : deleteStateKey(state, "onlineConsultation");

      admissionOfChildren.val
        ? updateState(state, "admissionOfChildren", admissionOfChildren.title)
        : deleteStateKey(state, "admissionOfChildren");

      admissionByNHSU.val
        ? updateState(state, "admissionByNHSU", admissionByNHSU.title)
        : deleteStateKey(state, "admissionByNHSU");

      admissionByReferral.val
        ? updateState(state, "admissionByReferral", admissionByReferral.title)
        : deleteStateKey(state, "admissionByReferral");

      female.val
        ? updateState(state, "female", female.title)
        : deleteStateKey(state, "female");

      male.val
        ? updateState(state, "male", male.title)
        : deleteStateKey(state, "male");

      evaluationNo.val
        ? updateState(state, "evaluationNo", evaluationNo.title)
        : deleteStateKey(state, "evaluationNo");

      evaluationNormally.val
        ? updateState(state, "evaluationNormally", evaluationNormally.title)
        : deleteStateKey(state, "evaluationNormally");

      evaluationGood.val
        ? updateState(state, "evaluationGood", evaluationGood.title)
        : deleteStateKey(state, "evaluationGood");

      evaluationVeryGood.val
        ? updateState(state, "evaluationVeryGood", evaluationVeryGood.title)
        : deleteStateKey(state, "evaluationVeryGood");

      if (rangeExperience.val) {
        const { val } = rangeExperience;
        updateState(
          state,
          "rangeExperience",
          `Від ${val} ${yearsFormatter(val)}`
        );
      } else {
        deleteStateKey(state, "rangeExperience");
      }

      qualification.val
        ? updateState(state, "qualification", qualification.val)
        : deleteStateKey(state, "qualification");

      return { ...state };
    });
  }, [selectedFilters]);

  return (
    <Stack gap="32px">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h5" color={palette.custom.primary20}>
          Обрано
        </Typography>

        <Typography variant="body2" color={palette.custom.primary20}>
          {filteredDoctors.length} {doctorFormatter(filteredDoctors.length)}
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
