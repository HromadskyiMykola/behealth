import { useEffect, useState } from "react";

import { TPatientPersonalData, useApiService } from "~/common";
import { useModalState } from "~/providers";

export function usePatientFetchingData() {
  const { patient, apiError } = useApiService();
  const { setSimpleModalMessage } = useModalState();
  const [patientPersonalData, setPatientPersonalData] =
    useState<TPatientPersonalData | null>(null);

  useEffect(() => {
    apiError && setSimpleModalMessage(apiError);
  }, [apiError]);

  useEffect(() => {
    patient.personalInfo.get().then(setPatientPersonalData);
  }, []);

  const onSubmitPersonalData = async (
    data: TPatientPersonalData,
    type: "patient_info" | "document"
  ) => {
    await patient.personalInfo.update({ ...data, type });

    setPatientPersonalData({ ...patientPersonalData, ...data });
  };

  return { patientPersonalData, setPatientPersonalData, onSubmitPersonalData };
}
