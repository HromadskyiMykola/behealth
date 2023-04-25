import React, { useState } from "react";
import AdditionData from "./content-components-addition-data/Addition-data";
import Box from "@mui/material/Box/Box";
import { titleCards } from "~/components/tads.additionalData/const-additional-data";
import { IPatientAdditionData } from "~/common/types-and-interfaces";

const AdditionDataContainer: React.FC<{
  patientAdditionData: IPatientAdditionData | null;
}> = ({ patientAdditionData }) => {
  const getValue = (index: number) => {
    switch (index) {
      case 0:
        return patientAdditionData?.address;
      case 1:
        return patientAdditionData?.workPlace;
      case 2:
        return patientAdditionData?.preferenceCategories;
    }
  };
  return (
    <Box display="flex" flexDirection="column" gap="40px">
      {titleCards.map((item, index) => {
        return (
          <AdditionData
            item={item}
            index={index}
            key={`${item}-label`}
            valuePatientAdditionData={getValue(index)}
          />
        );
      })}
    </Box>
  );
};

export default AdditionDataContainer;
