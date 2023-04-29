import { Button, Stack } from "@mui/material";
import {
  TPatientPersonalData,
  IOnSubmitPatientData,
  useReactHookForm,
} from "~/common";

import { RHFEmail, RHFmobileNum } from "../React-Hook-Form-Fields";
import { useEffect } from "react";

type ContactInfoEditProps = {
  onSubmitPersonalData: IOnSubmitPatientData;
  openCloseEditContactInfo: () => void;
  patientPersonalData: TPatientPersonalData | null;
};

export const ContactInfoEdit = ({
  onSubmitPersonalData,
  openCloseEditContactInfo,
  patientPersonalData,
}: ContactInfoEditProps) => {
  const { control, handleSubmit, isValid, errors, isSubmitSuccessful } =
    useReactHookForm();

  useEffect(() => {
    isSubmitSuccessful && openCloseEditContactInfo();
  }, [isSubmitSuccessful]);

  return (
    <form
      noValidate
      onSubmit={handleSubmit((data: TPatientPersonalData) => {
        onSubmitPersonalData({ ...data, type: "patient_info" });
      })}
    >
      <Stack
        mb="16px"
        spacing={{ md: 0, laptop: 3 }}
        direction={{ md: "column", laptop: "row" }}
      >
        <RHFEmail
          control={control}
          errors={errors}
          defaultValue={patientPersonalData?.email}
          autoFocus
        />

        <RHFmobileNum
          control={control}
          errors={errors}
          // defaultValue={contactInfo?.mobileNum}
        />
      </Stack>

      <Stack direction="row" spacing={2}>
        <Button variant="text" onClick={openCloseEditContactInfo}>
          Відмінити
        </Button>

        <Button disabled={!isValid} variant="contained" type="submit">
          Зберегти
        </Button>
      </Stack>
    </form>
  );
};
