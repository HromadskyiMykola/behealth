import { useEffect, useState } from "react";

import { useApiService } from "~/common";

import { CustomizedPaper } from "~/components/atomic";
import AdditionDataContainer from "~/components/tads.additionalData/Addition-data-container";

export function PatientAccountAdditionalData() {
  const { patient } = useApiService();
  const [patientAdditionData, setPatientAdditionData] = useState(null);

  useEffect(() => {
    patient.additionalInfo.get().then(setPatientAdditionData);
    console.log(patientAdditionData);
  }, []);



  return (
    <CustomizedPaper>
      <AdditionDataContainer patientAdditionData={patientAdditionData} />
    </CustomizedPaper>
  );
}
