import React from "react";
import { Box, Grid, Typography, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { ArrowForwardIosRounded } from "@mui/icons-material";

export const ChooseDoctorsList = ({ doctor: { icon, name, count } }: any) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
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
          <Typography variant={"subtitle1"} sx={{ color: "#00513E" }}>
            {name}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Typography variant={"caption"} sx={{ color: "#7D968B" }}>
              {count} лікарів
            </Typography>
            <IconButton>
              <ArrowForwardIosRounded sx={{ color: "#00513E" }} />
            </IconButton>
          </Link>
        </Box>
      </Box>
    </Grid>
  );
};
