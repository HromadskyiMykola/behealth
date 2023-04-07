import { useState } from "react";
import { Skeleton, Stack, Typography } from "@mui/material";

import { ButtonEditIcon, CustomizedPaper } from "~atomic/index";

import avatar from "~/assets/images/avatar.png";
import {
  ContactInfo,
  ContactInfoEdit,
  PersonalData,
  PersonalDataEdit,
} from "~/components/patientAccountPersonalInfo";

export function PatientAccountPersonalInfo() {
  const [isEditContactInfo, setIsEditContactInfo] = useState(true);
  const [isEditPersonalData, setIsEditPersonalData] = useState(true);
  const [isEditIdentityDocs, setIsEditIdentityDocs] = useState(true);

  const handleEditContactInfo = () => setIsEditContactInfo(!isEditContactInfo);

  const handleEditPersonalData = () =>
    setIsEditPersonalData(!isEditPersonalData);

  const handleEditIdentityDocs = () =>
    setIsEditIdentityDocs(!isEditIdentityDocs);

  return (
    <>
      <CustomizedPaper>
        <Stack direction="row" justifyContent="space-between" mb="24px">
          <Typography variant="h5">
            Контактна інформація та авторизація
          </Typography>

          <ButtonEditIcon onClick={handleEditContactInfo} />
        </Stack>

        {/* <Stack direction="row" gap={2}>
          <Skeleton variant="rounded" sx={{ height: 168, width: 168 }} />
          <Skeleton variant="rounded" sx={{ height: 150, width: "100%" }} />
        </Stack> */}

        <Stack direction="row" gap={2}>
          <img src={avatar} alt="avatar" />

          {isEditContactInfo ? <ContactInfoEdit /> : <ContactInfo />}
        </Stack>
      </CustomizedPaper>

      {/* ///       Персональні дані          /// */}
      <CustomizedPaper>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h5">Персональні дані</Typography>

          <ButtonEditIcon onClick={handleEditPersonalData} />
        </Stack>

        {/* <Skeleton variant="text" sx={{ height: 150 }} /> */}

        {isEditPersonalData ? <PersonalDataEdit /> : <PersonalData />}

        <Stack
          direction="row"
          justifyContent="space-between"
          mt="24px"
          mb="24px"
        >
          <Typography variant="h5">Документи, що засвідчують особу</Typography>

          <ButtonEditIcon onClick={handleEditIdentityDocs} />
        </Stack>

        <Typography variant="body2" pl="16px">
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
