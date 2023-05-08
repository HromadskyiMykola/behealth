import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Button,
  Box,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import {
  VerifiedIcon,
  PlusIcon,
  MinusIcon,
  MapPinIcon,
  ClockIcon,
} from "lucide-react";

import FooterContactPhone from "~/components/FooterContactPhone/FooterContactPhone";
import Life from "~/assets/CustomIcon/Life";
import { ClinicAppointmentModal } from "~/components/clinic/ClinicAppointmentModal";
import { Chips } from "~/components/clinic/Chips";
import { CustomizedPaper, GoogleMapLink } from "~/components/atomic";
import { TClinic } from "~/common";

const maxGridsToShow = 4;

export interface ClinicCardProps {
  clinic: TClinic;
}

export const SmallClinicCard: FC<ClinicCardProps> = ({ clinic }) => {
  const [showAll, setShowAll] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const theme = useTheme();
  const navigate = useNavigate();
  const tabletDevice = useMediaQuery(theme.breakpoints.down("md"));

  const {
    id,
    address,
    name,
    clinicType,
    img,
    phoneNumber,
    tags,
    workingHours,
  } = clinic;

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
              <Typography variant="body2">{clinicType}</Typography>

              <Typography variant="h5">{name}</Typography>
            </Box>
            {tags && <Chips chips={tags} />}
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
          {tags && (
            <Grid container spacing={4}>
              {tags
                ?.slice(0, showAll ? tags?.length : maxGridsToShow)
                .map(({ name }) => (
                  <Grid key={name} item>
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: "9px" }}
                    >
                      <VerifiedIcon color="#5C5F5D" size={16} />

                      <Typography color="#444845" variant="caption">
                        {name}
                      </Typography>
                    </Box>
                  </Grid>
                ))}

              {tags?.length > maxGridsToShow && (
                <Grid item>
                  <Box
                    onClick={() =>
                      showAll ? setShowAll(false) : setShowAll(true)
                    }
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
              )}
            </Grid>
          )}

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
                  Вікрити на карті
                </Typography>
              </GoogleMapLink>
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
              phone={phoneNumber}
            />
          </Grid>

          <Grid item sx={{ display: "flex", gap: "16px" }}>
            <Button variant="outlined" onClick={() => setIsOpen(true)}>
              <Typography variant="button">Швидкий запис</Typography>
            </Button>

            <Button
              variant="contained"
              onClick={() => navigate(`/clinics/${id}`)}
            >
              <Typography variant="button">Детальніше</Typography>
            </Button>
          </Grid>
        </Grid>
      </CustomizedPaper>
      <ClinicAppointmentModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};
