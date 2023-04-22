import Box from "@mui/material/Box";
import React from "react";
import Typography from "@mui/material/Typography";
import { Wallet } from "lucide-react";
import { AppointmentScheduleDate, AppointmentScheduleTime } from "../atomic";

const HeaderSection = () => {
  return (
    <Box display="flex" flexDirection="column" gap="32px">
      <Box
        display="flex"
        flexDirection="row"
        gap="32px"
        justifyContent="space-between"
        sx={{
          flexWrap: { lg: "nowrap", md: "nowrap", sm: "wrap", xs: "wrap" },
        }}
      >
        <Box
          display="flex"
          flexDirection="row"
          gap="32px"
          width="100%"
          whiteSpace="nowrap"
          sx={{
            flexWrap: { lg: "nowrap", md: "nowrap", sm: "wrap", xs: "wrap" },
          }}
        >
          <Typography variant="h5" display="flex" flexWrap="nowrap">
            Запис до лікаря
          </Typography>
          <Box
            borderBottom="1px solid #8CB0C5"
            flex="1"
            m="auto"
            sx={{
              display: { lg: "block", md: "block", sm: "none", xs: "none" },
            }}
          ></Box>
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          gap="32px"
          color="#274B5D"
          sx={{
            flexWrap: { lg: "nowrap", md: "nowrap", sm: "wrap", xs: "wrap" },
          }}
        >
          <Box
            display="flex"
            gap="12px"
            flexWrap="nowrap"
            flexDirection="row"
            alignItems="center"
            whiteSpace="nowrap"
          >
            <Wallet size="20px" />
            <Typography variant="body2" component="p" color="#274B5D">
              Платно від 400 грн
            </Typography>
          </Box>
          <Box
            display="flex"
            gap="12px"
            flexWrap="nowrap"
            flexDirection="row"
            alignItems="center"
            width="100%"
            whiteSpace="nowrap"
          >
            <Wallet size="20px" />
            <Typography variant="body2" component="p" color="#274B5D">
              Безоплатно при заключеній декларації
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        gap="32px"
        justifyContent="space-between"
        alignItems="center"
        borderRadius="10px"
        overflow="hidden"
      >
        <AppointmentScheduleDate />
        <AppointmentScheduleTime />
      </Box>
    </Box>
  );
};

export default HeaderSection;
