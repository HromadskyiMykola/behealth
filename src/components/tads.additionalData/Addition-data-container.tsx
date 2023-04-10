import React from "react";
import AdditionData from "./content-components-addition-data/Addition-data";
import Box from "@mui/material/Box/Box";
import { titleCards } from "~/components/tads.additionalData/const-additional-data";

const MOCKdataFull = {
  addresses: {
    id: 1,
    patient_id: 1,
    settlement: "Черкаси",
    house: "1",
    apartments: "1",
    created_at: "2023-04-02T10:36:57.181Z",
    updated_at: "2023-04-02T10:36:57.181Z",
  },
  worksPlace: {
    id: 1,
    place: "Аском",
    position: "Монтажник",
    created_at: "2023-04-02T10:40:34.528Z",
    updated_at: "2023-04-02T10:40:34.528Z",
    patient_id: 1,
  },
  preferenceCategories: undefined,
};

const AdditionDataContainer = () => {
  return (
    <Box display="flex" flexDirection="column" gap="40px">
      {titleCards.map((item, index) => {
        return (
          <AdditionData
            item={item}
            index={index}
            key={`${item}-label`}
            data={MOCKdataFull}
          />
        );
      })}
    </Box>
  );
};

export default AdditionDataContainer;
