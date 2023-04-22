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
import { CustomizedInput, SelectWithPlaceholder } from "../atomic";
import { TAuthFormValues } from "~/common";
import { RHFBirthDate, RHFMiddleName, RHFTin } from "../ReactHookFormFields";

type IdentityDocumentsEditProps = {
  handleEditIdentityDocuments: () => void;
};

export const IdentityDocuments = () => (
  <TableContainer
    sx={{
      display: "inline-block",
      width: "auto",
      "& td": { borderBottom: "none" },
    }}
  >
    <Typography
      variant="body2"
      pl="16px"
      mb={2} // temp
    >
      Документи, що засвідчують особу не додані.
    </Typography>

    <Table size="small">
      <TableBody>
        <TableRow>
          <TableCell>
            <Typography variant="body2">Тип документа</Typography>
          </TableCell>

          <TableCell>
            <Typography variant="body2">Паспорт</Typography>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell>
            <Typography variant="body2">Серія</Typography>
          </TableCell>

          <TableCell>
            <Typography variant="body2">KRJKD</Typography>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell>
            <Typography variant="body2">Ким видано</Typography>
          </TableCell>

          <TableCell>
            <Typography variant="body2">4 цифри на задній стороні</Typography>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell>
            <Typography variant="body2">Дата видачі</Typography>
          </TableCell>

          <TableCell>
            <Typography variant="body2">не вказано</Typography>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell>
            <Typography variant="body2">Номер</Typography>
          </TableCell>

          <TableCell>
            <Typography variant="body2">не вказано</Typography>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
);

export const IdentityDocumentsEdit = ({
  handleEditIdentityDocuments,
}: IdentityDocumentsEditProps) => {
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
            name="docType"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <SelectWithPlaceholder
                fullWidth
                placeholder="Оберіть тип"
                label="Тип документа*"
                {...field}
                error={!!errors.lastName}
                helperText={errors.lastName?.message || " "}
              >
                <MenuItem value="var 1">Картка ID</MenuItem>
                <MenuItem value="var 2">Паспорт громадянина України</MenuItem>
                <MenuItem value="var 3">Водійське посвідчення</MenuItem>
              </SelectWithPlaceholder>
            )}
          />
        </Grid>

        <Grid item laptop={8}>
          <Controller
            name="docSerialNum"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <CustomizedInput
                autoFocus
                label="Серія*"
                placeholder="Введіть серійний номер документу"
                {...field}
                error={!!errors.firstName}
                helperText={errors.firstName?.message || " "}
              />
            )}
          />
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
      </Grid>

      <Stack direction="row" spacing={2}>
        <Button
          variant="text"
          onClick={() => {
            reset();
            handleEditIdentityDocuments();
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
