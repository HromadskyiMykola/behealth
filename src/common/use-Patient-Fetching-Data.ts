import { useEffect, useState } from "react";

import {
  TPatientAdditionalData,
  TPatientPersonalData,
  useApiService,
} from "~/common";
import { useModalState } from "~/providers";

export function usePatientFetchingData() {
  const { patient, apiError, loading } = useApiService();
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
    action: { isNeedCreateData?: boolean; isNeedDeleteData?: boolean }
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

    if (action.isNeedDeleteData) {
      await patient.additionalInfo.delete({ type });
      setPatientAdditionalData({ ...patientAdditionalData, ...selectedData });
      return;
    }

    action.isNeedCreateData
      ? await patient.additionalInfo.create(selectedData)
      : await patient.additionalInfo.update(selectedData);

    setPatientAdditionalData(
      action.isNeedDeleteData ? null : { ...patientAdditionalData, ...data }
    );
  };

  return {
    loading,
    patientPersonalData,
    patientAdditionalData,
    setPatientPersonalData,
    setPatientAdditionalData,
    onSubmitPersonalData,
    onSubmitAdditionalData,
  };
}
