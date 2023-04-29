import { TOnSubmitAdditionalData, usePatientFetchingData } from "~/common";

import { CustomizedPaper } from "~/components/atomic";
import {
  PatientAdditionalDataAddress,
  PatientAdditionalDataPrefCat,
  PatientAdditionalDataWorkPlace,
} from "~/components/Patient-additional-data";
import { Skeleton, Stack } from "@mui/material";

export function PatientAccountAdditionalData() {
  const { patientAdditionalData, onSubmitAdditionalData } =
    usePatientFetchingData();

  return (
    <CustomizedPaper>
      <Stack gap="48px">
        {!patientAdditionalData && (
          <Stack gap={2}>
            <Skeleton variant="text" sx={{ height: 150 }} />
            <Skeleton variant="rounded" sx={{ height: 150 }} />
          </Stack>
        )}

        {patientAdditionalData && (
          <>
            <PatientAdditionalDataAddress
              patientAdditionalData={patientAdditionalData}
              onSubmitAdditionalData={
                onSubmitAdditionalData as TOnSubmitAdditionalData
              }
            />

            <PatientAdditionalDataWorkPlace
              patientAdditionalData={patientAdditionalData}
              onSubmitAdditionalData={
                onSubmitAdditionalData as TOnSubmitAdditionalData
              }
            />

            <PatientAdditionalDataPrefCat
              patientAdditionalData={patientAdditionalData}
              onSubmitAdditionalData={
                onSubmitAdditionalData as TOnSubmitAdditionalData
              }
            />
          </>
        )}
      </Stack>
    </CustomizedPaper>
  );
}
