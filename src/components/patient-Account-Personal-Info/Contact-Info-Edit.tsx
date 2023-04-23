import { Button, Stack } from "@mui/material";
import {  useReactHookForm } from "~/common";

import { RHFEmail, RHFMobileNumber } from "../ReactHookFormFields";

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
  formState,
  errors,
  } = useReactHookForm();
  
  console.log("compo", isValid);
  
  return (
    <Stack>
      <Stack
        component="form"
        noValidate
        spacing={{ md: 0, laptop: 1 }}
        direction={{ md: "column", laptop: "row" }}
        justifyContent="space-between"
        alignItems="stretch"
        onSubmit={handleSubmitPatientPersonalInfo}
      >
        <RHFEmail
          control={control}
          errors={errors}
          defaultValue=""
          // autoFocus
        />

        <RHFMobileNumber
          control={control}
          errors={errors}
          defaultValue={contactInfo?.mobileNumber}
        />
      </Stack>

      <Stack direction="row" spacing={2}>
        <Button
          variant="text"
          onClick={() => {
            handleEditContactInfo();
          }}
        >
          Відмінити
        </Button>

        <Button
          disabled={!formState.isValid}
          type="submit"
          variant="contained"
          // sx={{ backgroundColor: primaryColor }}
        >
          Зберегти
        </Button>
      </Stack>
    </Stack>
  );
};
