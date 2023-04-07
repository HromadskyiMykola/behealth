import {
  Button,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { CustomizedInput } from "../atomic";
import { TAuthFormValues, validationRules } from "~/common";

import { AlertTriangleIcon } from "lucide-react";

export const ContactInfo = () => (
  <TableContainer
    sx={{
      width: "auto",
      "& td": { borderBottom: "none" },
    }}
  >
    <Table>
      <TableBody>
        <TableRow>
          <TableCell>
            <Stack direction="row" gap={2}>
              <AlertTriangleIcon color="red" />
              <Typography variant="caption" color="red">
                Медкарта не підключена до eHealth
              </Typography>
            </Stack>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>

    <Table>
      <TableBody>
        <TableRow>
          <TableCell>
            <Typography variant="body2">Номер телефону</Typography>
          </TableCell>

          <TableCell>
            <Typography variant="body2">+38 (093) 23 324 23</Typography>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell>
            <Typography variant="body2">Електронна пошта</Typography>
          </TableCell>

          <TableCell>
            <Typography variant="body2">taras_shv@gmail.com</Typography>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
);

export const ContactInfoEdit = () => {
  const { control, handleSubmit, formState, watch, reset } =
    useForm<TAuthFormValues>({ mode: "onChange", delayError: 1000 });

  const { errors } = formState;

  const onSubmit = (data: TAuthFormValues) => {
    console.log(data);
    console.log(formState);
  };

  return (
    <Stack>
      <Stack
        component="form"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        spacing={{ md: 0, laptop: 1 }}
        direction={{ md: "column", laptop: "row" }}
        justifyContent="space-between"
        alignItems="stretch"
      >
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={validationRules.email}
          render={({ field }) => (
            <CustomizedInput
              label="Електронна пошта*"
              placeholder="Введіть e-mail"
              {...field}
              error={!!errors.email}
              helperText={errors.email?.message || " "}
            />
          )}
        />

        <Controller
          name="mobileNumber"
          control={control}
          defaultValue=""
          rules={validationRules.mobileNumber}
          render={({ field }) => (
            <CustomizedInput
              label="Номер телефону*"
              placeholder="+38 (XXX) XX XXX XX"
              {...field}
              error={!!errors.newPassword}
              helperText={errors.newPassword?.message || " "}
            />
          )}
        />
      </Stack>

      <Stack direction="row" spacing={2}>
        <Button
          variant="text"
          onClick={() => {
            reset();
            // setMode("RECOVERY");
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
