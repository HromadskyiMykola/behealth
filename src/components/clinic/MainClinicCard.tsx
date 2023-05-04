import React, { FC } from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Chips } from "~/components/clinic/Chips";
import { ClockIcon, MapPinIcon, Share2Icon } from "lucide-react";
import FooterContactPhone from "~/components/FooterContactPhone/FooterContactPhone";
import Life from "~/assets/CustomIcon/Life";
import { ClinicMedicine } from "~/components/clinic/ClinicMedicine";
import { GoogleMapLink } from "~/components/atomic";
import { IClinicCard } from "~/components/clinic/clinic-card-constants";
import { TClinic } from "~/common";

interface ClinicCardProps {
  clinic: TClinic;
}

export const MainClinicCard: FC<ClinicCardProps> = ({ clinic }) => {
  const {
    address,
    name,
    clinicType,
    img,
    dataType,
    id,
    district,
    phoneNumber,
    tags,
    city,
    workingHours,
    medicine,
    doctorsIds,
  } = clinic;

  const theme = useTheme();
  const tabletDevice = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        p: "32px",
        bgcolor: "#fff",
        boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.04)",
        borderRadius: "12px",
        display: "flex",
        flexDirection: tabletDevice ? "column" : "row",
        gap: "24px",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <img
          style={{ borderRadius: "8px" }}
          src={img}
          alt="Clinic"
          width={272}
          height={272}
        />
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
            phone={phoneNumber}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "24px",
          flexDirection: "column",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography color="212121" variant="body2">
                {clinicType}
              </Typography>
              <Share2Icon
                size={24}
                color="#757875"
                style={{ cursor: "pointer" }}
              />
            </Box>
            <Typography color="212121" variant="h5">
              {name}
            </Typography>
          </Box>
          <Chips chips={tags} />
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
          {medicine && <ClinicMedicine medicine={medicine} />}
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
              <Typography variant="caption">{workingHours[0].hours}</Typography>
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
              <GoogleMapLink address={address}>
                <Typography color="#3DBF9A" variant="captionS">
                  Відкрити на карті
                </Typography>
              </GoogleMapLink>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
