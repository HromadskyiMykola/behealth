import React, { FC, ReactElement, ReactFragment } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
  Typography,
} from "@mui/material";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import { AccordionItemProps } from "~/common/types-and-interfaces";

export const AccordionItem: FC<AccordionItemProps> = ({
  title,
  description,
}) => {
  return (
    <Box sx={{ borderBottom: "1px solid #B2CCC0" }}>
      <Accordion className="_containerAccordion">
        <AccordionSummary
          className="_containerAccordionSummary"
          sx={{
            p: "18px 0 26px 0!important",
            "& .MuiAccordionSummary-content": {
              margin: "0",
            },
          }}
          expandIcon={
            <ExpandMoreRoundedIcon sx={{ color: "#00513E" }} fontSize="large" />
          }
          aria-controls="profile_help_panel1a-content"
          id="profile_help_panel1a-header"
        >
          <Typography sx={{ color: "#00382A" }} variant="subtitle2">
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{ pb: "24px!important" }}
          className="_containerAccordionDetails"
        >
          <Stack spacing={2}>
            {description.map((text: string, index: number) => {
              if (text[0] === "•") {
                console.log("do");
              }
              return (
                <Typography
                  color="#647C72"
                  variant="body2"
                  key={`text-item-by-id-${index}`}
                >
                  {text}
                </Typography>
              );
            })}
          </Stack>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
