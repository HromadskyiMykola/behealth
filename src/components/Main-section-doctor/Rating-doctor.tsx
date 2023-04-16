import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import { styled } from "@mui/system";
import {
  COMPETENCE,
  DOCTORS_RATING,
  REVIEWS,
} from "~/components/Main-section-doctor/constant-main-section-doctor";

const BoxRating = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "32px",
  padding: "32px",
  borderRadius: "10px",
  background: "#F6F8F7",
  color: theme.palette.custom.neutral70,
}));
const BoxRatingItem = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
}));

export const RatingDoctor = () => {
  return (
    <Box display="flex" flexDirection="column" gap="32px">
      <Typography variant="h5">{`${DOCTORS_RATING} (${60})`}</Typography>
      <BoxRating>
        <Box display="flex" gap="8px">
          <Rating name="rating" value={4.5} precision={0.25} readOnly />
          <Typography variant="body2">{`${REVIEWS} (${56})`}</Typography>
        </Box>
        <BoxRatingItem>
          <Typography variant="body2" component="p">
            {`${COMPETENCE}: ${4.9}`}
          </Typography>
          <LinearProgress
            variant="determinate"
            className="_LinearRatingDoctor"
            value={4.9 * 20}
          />
        </BoxRatingItem>
        <BoxRatingItem>
          <Typography
            variant="body2"
            component="p"
          >{`${COMPETENCE}: ${4.9}`}</Typography>
          <LinearProgress
            variant="determinate"
            className="_LinearRatingDoctor"
            value={4.9 * 20}
          />
        </BoxRatingItem>
      </BoxRating>
    </Box>
  );
};
