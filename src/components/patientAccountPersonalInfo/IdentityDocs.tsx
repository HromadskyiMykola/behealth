import {
  Button,
  Grid,
  MenuItem,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import {
  CustomizedInput,
  DatePickerInput,
  SelectWithoutPlaceholder,
} from "../atomic";
import { TAuthFormValues, validationRules } from "~/common";
import { ArrowBigRight } from "lucide-react";

type IdentityDocsEditProps = {
  handleEditIdentityDocs: () => void;
};

export const IdentityDocs = () => (
  <TableContainer
    sx={{
      display: "inline-block",
      width: "auto",
      "& td": { borderBottom: "none" },
    }}
  >
    <Table size="small">
      <TableBody>
        <TableRow>
          <TableCell>
            <Typography variant="body2">ПІБ</Typography>
          </TableCell>

          <TableCell>
            <Typography variant="body2">Шевченко Тарас</Typography>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell>
            <Typography variant="body2">Дата народження</Typography>
          </TableCell>

          <TableCell>
            <Typography variant="body2">09.03.1814</Typography>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell>
            <Typography variant="body2">ІПН</Typography>
          </TableCell>

          <TableCell>
            <Typography variant="body2">не вказано</Typography>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell>
            <Typography variant="body2">Стать</Typography>
          </TableCell>

          <TableCell>
            <Typography variant="body2">не вказано</Typography>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
);

export const IdentityDocsEdit = ({
  handleEditIdentityDocs,
}: IdentityDocsEditProps) => {
  const { control, handleSubmit, formState, watch, reset } =
    useForm<TAuthFormValues>({ mode: "onChange", delayError: 1000 });

  const { errors } = formState;

  const onSubmit = (data: TAuthFormValues) => {
    console.log(data);
    console.log(formState);
  };

  return (
    <>
      <Grid
        container
        component="form"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        spacing={{ md: 0, laptop: 1 }}
        // direction={{ md: "column", laptop: "row" }}
        // justifyContent="space-between"
        // alignItems="stretch"
      >
        <Grid item laptop={4}>
          <Controller
            name="lastName"
            control={control}
            defaultValue=""
            rules={validationRules.lastName}
            render={({ field }) => (
              <SelectWithoutPlaceholder
                placeholder="тест"
                label="Прізвище*"
                {...field}
                error={!!errors.lastName}
                helperText={errors.lastName?.message || " "}
              >
                <MenuItem value="var 1">var 1</MenuItem>
                <MenuItem value="var 2">var 2</MenuItem>
                <MenuItem value="var 3">var 3</MenuItem>
              </SelectWithoutPlaceholder>
            )}
          />
        </Grid>

        <Grid item laptop={4}>
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            rules={validationRules.firstName}
            render={({ field }) => (
              <CustomizedInput
                autoFocus
                label="Ім’я*"
                placeholder="Олександр"
                {...field}
                error={!!errors.firstName}
                helperText={errors.firstName?.message || " "}
              />
            )}
          />
        </Grid>

        <Grid item laptop={4}>
          <Controller
            name="middleName"
            control={control}
            defaultValue=""
            rules={validationRules.middleName}
            render={({ field }) => (
              <CustomizedInput
                label="По батькові"
                {...field}
                error={!!errors.middleName}
                helperText={errors.middleName?.message || " "}
              />
            )}
          />
        </Grid>

        <Grid item laptop={4}>
          {/* <Controller
            name="birthDate"
            control={control}
            defaultValue=""
            // TODO    rules={validationRules.firstName}
            render={({ field }) => (
              <DatePickerInput
                label="Дата народження*"
                placeholder="Олександр"
                {...field}
                // TODO     error={!!errors.firstName}
                // helperText={errors.firstName?.message || " "}
              />
            )}
          /> */}
        </Grid>

        <Grid item laptop={4}>
          <Controller
            name="tin"
            control={control}
            defaultValue=""
            // TODO     rules={validationRules.middleName}
            render={({ field }) => (
              <CustomizedInput
                label="ІПН"
                {...field}
                // TODO       error={!!errors.middleName}
                helperText={errors.middleName?.message || " "}
              />
            )}
          />
        </Grid>

        <Grid item laptop={4}>
          TODO
        </Grid>
      </Grid>

      <Stack direction="row" spacing={2}>
        <Button
          variant="text"
          onClick={() => {
            reset();
            handleEditIdentityDocs();
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
    </>
  );
};
