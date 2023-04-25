import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { emptyText } from "../const-additional-data";
import ContentCardAdditionData from "./Content-card-addition-data";
import { AddressesForm } from "./Addresses-form";
import { WorkPlaceForm } from "~/components/tads.additionalData/content-components-addition-data/Work-place-form";

export const AdditionalDataContentCard = ({
  valuePatientAdditionData,
  index,
  isEditView,
  closeEditForm,
}: any) => {
  const renderCard = (index: number) => {
    switch (index) {
      case 0:
        return (
          <AddressesForm
            closeEditForm={closeEditForm}
            valuePatientAdditionData={valuePatientAdditionData}
          />
        );
      case 1:
        return (
          <WorkPlaceForm
            closeEditForm={closeEditForm}
            data={valuePatientAdditionData}
            valuePatientAdditionData={valuePatientAdditionData}
          />
        );
      case 2:
        return "Тут поки пусто)";
    }
  };

  return (
    <>
      {!!valuePatientAdditionData ? (
        <ContentCardAdditionData
          index={index}
          isEditView={isEditView}
          data={valuePatientAdditionData}
          valuePatientAdditionData={valuePatientAdditionData}
        />
      ) : (
        <Typography variant="body2" color="text.secondary">
          {emptyText[index]}
        </Typography>
      )}
      {isEditView && renderCard(index)}
    </>
  );
};
