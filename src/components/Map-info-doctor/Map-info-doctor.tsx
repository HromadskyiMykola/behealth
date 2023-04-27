import React from "react";
import Box from "@mui/material/Box";
import { Map, MapPin } from "lucide-react";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material";
import { GoogleMapLink } from "~/components/atomic";

const BoxInfo = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: "8px",
  color: theme.palette.custom.neutral30,
  alignItems: "center",
  whiteSpace: "nowrap",
}));
export const MapInfoDoctor = () => {
  const { custom } = useTheme().palette;
  return (
    <Box display="flex" flexDirection="column" gap="16px">
      <BoxInfo>
        <Map
          size="24px"
          style={{
            border: `1px solid ${custom.neutral60}`,
            borderRadius: "6px",
            padding: "4px",
          }}
        />
        <Typography variant="caption" component="p">
          Дніпровський район
        </Typography>
      </BoxInfo>
      <BoxInfo sx={{ flexWrap: "wrap" }}>
        <MapPin
          size="24px"
          style={{
            border: `1px solid ${custom.neutral60}`,
            borderRadius: "6px",
            padding: "4px",
          }}
        />
        <Typography variant="caption" component="span">
          м. Київ, вул. Попудренка, 7, каб. 2
        </Typography>
        <GoogleMapLink address={"м. Київ, вул. Гмирі Бориса, 14 Б"}>
          <Typography color="#3DBF9A" variant="captionS">
            Вікрити на карті
          </Typography>
        </GoogleMapLink>
      </BoxInfo>
    </Box>
  );
};
