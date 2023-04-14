import React, { FC, useState } from "react";
import { GoogleMapLink } from "~/components/clinicCard/GoogleMapLink";
import { Box, Grid, Typography } from "@mui/material";
import {
  VerifiedIcon,
  PlusIcon,
  MinusIcon,
  MapPinIcon,
  ClockIcon,
  ParkingSquareIcon,
  PuzzleIcon,
  CreditCardIcon,
  WifiIcon,
  CrossIcon,
} from "lucide-react";
import { IClinicCard } from "~/components/clinicCard/clinic-card-constants";
import Button from "@mui/material/Button";
import FooterContactPhone from "~/components/FooterContactPhone/FooterContactPhone";
import Life from "~/assets/CustomIcon/Life";
import { ClinicAppointmentModal } from "~/components/clinicCard/ClinicAppointmentModal";

export interface ClinicCardProps {
  card: IClinicCard;
}

export const ClinicCard: FC<ClinicCardProps> = ({ card }) => {
  const [showAll, setShowAll] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const maxGridsToShow = 4;

  const { working, address, medicine, name, img, type, chips, phone } = card;

  const closeModal = () => setIsOpen(false);

  const chooseCard = (text: string) => {
    const iconProps = {
      color: "#597C8F",
      size: 16,
    };

    switch (text) {
      case "Паркинг":
        return <ParkingSquareIcon {...iconProps} />;
      case "Дитяча кімната":
        return <PuzzleIcon {...iconProps} />;
      case "Оплата картою":
        return <CreditCardIcon {...iconProps} />;
      case "Wi-Fi зона":
        return <WifiIcon {...iconProps} />;
      case "Аптека":
        return <CrossIcon {...iconProps} />;
    }
  };

  return (
    <>
      <Box
        sx={{
          p: "32px",
          borderRadius: "12px",
          bgcolor: "#fff",
          boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.04)",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        <Box sx={{ display: "flex", gap: "24px" }}>
          <img
            style={{ borderRadius: "8px" }}
            src={img}
            alt="Clinic"
            width={136}
            height={136}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="body2">{type}</Typography>
              <Typography variant="h5">{name}</Typography>
            </Box>
            <Grid container spacing={2}>
              {chips.map((item) => (
                <Grid item key={item}>
                  <Box
                    sx={{
                      bgcolor: "#FBFCFF",
                      borderRadius: "6px",
                      border: "1px solid #C3E8FE",
                      p: "4px 10px 4px 8px",
                      display: "flex",
                      gap: "8px",
                      alignItems: "center",
                    }}
                  >
                    {chooseCard(item)}
                    <Typography color="#406375" variant="caption">
                      {item}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
        <Box
          sx={{
            p: "16px",
            borderRadius: "10px",
            border: "1px solid #E1E3E0",
            display: "flex",
            flexDirection: "column",
            gap: "33px",
          }}
        >
          <Grid container spacing={4}>
            {medicine
              .slice(0, showAll ? medicine.length : maxGridsToShow)
              .map((item) => (
                <Grid key={item} item>
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "9px" }}
                  >
                    <VerifiedIcon color="#5C5F5D" size={16} />
                    <Typography color="#444845" variant="caption">
                      {item}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            <Grid item>
              <Box
                onClick={() => (showAll ? setShowAll(false) : setShowAll(true))}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  cursor: "pointer",
                }}
              >
                {showAll ? (
                  <MinusIcon color="#3DBF9A" size={16} />
                ) : (
                  <PlusIcon color="#3DBF9A" size={16} />
                )}
                <Typography color="#3DBF9A" variant="captionS">
                  {showAll ? "Менше" : "Більше"}
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
            }}
          >
            <Box sx={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <ClockIcon
                style={{
                  padding: "4px",
                  borderRadius: "6px",
                  border: "1px solid #8E918F",
                }}
                color="#444845"
                size={24}
              />
              <Typography variant="caption">{working}</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <MapPinIcon
                style={{
                  padding: "4px",
                  borderRadius: "6px",
                  border: "1px solid #8E918F",
                }}
                color="#444845"
                size={24}
              />
              <Typography sx={{ pr: "9px" }} variant="caption">
                {address}
              </Typography>
              <GoogleMapLink address={address} />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              p: "8px 16px",
              borderRadius: "10px",
              border: "1px solid #E1E3E0",
            }}
          >
            <FooterContactPhone
              icon={
                <Life
                  width="28"
                  height="28"
                  viewBox="0 0 30 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                />
              }
              phone={phone}
            />
          </Box>
          <Box sx={{ display: "flex", gap: "16px" }}>
            <Button variant="outlined" onClick={() => setIsOpen(true)}>
              <Typography variant="button">Швидкий запис</Typography>
            </Button>
            <Button variant="contained">
              <Typography variant="button">Детальніше</Typography>
            </Button>
          </Box>
        </Box>
      </Box>
      <ClinicAppointmentModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};
