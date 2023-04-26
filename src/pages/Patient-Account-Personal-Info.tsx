import { useEffect, useState } from "react";
import { Skeleton, Stack, Typography } from "@mui/material";

import { TPatientPersonalData, useApiService } from "~/common";

import { ButtonEditIcon, CustomizedPaper } from "~/components/atomic";

import avatar from "~/assets/images/avatar.png";

import {
  ContactInfo,
  ContactInfoEdit,
  IdentityDocuments,
  IdentityDocumentsEdit,
  PersonalData,
  PersonalDataEdit,
} from "~/components/patient-Account-Personal-Info";

export function PatientAccountPersonalInfo() {
  const { patient } = useApiService();
  const [patientPersonalData, setPatientPersonalData] =
    useState<TPatientPersonalData | null>(null);

  const [isEditContactInfo, setIsEditContactInfo] = useState(false);
  const [isEditPersonalData, setIsEditPersonalData] = useState(false);
  const [isEditIdentityDocuments, setIsEditIdentityDocuments] = useState(false);

  const openCloseEditContactInfo = () => {
    setIsEditContactInfo(!isEditContactInfo);
  };
  const openCloseEditPersonalData = () => {
    setIsEditPersonalData(!isEditPersonalData);
  };
  const openCloseEditIdentityDocuments = () => {
    setIsEditIdentityDocuments(!isEditIdentityDocuments);
  };

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

  const props = {
    onSubmitPersonalData,
    patientPersonalData,
  };

  return (
    <>
      {/* Contact info */}
      <CustomizedPaper>
        <Stack direction="row" justifyContent="space-between" mb="24px">
          <Typography variant="h5">
            Контактна інформація та авторизація
          </Typography>

          <ButtonEditIcon
            onClick={openCloseEditContactInfo}
            disabled={isEditContactInfo}
          />
        </Stack>

        {!patientPersonalData && (
          <Stack direction="row" gap={2}>
            <Skeleton variant="rounded" sx={{ height: 168, width: 168 }} />
            <Skeleton variant="rounded" sx={{ height: 150, width: "100%" }} />
          </Stack>
        )}

        {patientPersonalData && (
          <Stack direction="row" gap={2}>
            <img src={avatar} alt="avatar" width="168px" height="168px" />

            {isEditContactInfo ? (
              <ContactInfoEdit
                openCloseEditContactInfo={openCloseEditContactInfo}
                {...props}
              />
            ) : (
              <ContactInfo patientPersonalData={patientPersonalData} />
            )}
          </Stack>
        )}
      </CustomizedPaper>

      <CustomizedPaper>
        <Stack mb="14px" direction="row" justifyContent="space-between">
          <Typography variant="h5">Персональні дані</Typography>

          <ButtonEditIcon
            onClick={openCloseEditPersonalData}
            disabled={isEditPersonalData}
          />
        </Stack>

        {/* Personal info */}
        {!patientPersonalData && (
          <Skeleton variant="text" sx={{ height: 150 }} />
        )}

        {patientPersonalData &&
          (isEditPersonalData ? (
            <PersonalDataEdit
              openCloseEditPersonalData={openCloseEditPersonalData}
              {...props}
            />
          ) : (
            <PersonalData patientPersonalData={patientPersonalData} />
          ))}

        <Stack
          direction="row"
          justifyContent="space-between"
          mt="24px"
          mb="14px"
        >
          <Typography variant="h5">Документи, що засвідчують особу</Typography>

          <ButtonEditIcon
            onClick={openCloseEditIdentityDocuments}
            disabled={isEditIdentityDocuments}
          />
        </Stack>

        {/* Documents info */}
        {!patientPersonalData && (
          <Skeleton variant="text" sx={{ height: 150 }} />
        )}

        {patientPersonalData &&
          (isEditIdentityDocuments ? (
            <IdentityDocumentsEdit
              openCloseEditIdentityDocuments={openCloseEditIdentityDocuments}
              {...props}
            />
          ) : (
            <IdentityDocuments patientPersonalData={patientPersonalData} />
          ))}
      </CustomizedPaper>
    </>
  );
}
