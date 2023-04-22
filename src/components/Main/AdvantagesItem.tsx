import React, { FC } from "react";
import {
  Box,
  ListItem,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Check } from "~/assets/CustomIcon/Check";
import { IAdvantagesBlockProps } from "~/common";

export const AdvantagesItem: FC<IAdvantagesBlockProps> = ({
  title,
  description,
}) => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <ListItem
      sx={{
        display: "flex",
        gap: "9px",
        p: 0,
        alignItems: "start",
      }}
    >
      <Box>
        <Check
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="32"
          height="32"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "4px",
        }}
      >
        <Typography
          sx={{ display: "block" }}
          variant={sm ? "subtitle2" : "subtitle1"}
        >
          {title}
        </Typography>
        <Typography variant={sm ? "caption" : "body2"}>{description}</Typography>
      </Box>
    </ListItem>
  );
};
