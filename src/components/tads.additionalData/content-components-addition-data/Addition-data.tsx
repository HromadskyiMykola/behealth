import Box from "@mui/material/Box/Box";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button/Button";
import { Edit, Plus } from "lucide-react";
import { AdditionalDataContentCard } from "~/components/tads.additionalData/content-components-addition-data/Addition-data-content-card";
import { titleCards } from "~/components/tads.additionalData/const-additional-data";

interface IMOCKdata {
  addresses: undefined;
  workPlace: undefined;
  preferentialCategories: undefined;
}

const MOCKdata: IMOCKdata = {
  addresses: undefined,
  workPlace: undefined,
  preferentialCategories: undefined,
};

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
interface IAdditionData {
  item: string;
  index: number;
  data: any;
}

const AdditionData = ({ item, index, data }: IAdditionData) => {
  const [isEditView, setIsEditView] = useState(false);

  const closeEditForm = () => {
    setIsEditView(!isEditView);
  };
  // const isDataEmpty  = MOCKdataFull[Object.keys(MOCKdata)[index]] ;

  function choseData(index: number) {
    switch (index) {
      case 0:
        return data.addresses;
      case 1:
        return data.worksPlace;
      case 2:
        return data.preferenceCategories;
    }
  }

  const isDataEmpty = false;
  return (
    <Box display="flex" flexDirection="column" gap="16px">
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h5">{item}</Typography>
        {
          //todo написати нормальну логіку з ітерацією не по масиву а по масиву з обєктами
          item !== titleCards[2] && (
            <Button
              variant="text"
              startIcon={isDataEmpty ? <Plus size="22" /> : <Edit size="22" />}
              onClick={() => setIsEditView(true)}
              disabled={isEditView}
            >
              {isDataEmpty ? "Додати" : "Змінити"}
            </Button>
          )
        }
      </Box>
      <AdditionalDataContentCard
        data={choseData(index)}
        index={index}
        isEditView={isEditView}
        isDataEmpty={isDataEmpty}
        closeEditForm={closeEditForm}
      />
    </Box>
  );
};
export default AdditionData;
