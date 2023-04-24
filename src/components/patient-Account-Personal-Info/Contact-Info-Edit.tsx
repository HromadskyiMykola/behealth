import { Button, Stack } from "@mui/material";
import { useReactHookForm } from "~/common";

import { RHFEmail, RHFMobileNumber } from "../ReactHookFormFields";
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
    handleSubmitPatientPersonalInfo,
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
      onSubmit={handleSubmitPatientPersonalInfo}
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

        <RHFMobileNumber
          control={control}
          errors={errors}
          // defaultValue={contactInfo?.mobileNumber}
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
