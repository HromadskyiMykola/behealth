import React, { FC } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  IconButton,
  MenuItem,
  Stack,
  Typography,
  Box,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { CustomizedInput, SelectWithPlaceholder } from "~/components/atomic";
import { CLINIC_APPOINTMENT_MODAL } from "~/components/clinic/clinic-card-constants";
import { Controller, useForm } from "react-hook-form";
import { TAuthFormValues } from "~/common";
import { ClinicAppointmentConditionModal } from "~/components/clinic/ClinicAppointmentConditionModal";

export interface ClinicAppointmentModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

export const ClinicAppointmentModal: FC<ClinicAppointmentModalProps> = ({
  isOpen,
  closeModal,
}) => {
  const { control, handleSubmit, formState, reset } = useForm<TAuthFormValues>({
    mode: "onChange",
    delayError: 1000,
  });

  const [isOpenCondition, setIsOpenCondition] = React.useState(false);

  const { errors } = formState;
  const { inputs } = CLINIC_APPOINTMENT_MODAL;

  const onSubmit = (data: TAuthFormValues) => {
    console.log(data);
    reset();
    closeModal();
  };

  return (
    <Dialog
      open={isOpen}
      onClose={closeModal}
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: "12px",
          boxShadow: "none",
        },
      }}
    >
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: "32px",
          gap: "16px",
          maxWidth: "376px",
          position: "relative",
        }}
      >
        <IconButton
          onClick={closeModal}
          sx={{ position: "absolute", top: "16px", right: "16px" }}
        >
          <CloseRoundedIcon sx={{ color: "#3ABD98" }} />
        </IconButton>
        <Typography sx={{ pb: "8px" }} variant="h5" color="#212121">
          Запис на прийом
        </Typography>
        <Stack
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            "& .MuiFormHelperText-root": {
              color: "#ba1a1a",
            },
          }}
        >
          <Box sx={{ pb: "9px" }}>
            <Controller
              name="chooseDoctor"
              control={control}
              rules={{
                required: "Будь ласка, виберіть спеціальність",
              }}
              defaultValue=""
              render={({ field }) => (
                <SelectWithPlaceholder
                  label="Спеціальність лікаря*"
                  placeholder="Обрати"
                  {...field}
                  error={!!errors?.chooseDoctor}
                  helperText={errors?.chooseDoctor?.message || " "}
                >
                  <MenuItem value="neurologist">Невролог</MenuItem>
                  <MenuItem value="urologist">Уролог</MenuItem>
                </SelectWithPlaceholder>
              )}
            />
          </Box>
          <Box
            sx={{
              borderTop: "1px solid #B2CCC0",
              pt: "24px",
            }}
          >
            {inputs.map(({ label, placeholder, id, name, rules }) => (
              <Controller
                key={id}
                name={name}
                control={control}
                defaultValue=""
                rules={rules}
                render={({ field }) => (
                  <CustomizedInput
                    label={label}
                    placeholder={placeholder}
                    {...field}
                    error={!!errors[name as keyof TAuthFormValues]}
                    helperText={
                      errors[name as keyof TAuthFormValues]?.message || " "
                    }
                  />
                )}
              />
            ))}
          </Box>
          <Button type="submit" variant="contained" sx={{ width: "100%" }}>
            <Typography variant="button">Залишити заявку</Typography>
          </Button>
        </Stack>
        <Typography
          sx={{ textAlign: "center", cursor: "pointer" }}
          variant="caption"
          color="#5C5F5D"
          onClick={() => setIsOpenCondition(true)}
        >
          Відправляючи заявку, ви приймаєте{" "}
          <Typography color="#3ABD98" component="span" variant="caption">
            умови обробки даних користувача
          </Typography>
          .
        </Typography>
      </DialogContent>
      <ClinicAppointmentConditionModal
        isOpenCondition={isOpenCondition}
        setIsOpenCondition={setIsOpenCondition}
      />
    </Dialog>
  );
};
