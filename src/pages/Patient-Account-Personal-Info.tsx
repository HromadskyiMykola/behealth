import { FormEvent, FormEventHandler, useEffect, useState } from "react";
import { Skeleton, Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

import { TAuthFormValues, useApiService, useReactHookForm } from "~/common";

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
  const { patient, loading } = useApiService();
  const [patientPersonalData, setPatientPersonalData] = useState({
    contactInfo: null,
    identityDocuments: null,
    personalData: null,
  });
  const { contactInfo, identityDocuments, personalData } = patientPersonalData;

  const [isEditContactInfo, setIsEditContactInfo] = useState(false);
  const [isEditPersonalData, setIsEditPersonalData] = useState(false);
  const [isEditIdentityDocuments, setIsEditIdentityDocuments] = useState(false);

  const handleEditContactInfo = () => {
    setIsEditContactInfo(!isEditContactInfo);
  };

  const handleEditPersonalData = () => {
    setIsEditPersonalData(!isEditPersonalData);
  };

  const handleEditIdentityDocuments = () => {
    setIsEditIdentityDocuments(!isEditIdentityDocuments);
  };

  useEffect(() => {
    patient.personalInfo.get().then(setPatientPersonalData);
  }, []);

  // const { control, handleSubmit, formState, watch, reset } =
  //   useForm<TAuthFormValues>({ mode: "onChange", delayError: 1000 });

  // const { errors } = formState;

  const {
    handleSubmit,
    control,
    watch,
    isValid,
    errors,
    isSubmitSuccessful,
    handleSubmitPatientPersonalInfo,
  } = useReactHookForm();

 const onSubmit = (data: TAuthFormValues) => {
   

  //  setPatientPersonalData(data);

   handleSubmitPatientPersonalInfo(data);
 };



  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      {/* Contact info */}
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

        {loading && (
          <Stack direction="row" gap={2}>
            <Skeleton variant="rounded" sx={{ height: 168, width: 168 }} />
            <Skeleton variant="rounded" sx={{ height: 150, width: "100%" }} />
          </Stack>
        )}

        {!loading && (
          <Stack direction="row" gap={2}>
            <img src={avatar} alt="avatar" />

            {isEditContactInfo ? (
              <ContactInfoEdit
                handleEditContactInfo={handleEditContactInfo}
                contactInfo={contactInfo}
              />
            ) : (
              <ContactInfo contactInfo={contactInfo} />
            )}
          </Stack>
        )}
      </CustomizedPaper>

      <CustomizedPaper>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h5">Персональні дані</Typography>

          <ButtonEditIcon
            onClick={handleEditPersonalData}
            disabled={!patientPersonalData || isEditPersonalData}
          />
        </Stack>

        {/* Personal info */}
        {loading && <Skeleton variant="text" sx={{ height: 150 }} />}

        {!loading &&
          (isEditPersonalData ? (
            <PersonalDataEdit
              handleEditPersonalData={() => handleEditPersonalData()}
              control={control}
              errors={errors}
              isValid={isValid}
              personalData={personalData}
            />
          ) : (
            <PersonalData personalData={personalData} />
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

        {loading && <Skeleton variant="text" sx={{ height: 150 }} />}

        {!loading &&
          (isEditIdentityDocuments ? (
            <IdentityDocumentsEdit
              handleEditIdentityDocuments={handleEditIdentityDocuments}
              control={control}
              errors={errors}
              isValid={isValid}
              identityDocuments={identityDocuments}
            />
          ) : (
            <IdentityDocuments />
          ))}
      </CustomizedPaper>
    </form>
  );
}
