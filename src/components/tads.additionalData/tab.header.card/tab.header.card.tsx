import Box from "@mui/material/Box/Box";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Edit from "../../../assets/CustomIcon/Edit";
import Button from "@mui/material/Button/Button";
import { TabHeaderCardProps } from "../../../common/types_and_interfaces";

const TabHeaderCard = ({ title }: TabHeaderCardProps) => {
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5">{title}</Typography>
        <Button
          variant="text"
          startIcon={
            <Edit
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            />
          }
        >
          Edit
        </Button>
      </Box>
    </Box>
  );
};
export default TabHeaderCard;