import React, { FC, useState } from "react";
import { GoogleMapLink } from "~/components/clinic/GoogleMapLink";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import {
  VerifiedIcon,
  PlusIcon,
  MinusIcon,
  MapPinIcon,
  ClockIcon,
} from "lucide-react";
import { IClinicCard } from "~/components/clinic/clinic-card-constants";
import Button from "@mui/material/Button";
import FooterContactPhone from "~/components/FooterContactPhone/FooterContactPhone";
import Life from "~/assets/CustomIcon/Life";
import { ClinicAppointmentModal } from "~/components/clinic/ClinicAppointmentModal";
import { Chips } from "~/components/clinic/Chips";
import { CustomizedPaper } from "~/components/atomic";

export interface ClinicCardProps {
  card: IClinicCard;
}

export const SmallClinicCard: FC<ClinicCardProps> = ({ card }) => {
  const [showAll, setShowAll] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const maxGridsToShow = 4;

  const { working, address, medicine, name, img, type, chips, phone } = card;

  const theme = useTheme();
  const tabletDevice = useMediaQuery(theme.breakpoints.down("md"));

  const closeModal = () => setIsOpen(false);

  return (
    <>
      <CustomizedPaper
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "24px",
            flexDirection: tabletDevice ? "column" : "row",
          }}
        >
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
              gap: "44px",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="body2">{type}</Typography>
              <Typography variant="h5">{name}</Typography>
            </Box>
            <Chips chips={chips} />
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
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Grid
            item
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
          </Grid>
          <Grid item sx={{ display: "flex", gap: "16px" }}>
            <Button variant="outlined" onClick={() => setIsOpen(true)}>
              <Typography variant="button">Швидкий запис</Typography>
            </Button>
            <Button variant="contained">
              <Typography variant="button">Детальніше</Typography>
            </Button>
          </Grid>
        </Grid>
      </CustomizedPaper>
      <ClinicAppointmentModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};
