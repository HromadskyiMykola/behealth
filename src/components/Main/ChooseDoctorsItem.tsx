import React from "react";
import {
  Box,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "lucide-react";

export const ChooseDoctorsList = ({ doctor: { icon, name, count } }: any) => {
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingRight: "12px",
          background: "#FFFFFF",
          border: "1px solid #00513E",
          boxShadow: "0px 1px 10px rgba(9, 164, 128, 0.1)",
          borderRadius: "12px",
        }}
      >
        <Box sx={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <Box
            sx={{
              background: "#00513E",
              width: "64px",
              height: "64px",
              borderTopLeftRadius: "10px",
              borderBottomLeftRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {icon}
          </Box>
          <Typography
            color="#00513E"
            sx={{
              typography: {
                xs: "subtitle2",
                md: "subtitle1",
              },
              display: {
                xs: "none",
                md: "block",
              },
            }}
          >
            {name}
          </Typography>
          <Box
            display={{
              xs: "block",
              md: "none",
            }}
          >
            <Typography color="#00513E" variant={"subtitle2"}>
              {name}
            </Typography>
            <Typography color="#7D968B" variant={"caption"}>
              {count} лікарів
            </Typography>
          </Box>
        </Box>
        <Box
          display={{
            xs: "none",
            md: "flex",
          }}
          gap="8px"
          alignItems="center"
        >
          <Typography variant={"caption"} sx={{ color: "#7D968B" }}>
            {count} лікарів
          </Typography>
          <ChevronRightIcon color="#00513E" size={32} />
        </Box>
      </Box>
    </Link>
  );
};
