import { useForm } from "react-hook-form";
import { Button, Stack, Typography } from "@mui/material";

import { CustomizedPaper } from "~/components/atomic";
import { TAuthFormValues } from "~/common";
import {
  RHFPasswordConfirm,
  RHFPasswordCurrent,
  RHFPasswordNew,
} from "~/components/React-Hook-Form-Fields";

export const AccountPasswordNSecurity = () => {
  const { control, handleSubmit, formState, watch, reset } =
    useForm<TAuthFormValues>({ mode: "onChange", delayError: 1000 });

  const { errors } = formState;

  const onSubmit = (data: TAuthFormValues) => {
    console.log(data);
    console.log(formState);
  };

  return (
    <CustomizedPaper>
      <Stack sx={{ gap: "24px" }}>
        <Typography variant="h5">Зміна паролю</Typography>

        <Stack
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          spacing={{ md: 0, laptop: 1 }}
          direction={{ md: "column", laptop: "row" }}
          justifyContent="space-between"
          alignItems="stretch"
        >
          <RHFPasswordCurrent control={control} errors={errors} />

          <RHFPasswordNew control={control} errors={errors} />

          <RHFPasswordConfirm control={control} errors={errors} watch={watch} />
        </Stack>
      </Stack>

      <Stack direction="row" spacing={2}>
        <Button variant="text" onClick={() => reset()}>
          Забули пароль?
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
    </CustomizedPaper>
  );
};
