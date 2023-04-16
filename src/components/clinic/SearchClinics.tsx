import React from "react";
import { Grid, InputAdornment, Button, Typography, Box } from "@mui/material";
import { SearchIcon } from "lucide-react";
import { CustomizedInput } from "~/components/atomic";

export const SearchClinics = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "24px",
        alignItems: "end",
        p: "32px 32px 40px",
        bgcolor: "#fff",
        borderRadius: "12px",
        boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.04)",
        mb: "32px",
      }}
    >
      <CustomizedInput
        placeholder="Введіть назву клініки"
        label="Назва клініки"
        InputProps={{
          endAdornment: null,
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="#A4ADA8" />
            </InputAdornment>
          ),
        }}
      />
      <Box>
        <Button sx={{ p: "14px 76px" }} variant="contained">
          <Typography variant="button">Знайти</Typography>
        </Button>
      </Box>
    </Box>
  );
};
