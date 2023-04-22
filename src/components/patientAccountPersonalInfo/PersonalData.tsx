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
import { SelectWithPlaceholder } from "../atomic";
import { TAuthFormValues } from "~/common";
import {
  RHFBirthDate,
  RHFFirstName,
  RHFLastName,
  RHFMiddleName,
  RHFTin,
} from "../ReactHookFormFields";

type PersonalDataEditProps = {
  handleEditPersonalData: () => void;
};

export const PersonalData = () => (
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

export const PersonalDataEdit = ({
  handleEditPersonalData,
}: PersonalDataEditProps) => {
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
          <RHFLastName control={control} errors={errors} autoFocus />
        </Grid>

        <Grid item laptop={4}>
          <RHFFirstName control={control} errors={errors} />
        </Grid>

        <Grid item laptop={4}>
          <RHFMiddleName control={control} errors={errors} />
        </Grid>

        <Grid item laptop={4}>
          <RHFBirthDate control={control} errors={errors} />
        </Grid>

        <Grid item laptop={4}>
          <RHFTin control={control} errors={errors} />
        </Grid>

        <Grid item laptop={4}>
          <Controller
            name="sex"
            control={control}
            // defaultValue={undefined}
            // TODO     rules={validationRules.middleName}
            render={({ field }) => (
              <SelectWithPlaceholder
                fullWidth
                label="Стать"
                placeholder="Стать"
                {...field}
                // TODO       error={!!errors.middleName}
                // helperText={errors.middleName?.message || " "}
              >
                <MenuItem value="male">Чоловік</MenuItem>
                <MenuItem value="female">Жінка</MenuItem>
              </SelectWithPlaceholder>
            )}
          />
        </Grid>
      </Grid>

      <Stack direction="row" spacing={2}>
        <Button
          variant="text"
          onClick={() => {
            reset();
            handleEditPersonalData();
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
