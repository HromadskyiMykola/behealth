import { useContext, useState } from "react";

import { Button, Dialog, Grid, Typography } from "@mui/material";

import {
  CustomizedInput,
  DatePickerInput,
  InputMobileNumber,
} from "~/components/atomic/index";

export function PersonalIdentification() {
  //   const { openThanksModal, handleThanksModalClose } = useContext(ModalContext);
  const [openIdentificationModal, setOpenIdentificationModal] = useState(false);

  const handleIdentificationModalOpen = () => setOpenIdentificationModal(true);
  const handleIdentificationModalClose = () =>
    setOpenIdentificationModal(false);

  return (
    <Dialog
      open={openIdentificationModal}
      // fullWidth
      maxWidth="md"
      sx={{
        //  maxWidth: "712px",
        "& .MuiPaper-root": {
          borderRadius:
            // mobileDevice ? 0 :
            "12px",
        },
      }}
      onClose={handleIdentificationModalClose}
    >
      <Grid
        component="form"
        container
        p="32px"
        gap="24px"
        direction="column"
        sx={{ maxWidth: "712px" }}
      >
        <Grid item textAlign="center">
          <Typography variant="h5">
            Ідентифікація особи та реєстрація
          </Typography>
          <Typography variant="body2" sx={{ mt: "16px", color: "#8E918F" }}>
            Заповніть необхідні поля, аби завершити реєстрацію. Нам потрібна ця
            інформація, аби забезпечити зручність для пацієнтів та медичних
            працівників."
          </Typography>
        </Grid>

        <Grid container rowSpacing="16px" columnSpacing="24px">
          <Grid item xs={12} sm={6}>
            <CustomizedInput fullWidth label="Прізвище*" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomizedInput fullWidth label="Імʼя*" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomizedInput fullWidth label="По батькові" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <DatePickerInput fullWidth label="Дата народження*" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputMobileNumber fullWidth label="Номер телефону*" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomizedInput fullWidth label="Електронна пошта*" />
          </Grid>
        </Grid>

        <Button
          variant="text"
          sx={{ pl: "16px", alignSelf: "flex-start" }}
          onClick={() => {}}
        >
          Чому це важливо?
        </Button>

        <Button
          // disabled={!formState.isValid}
          type="submit"
          variant="contained"
          // sx={{ backgroundColor: primaryColor }}
        >
          Завершити реєстрацію
        </Button>
      </Grid>
    </Dialog>
  );
}
