import React, { FC } from "react";
import { Box, ListItem, Typography } from "@mui/material";
import { Check } from "../../assets/random/Check";
import { IAdvantagesBlockProps } from "../../common/types-and-interfaces";

export const AdvantagesItem: FC<IAdvantagesBlockProps> = ({
  title,
  description,
}) => {
  return (
    <ListItem
      sx={{
        display: "flex",
        gap: "9px",
        pl: "0",
        pr: "0",
        pb: "0",
        pt: "0",
        alignItems: "start",
      }}
    >
      <Box>
        <Check
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "4px",
        }}
      >
        <Typography sx={{ display: "block" }} variant="subtitle1">
          {title}
        </Typography>
        <Typography variant={"body2"}>{description}</Typography>
      </Box>
    </ListItem>
  );
};
