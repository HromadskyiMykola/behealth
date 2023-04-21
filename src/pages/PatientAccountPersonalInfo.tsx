import { useEffect, useState } from "react";
import { Skeleton, Stack, Typography } from "@mui/material";
import { ButtonEditIcon, CustomizedPaper } from "~/components/atomic/index";

import { useApiService } from "~/common";

import avatar from "~/assets/images/avatar.png";
import {
  ContactInfo,
  ContactInfoEdit,
  IdentityDocuments,
  IdentityDocumentsEdit,
  PersonalData,
  PersonalDataEdit,
} from "~/components/patientAccountPersonalInfo";

export function PatientAccountPersonalInfo() {
  const { patient } = useApiService();
  const [patientPersonalData, setPatientPersonalData] = useState(null);

  const [isEditContactInfo, setIsEditContactInfo] = useState(false);
  const [isEditPersonalData, setIsEditPersonalData] = useState(false);
  const [isEditIdentityDocuments, setIsEditIdentityDocuments] = useState(false);

  const handleEditContactInfo = () => setIsEditContactInfo(!isEditContactInfo);

  const handleEditPersonalData = () =>
    setIsEditPersonalData(!isEditPersonalData);

  const handleEditIdentityDocuments = () =>
    setIsEditIdentityDocuments(!isEditIdentityDocuments);

  useEffect(() => {
    patient.personalInfo.get().then(setPatientPersonalData);
  }, []);

  return (
    <>
      <CustomizedPaper>
        <Stack direction="row" justifyContent="space-between" mb="24px">
          <Typography variant="h5">
            Контактна інформація та авторизація
          </Typography>

          <ButtonEditIcon
            onClick={handleEditContactInfo}
            disabled={!patientPersonalData || isEditContactInfo}
          />
        </Stack>

        {/* Contact info */}
        {!patientPersonalData && (
          <Stack direction="row" gap={2}>
            <Skeleton variant="rounded" sx={{ height: 168, width: 168 }} />
            <Skeleton variant="rounded" sx={{ height: 150, width: "100%" }} />
          </Stack>
        )}

        {patientPersonalData && (
          <Stack direction="row" gap={2}>
            <img src={avatar} alt="avatar" />

            {isEditContactInfo ? (
              <ContactInfoEdit handleEditContactInfo={handleEditContactInfo} />
            ) : (
              <ContactInfo />
            )}
          </Stack>
        )}
      </CustomizedPaper>

      {/* Personal info */}
      <CustomizedPaper>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h5">Персональні дані</Typography>

          <ButtonEditIcon
            onClick={handleEditPersonalData}
            disabled={!patientPersonalData || isEditPersonalData}
          />
        </Stack>

        {!patientPersonalData && (
          <Skeleton variant="text" sx={{ height: 150 }} />
        )}

        {patientPersonalData &&
          (isEditPersonalData ? (
            <PersonalDataEdit handleEditPersonalData={handleEditPersonalData} />
          ) : (
            <PersonalData />
          ))}

        <Stack
          direction="row"
          justifyContent="space-between"
          mt="24px"
          // mb="24px"
        >
          <Typography variant="h5">Документи, що засвідчують особу</Typography>

          <ButtonEditIcon
            onClick={handleEditIdentityDocuments}
            disabled={!patientPersonalData || isEditIdentityDocuments}
          />
        </Stack>

        {/* Documents info */}

        {!patientPersonalData && (
          <Skeleton variant="text" sx={{ height: 150 }} />
        )}

        {patientPersonalData &&
          (isEditIdentityDocuments ? (
            <IdentityDocumentsEdit handleEditIdentityDocuments={handleEditIdentityDocuments} />
          ) : (
            <IdentityDocuments />
          ))}
      </CustomizedPaper>
    </>
  );
}
