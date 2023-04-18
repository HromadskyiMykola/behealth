import React from "react";
import { Box, MenuItem, Typography, Grid, InputAdornment } from "@mui/material";
import { CustomizedInput, SelectWithPlaceholder } from "~/components/atomic";
import { SearchIcon } from "lucide-react";

export const SearchDocs = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      <Typography variant="h5" color="#212121">
        Лікарі
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <SelectWithPlaceholder
            sx={{ width: "100%" }}
            label="Спеціальність"
            placeholder="Обрати"
          >
            <MenuItem value="neurologist">Невролог</MenuItem>
            <MenuItem value="urologist">Уролог</MenuItem>
          </SelectWithPlaceholder>
        </Grid>
        <Grid item xs={12} md={8}>
          <CustomizedInput
            placeholder="Введіть імʼя лікаря"
            label="ПІБ лікаря"
            InputProps={{
              endAdornment: null,
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="#A4ADA8" />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
