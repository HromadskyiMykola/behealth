import { Box, Rating, Typography } from "@mui/material";

import noAvatar from "~/assets/images/doctor-avatar.png";
import { REVIEWS } from "~/components/Small-card-doctor/constants-small-card-doctor";
import { NameAndInfoAboutDoctor } from "~/components/Name-and-info-about-doctor";

type Props = {
  speciality: string;
  experience: number;
  name: string;
  reviewsCount: number;
  rating: number;
  avatar: string;
};

export const HeaderItem = ({
  speciality,
  experience,
  name,
  reviewsCount,
  rating,
  avatar,
}: Props) => {
  return (
    <Box display="flex" gap="24px">
      <Box>
        <img
          src={avatar || noAvatar}
          alt="doctor"
          width="132px"
          height="132px"
          style={{ borderRadius: "19px" }}
        />
      </Box>

      <Box>
        <NameAndInfoAboutDoctor
          speciality={speciality}
          experience={experience}
          name={name}
        />

        <Box display="flex" gap="8px" pt={1}>
          <Rating name="rating" value={rating} precision={0.25} readOnly />
          <Typography variant="body2">{`${REVIEWS} (${reviewsCount})`}</Typography>
        </Box>
      </Box>
    </Box>
  );
};
