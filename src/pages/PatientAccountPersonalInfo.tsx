import { Box, Skeleton, Typography } from "@mui/material";

import CustomizedPaper from "../components/Atomic/CustomizedPaper";

export function PatientAccountPersonalInfo() {
  return (
    <>
      <CustomizedPaper>
        <Typography variant="h5">
          {"Контактна інформація та авторизація"}
        </Typography>
        <Box sx={{ mt: "24px", display: "flex", gap: 2 }}>
          <Skeleton variant="rounded" sx={{ height: 100, width: 100 }} />
          <Skeleton variant="rounded" sx={{ height: 150, width: "100%" }} />
        </Box>
      </CustomizedPaper>

      <CustomizedPaper>
        <Typography variant="h5">{"Персональні дані"}</Typography>
        <Skeleton variant="text" sx={{ height: 150 }} />
        <Typography variant="h5">
          {"Документи, що засвідчують особу"}
        </Typography>
        <Skeleton variant="text" />
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
