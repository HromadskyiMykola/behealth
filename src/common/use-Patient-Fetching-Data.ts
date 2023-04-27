import { useEffect, useState } from "react";

import {
  TPatientAdditionalData,
  TPatientPersonalData,
  useApiService,
} from "~/common";
import { useModalState } from "~/providers";

export function usePatientFetchingData() {
  const { patient, apiError } = useApiService();
  const { setSimpleModalMessage } = useModalState();

  const [patientPersonalData, setPatientPersonalData] =
    useState<TPatientPersonalData | null>(null);

  const [patientAdditionalData, setPatientAdditionalData] =
    useState<TPatientAdditionalData | null>(null);

  useEffect(() => {
    patient.personalInfo.get().then(setPatientPersonalData);
    patient.additionalInfo.get().then(setPatientAdditionalData);
  }, []);

  useEffect(() => {
    apiError && setSimpleModalMessage(apiError);
  }, [apiError]);

  const onSubmitPersonalData = async (
    data: TPatientPersonalData,
    type: "patient_info" | "document"
  ) => {
    await patient.personalInfo.update({ ...data, type });

    setPatientPersonalData({ ...patientPersonalData, ...data });
  };

  const onSubmitAdditionalData = async (
    data: TPatientAdditionalData,
    isNeedCreateData?: boolean
  ) => {
    const {
      type,
      settlementType,
      settlementAndStr,
      houseNum,
      apartmentNum,
      employmentStatus,
      workplace,
      jobTitle,
    } = data;

    const selectedData =
      type === "address"
        ? { type, settlementType, settlementAndStr, houseNum, apartmentNum }
        : { type, employmentStatus, workplace, jobTitle };

    isNeedCreateData
      ? await patient.additionalInfo.create(selectedData)
      : await patient.additionalInfo.update(selectedData);

    setPatientAdditionalData({ ...patientAdditionalData, ...data });
  };

  return {
    patientPersonalData,
    patientAdditionalData,
    setPatientPersonalData,
    setPatientAdditionalData,
    onSubmitPersonalData,
    onSubmitAdditionalData,
  };
}
