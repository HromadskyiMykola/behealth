import React, { FC } from "react";
import { AccordionItem } from "./AccordionItem";
import { Box } from "@mui/material";
import { AccordionListProps } from "../../common/types_and_interfaces";

export const AccordionList: FC<AccordionListProps> = ({ arrayItems }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      {arrayItems.map(({ id, title, description }) => (
        <AccordionItem key={id} title={title} description={description} />
      ))}
    </Box>
  );
};
