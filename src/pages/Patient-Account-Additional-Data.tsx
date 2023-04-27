import { TOnSubmitAdditionalData, usePatientFetchingData } from "~/common";

import { CustomizedPaper } from "~/components/atomic";
import AdditionDataContainer from "~/components/tads.additionalData/Addition-data-container";
import { PatientAdditionalDataAddress } from "~/components/Patient-additional-data";
import { Skeleton, Stack } from "@mui/material";

export function PatientAccountAdditionalData() {
  const { patientAdditionalData, onSubmitAdditionalData } =
    usePatientFetchingData();

  return (
    <CustomizedPaper>
      {/*<AdditionDataContainer patientAdditionData={patientAdditionData} />*/}

      {!patientAdditionalData && (
        <Stack gap={2}>
          <Skeleton variant="text" sx={{ height: 150 }} />
          <Skeleton variant="rounded" sx={{ height: 150 }} />
        </Stack>
      )}

      {patientAdditionalData && (
        <PatientAdditionalDataAddress
          patientAdditionalData={patientAdditionalData}
          onSubmitAdditionalData={
            onSubmitAdditionalData as TOnSubmitAdditionalData
          }
        />
      )}
    </CustomizedPaper>
  );
}
