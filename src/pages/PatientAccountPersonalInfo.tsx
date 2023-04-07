import {
  Button,
  Skeleton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";

import { CustomizedPaper } from "~atomic/index";
import { AlertTriangleIcon, EditIcon } from "lucide-react";

import avatar from "~/assets/images/avatar.png";

const EditButton = () => (
  <Button startIcon={<EditIcon style={{ flexShrink: 0 }} size={22} />}>
    {"Змінити"}
  </Button>
);

export function PatientAccountPersonalInfo() {
  return (
    <>
      <CustomizedPaper>
        <Stack direction="row" justifyContent="space-between" mb="24px">
          <Typography variant="h5">
            {"Контактна інформація та авторизація"}
          </Typography>
          <EditButton />
        </Stack>

        {/* <Stack direction="row" gap={2}>
          <Skeleton variant="rounded" sx={{ height: 168, width: 168 }} />
          <Skeleton variant="rounded" sx={{ height: 150, width: "100%" }} />
        </Stack> */}

        <Stack direction="row">
          <img src={avatar} alt="avatar" />

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
        </Stack>
      </CustomizedPaper>

      {/* ///       Персональні дані          /// */}
      <CustomizedPaper>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h5">{"Персональні дані"}</Typography>

          <EditButton />
        </Stack>

        {/* <Skeleton variant="text" sx={{ height: 150 }} /> */}

        <TableContainer
          sx={{
            display: "inline-block",
            width: "auto",
            "& td": { borderBottom: "none" },
          }}
        >
          <Table>
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

        <Stack
          direction="row"
          justifyContent="space-between"
          mt="24px"
          mb="24px"
        >
          <Typography variant="h5">
            {"Документи, що засвідчують особу"}
          </Typography>
          <EditButton />
        </Stack>

        <Typography variant="body2">
          Документи, що засвідчують особу не додані.
        </Typography>
        {/* <Skeleton variant="text" /> */}
      </CustomizedPaper>
    </>
  );
}

//  {
//    {isRegisterMode && ( // NAME
//       <Controller
//         name="firstName"
//         control={control}
//         defaultValue=""
//         rules={validationRules.firstName}
//         render={({ field }) => (
//           <CustomizedInput
//             autoFocus={isRegisterMode}
//             label="Ім’я"
//             placeholder="Олександр"
//             {...field}
//             error={!!errors.firstName}
//             helperText={errors.firstName?.message || " "}
//           />
//         )}
//       />
//     )}
//  }

//       <Controller
// name="lastName"
// control={control}
// defaultValue=""
// rules={{ required: true, maxLength: 100 }}
// render={({ field }) => (
//   <TextField
//   label="Last name"
//   {...field}
//   error={!!errors.lastName}
//   helperText={errors.lastName ? "This field is required" : ""}
//   />
//   )}
// />

//       <Controller
// name="mobileNumber"
// control={control}
// defaultValue=""
// rules={{ required: true, minLength: 6, maxLength: 12 }}
// render={({ field }) => (
//   <TextField
//   label="Mobile number"
//   {...field}
//   error={!!errors.mobileNumber}
//   helperText={
//     errors.mobileNumber ? "Please enter a valid mobile number" : ""
//   }
//   />
//   )}
// />
