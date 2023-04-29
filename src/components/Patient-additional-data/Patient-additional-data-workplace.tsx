import { useState } from "react";
import { useTheme, Typography, Stack } from "@mui/material";
import { Plus } from "lucide-react";

import { IOnSubmitPatientData, TPatientAdditionalData } from "~/common";
import { WorkPlaceForm, WorkplaceInfo } from ".";
import { ButtonEditIcon, ButtonM } from "../atomic";

interface Props {
  onSubmitAdditionalData: IOnSubmitPatientData;
  patientAdditionalData: TPatientAdditionalData | null;
}

export const PatientAdditionalDataWorkPlace = ({
  patientAdditionalData,
  onSubmitAdditionalData,
}: Props) => {
  const { custom } = useTheme().palette;
  const [isViewEdit, setIsViewEdit] = useState(false);

  const viewEditButton = () => {
    setIsViewEdit(true);
  };
  const closeEditFrom = () => {
    setIsViewEdit(false);
  };

  return (
    <Stack spacing={2}>
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h5">Місце роботи</Typography>

        {patientAdditionalData?.settlementType ? (
          <ButtonEditIcon onClick={viewEditButton} disabled={isViewEdit} />
        ) : (
          <ButtonM
            startIcon={<Plus size="24px" />}
            onClick={viewEditButton}
            disabled={isViewEdit}
          >
            Додати
          </ButtonM>
        )}
      </Stack>

      {!patientAdditionalData?.employmentStatus &&
        (isViewEdit ? null : (
          <Typography variant="body2" color={custom.secondary80}>
            Ви ще не додали свої місця роботи.
          </Typography>
        ))}

      {patientAdditionalData?.employmentStatus && (
        <WorkplaceInfo
          patientAdditionalData={patientAdditionalData}
          onSubmitAdditionalData={onSubmitAdditionalData}
        />
      )}

      {isViewEdit && (
        <WorkPlaceForm
          closeEditFrom={closeEditFrom}
          patientAdditionalData={patientAdditionalData}
          onSubmitAdditionalData={onSubmitAdditionalData}
        />
      )}
    </Stack>
  );
};
