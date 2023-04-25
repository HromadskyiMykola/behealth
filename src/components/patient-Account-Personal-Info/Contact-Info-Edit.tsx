import { Button, Stack } from "@mui/material";
import { useReactHookForm } from "~/common";

import { RHFEmail, RHFmobileNum } from "../React-Hook-Form-Fields";
import { useEffect } from "react";

type ContactInfoEditProps = {
  handleEditContactInfo: () => void;
  contactInfo: any;
};

export const ContactInfoEdit = ({
  handleEditContactInfo,
  contactInfo,
}: ContactInfoEditProps) => {
  const {
    control,
    handleSubmitPatientContactInfo,
    isValid,
    errors,
    isSubmitSuccessful,
  } = useReactHookForm();

  useEffect(
    () => () => {
      isSubmitSuccessful && handleEditContactInfo();
    },

    [isSubmitSuccessful]
  );

  return (
    <Stack
      component="form"
      noValidate
      onSubmit={handleSubmitPatientContactInfo}
    >
      <Stack
        spacing={{ md: 0, laptop: 1 }}
        direction={{ md: "column", laptop: "row" }}
        justifyContent="space-between"
        alignItems="stretch"
      >
        <RHFEmail
          control={control}
          errors={errors}
          defaultValue={contactInfo?.email}
          autoFocus
        />

        <RHFmobileNum
          control={control}
          errors={errors}
          // defaultValue={contactInfo?.mobileNum}
        />
      </Stack>

      <Stack direction="row" spacing={2}>
        <Button variant="text" onClick={() => handleEditContactInfo()}>
          Відмінити
        </Button>

        <Button disabled={!isValid} variant="contained" type="submit">
          Зберегти
        </Button>
      </Stack>
    </Stack>
  );
};
