import { useEffect, useState } from "react";

import { useApiService } from "~/common";

import { CustomizedPaper } from "~/components/atomic";
import AdditionDataContainer from "~/components/tads.additionalData/Addition-data-container";
import PatientAdditionalDataAddress from "~/components/Patient-additional-data/Patient-additional-data-address";

export function PatientAccountAdditionalData() {
  const { patient } = useApiService();
  const [patientAdditionData, setPatientAdditionData] = useState(null);
  const [isChangeAddress, setIsChangeAddress] = useState(0);

  useEffect(() => {
    patient.additionalInfo.get().then(setPatientAdditionData);
    console.log(patientAdditionData);
  }, [isChangeAddress]);

  const changeAddress = () => {
    setIsChangeAddress(isChangeAddress + 1);
  };
  return (
    <CustomizedPaper>
      {/*<AdditionDataContainer patientAdditionData={patientAdditionData} />*/}
      <PatientAdditionalDataAddress
        patientAdditionData={patientAdditionData}
        isChangeAddress={changeAddress}
      />
    </CustomizedPaper>
  );
}
