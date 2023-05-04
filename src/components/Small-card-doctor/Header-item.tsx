import { Box, Rating, Stack, Typography, useTheme } from "@mui/material";

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
  avatar,
}: Props) => {
  const { palette } = useTheme();

  return (
    <Box display="flex" gap="24px">
      <Box>
        <img
          src={avatar}
          alt={`avatar-${name}`}
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

        <Stack gap="8px" pt={1} direction="row">
          <Rating name="rating" value={rating} precision={0.25} readOnly />
          <Typography
            variant="body2"
            color={palette.custom.neutral70}
          >{`${REVIEWS} (${reviewsCount})`}</Typography>
        </Stack>
      </Box>
    </Box>
  );
};
