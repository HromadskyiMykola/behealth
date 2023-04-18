import React from "react";
import { ICONS_SOCIAL_LIST } from "~/components/clinic/clinic-card-constants";
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const IconsSocialList = () => {
  return (
    <Grid container spacing={4}>
      {ICONS_SOCIAL_LIST.map(({ icon, name, link }) => (
        <Grid key={name} item>
          <Link
            target="_blank"
            to={link}
            style={{
              textDecoration: "none",
              display: "flex",
              gap: "12px",
              alignItems: "center",
              padding: "8px 12px",
              backgroundColor: "#DCF7EA",
              borderRadius: "10px",
            }}
          >
            {icon}
            <Typography variant="button" color="#00382A">
              {name}
            </Typography>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};
