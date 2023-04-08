import React from "react";
import { Box, Typography } from "@mui/material";
import { MobileIconsList } from "../MobileIconsList";
import { AccordionList } from "./AccordioList";
import { PROFILE_HELP } from "./profile-help.constants";

export const ProfileHelp = () => {
  const { headerSubtitle, title, headerTitle, arrayItems } = PROFILE_HELP;
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px 0",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "4px",
            alignItems: "center",
            border: "1px solid #B2CCC0",
            borderRadius: "12px",
            p: "8px",
          }}
        >
          <Typography sx={{ color: "#7D968B" }} variant="caption">
            {headerTitle}
          </Typography>
          <Typography sx={{ color: "#4C635A" }} variant="caption">
            {headerSubtitle}
          </Typography>
        </Box>
        <div
          style={{ height: "1px", backgroundColor: "#B2CCC0", width: "190px" }}
        />
        <MobileIconsList />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <Typography sx={{ color: "#00382A" }} variant="h5">
          {title}
        </Typography>
        <Box>
          <AccordionList arrayItems={arrayItems} />
        </Box>
      </Box>
    </>
  );
};
