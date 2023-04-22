import Box from "@mui/material/Box";
import React from "react";
import avatar from "~/assets/images/doctor-avatar.png";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { REVIEWS } from "~/components/Small-card-doctor/constants-small-card-doctor";
import { NameAndInfoAboutDoctor } from "~/components/Name-and-info-about-doctor";

export const HeaderItem = () => {
  return (
    <Box display="flex" gap="24px">
      <Box>
        <img //todo add photo with rest api
          src={avatar}
          //todo add description with rest api
          alt={"photo-doctor"}
          width="132px"
          height="132px"
          style={{ borderRadius: "19px" }}
        />
      </Box>
      <Box>
        <NameAndInfoAboutDoctor />
        <Box display="flex" gap="8px" pt={1}>
          <Rating name="rating" value={4.5} precision={0.25} readOnly />
          <Typography variant="body2">{`${REVIEWS} (${56})`}</Typography>
        </Box>
      </Box>
    </Box>
  );
};
