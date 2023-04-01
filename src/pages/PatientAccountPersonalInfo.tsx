import { Box, Button, Skeleton, Stack, Typography } from "@mui/material";

import CustomizedPaper from "../components/Atomic/CustomizedPaper";
import { EditIcon } from "../assets/CustomIcon";

const EditButton = () => <Button startIcon={<EditIcon />}>{"Змінити"}</Button>;

function PatientAccountPersonalInfo() {
  return (
    <>
      <CustomizedPaper>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h5">
            {"Контактна інформація та авторизація"}
          </Typography>
          <EditButton />
        </Stack>

        <Box sx={{ mt: "24px", display: "flex", gap: 2 }}>
          <Skeleton variant="rounded" sx={{ height: 100, width: 100 }} />
          <Skeleton variant="rounded" sx={{ height: 150, width: "100%" }} />
        </Box>
      </CustomizedPaper>

      <CustomizedPaper>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h5">{"Персональні дані"}</Typography>

          <EditButton />
        </Stack>

        <Skeleton variant="text" sx={{ height: 150 }} />
        
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h5">
            {"Документи, що засвідчують особу"}
          </Typography>
          <EditButton />
        </Stack>

        <Skeleton variant="text" />
      </CustomizedPaper>
    </>
  );
}

export default PatientAccountPersonalInfo;

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
