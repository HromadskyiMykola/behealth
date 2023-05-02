import { useState } from "react";
import { Skeleton, Stack, Typography } from "@mui/material";

import { IOnSubmitPatientData } from "~/common";
import { usePatientFetchingData } from "~/hooks";

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
  const { patientPersonalData, onSubmitPersonalData } =
    usePatientFetchingData();

  const props = {
    onSubmitPersonalData: onSubmitPersonalData as IOnSubmitPatientData,
    patientPersonalData,
  };

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

  return (
    <>
      <CustomizedPaper>
        {/* Contact info */}
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
                patientPersonalData={patientPersonalData}
              />
            ) : (
              <ContactInfo patientPersonalData={patientPersonalData} />
            )}
          </Stack>
        )}
      </CustomizedPaper>

      <CustomizedPaper>
        {/* Personal info */}
        <Stack mb="14px" direction="row" justifyContent="space-between">
          <Typography variant="h5">Персональні дані</Typography>

          <ButtonEditIcon
            onClick={openCloseEditPersonalData}
            disabled={isEditPersonalData}
          />
        </Stack>

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

        {/* Documents info */}
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
