import React from "react";
import { ICONS_SOCIAL_LIST } from "~/components/clinic/clinic-card-constants";
import { Grid } from "@mui/material";
import { IconSocial } from "~/components/clinic/IconSocial";

export const IconsSocialList = () => {
  return (
    <Grid container spacing={4}>
      {ICONS_SOCIAL_LIST.map(({ icon, name, link }) => (
        <Grid key={name} item>
          <IconSocial icon={icon} name={name} link={link} />
        </Grid>
      ))}
    </Grid>
  );
};
