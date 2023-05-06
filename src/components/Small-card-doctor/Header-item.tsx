import { Box, Rating, Stack, Typography, useTheme } from "@mui/material";

import noAvatar from "~/assets/images/doctor-avatar.png";
import { REVIEWS } from "~/components/Small-card-doctor/constants-small-card-doctor";
import { NameAndInfoAboutDoctor } from "~/components/Name-and-info-about-doctor";
import { useState } from "react";
import { TDoctor } from "~/common";

export const HeaderItem = ({ doctor }: { doctor: TDoctor }) => {
  const { name, reviewsCount, rating, avatar } = doctor;
  const [value, setValue] = useState<number | null>(rating / 15);

  return (
    <Box display="flex" gap="24px">
      <Box>
        <img
          src={avatar || noAvatar}
          alt={`avatar-${name}`}
          width="132px"
          height="132px"
          style={{ borderRadius: "19px" }}
        />
      </Box>

      <Box>
        <NameAndInfoAboutDoctor doctor={doctor} />

        <Box display="flex" gap="8px" pt={1}>
          <Rating
            name="rating"
            value={value}
            precision={0.5}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <Typography variant="body2">{`${REVIEWS} (${reviewsCount})`}</Typography>
        </Box>
      </Box>
    </Box>
  );
};
