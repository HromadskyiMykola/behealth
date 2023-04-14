import React from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { IChips } from "~/common";

const Chips = ({ text }: IChips) => {
  return (
    <Box
      p="4px 8px"
      bgcolor="#FBFCFF"
      border="1px solid #C3E8FE"
      borderRadius="6px"
    >
      <Typography color="#406375" variant="caption" component="p">
        {text}
      </Typography>
    </Box>
  );
};

export default Chips;
