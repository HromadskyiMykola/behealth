import { Box, Rating, Typography } from "@mui/material";

import avatarNeedChange from "~/assets/images/doctor-avatar.png";
import { REVIEWS } from "~/components/Small-card-doctor/constants-small-card-doctor";
import { NameAndInfoAboutDoctor } from "~/components/Name-and-info-about-doctor";

type Props = {
  specialty: string;
  experience: number;
  name: string;
  reviewsCount: number;
  rating: number;
  avatar: string;
};

export const HeaderItem = ({
  specialty,
  experience,
  name,
  reviewsCount,
  rating,
  avatar, // !!
}: Props) => {
  return (
    <Box display="flex" gap="24px">
      <Box>
        <img //todo add photo with rest api
          src={avatarNeedChange}
          //todo add description with rest api
          alt="doctor"
          width="132px"
          height="132px"
          style={{ borderRadius: "19px" }}
        />
      </Box>

      <Box>
        <NameAndInfoAboutDoctor
          specialty={specialty}
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
