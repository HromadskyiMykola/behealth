import React, { FC } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { VerifiedIcon } from "lucide-react";

export interface IClinicMedicineProps {
  medicine: string[];
}

export const ClinicMedicine: FC<IClinicMedicineProps> = ({ medicine }) => {
  return (
    <Grid container spacing={4}>
      {medicine.map((item) => (
        <Grid key={item} item>
          <Box sx={{ display: "flex", alignItems: "center", gap: "9px" }}>
            <VerifiedIcon color="#5C5F5D" size={16} />
            <Typography color="#444845" variant="caption">
              {item}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};
