import React, { FC, useState } from "react";
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { Users } from "lucide-react";
import { ProfileAppointmentStatus } from "./ProfileAppointmentStatus";
import Button from "@mui/material/Button";
import { ProfileAppointmentListItemProps } from "../../common/types_and_interfaces";
import { ProfileAppointmentModal } from "./ProfileAppointmentModal";

export const ProfileAppointmentListItem: FC<
  ProfileAppointmentListItemProps
> = ({ card, bgcolor, border }: any) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [targetButtonText, setTargetButtonText] = useState<string | undefined>("");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setTargetButtonText(e.currentTarget.dataset.buttonName);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const { status, avatar, typeAppointment, date, name, speciality, info } =
    card;
  return (
    <Box
      sx={{
        p: "24px 32px",
        bgcolor: bgcolor,
        border: border,
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "28px",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", gap: "24px" }}>
          <Box>
            <img
              style={{ borderRadius: "10px" }}
              src={avatar}
              alt="Avatar"
              width={116}
              height={116}
            />
          </Box>
          <Box>
            <Typography
              variant="subtitle1"
              sx={{ mb: "8px", color: "#00382A" }}
            >
              {name}
            </Typography>
            <Typography variant="caption" sx={{ color: "#00382A" }}>
              {speciality}
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: "12px",
                alignItems: "center",
                mt: "28px",
              }}
            >
              <Box
                sx={{
                  bgcolor: "#F4FFF8",
                  border: "1px solid #CEE9DC",
                  borderRadius: "6px",
                  p: "5px",
                  display: "flex",
                }}
              >
                <Users color="#647C72" size="16px" />
              </Box>

              <Typography variant="caption" sx={{ color: "#647C72" }}>
                {typeAppointment}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <ProfileAppointmentStatus status={status} />
          <Typography variant="caption" sx={{ color: "#7D968B" }}>
            {date}
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          borderTop: "1px solid #B2CCC0",
          pt: "24px",
        }}
      >
        <Box sx={{ display: "flex", gap: "8px", flexDirection: "column" }}>
          {info.map(({ title, text }: any) => (
            <Box key={title}>
              <Typography
                variant="caption"
                sx={{
                  color: "#97B1A5",
                  width: "140px",
                  display: "inline-block",
                }}
              >
                {title}
              </Typography>
              <Typography variant="caption" sx={{ color: "#647C72" }}>
                {text}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box sx={{ display: "flex", alignItems: "end" }}>
          <Box sx={{ display: "flex", gap: "16px" }}>
            {status !== "Заплановано" ? (
              <Button
                data-button-name="Повторити запис"
                variant="text"
                onClick={handleClick}
              >
                <Typography variant="button">Повторити запис</Typography>
              </Button>
            ) : (
              <Button
                data-button-name="Скасувати"
                variant="text"
                onClick={handleClick}
              >
                <Typography variant="button" sx={{ color: "#DE3730" }}>
                  Скасувати
                </Typography>
              </Button>
            )}
            <Button variant="contained">
              <Typography variant="button">Детальніше</Typography>
            </Button>
          </Box>
        </Box>
      </Box>
      {/*<Box*/}
      {/*  sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", rowGap: '8px', borderTop: '1px solid #B2CCC0', pt: '24px' }}*/}
      {/*>*/}
      {/*  {info.map(({ title, text }: any) => (*/}
      {/*    <Box key={title}>*/}
      {/*      <Typography*/}
      {/*        variant="caption"*/}
      {/*        sx={{*/}
      {/*          color: "#97B1A5",*/}
      {/*          width: "140px",*/}
      {/*          display: "inline-block",*/}
      {/*        }}*/}
      {/*      >*/}
      {/*        {title}*/}
      {/*      </Typography>*/}
      {/*      <Typography variant="caption" sx={{ color: "#647C72" }}>*/}
      {/*        {text}*/}
      {/*      </Typography>*/}
      {/*    </Box>*/}
      {/*  ))}*/}
      {/*</Box>*/}

      <ProfileAppointmentModal
        targetButtonText={targetButtonText}
        isOpen={isOpen}
        closeModal={closeModal}
      />
    </Box>
  );
};
