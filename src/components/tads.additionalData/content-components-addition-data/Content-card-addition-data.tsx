import Box from "@mui/material/Box/Box";
import React from "react";
import Typography from "@mui/material/Typography";
import {
  TEXT_ADDRESSES_EDIT_FORM,
  typeContentCars,
} from "~/components/tads.additionalData/const-additional-data";
import { Trash2 } from "lucide-react";

const textOverflowStyles = {
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
};
const ContentCardAdditionData = ({ index, isEditView, data }: any) => {
  let addresses = "";
  let other = "";
  let TITLE: any = "";
  switch (index) {
    case 0:
      TITLE = TEXT_ADDRESSES_EDIT_FORM.addresses.titleRestData;
      addresses = data.house;
      other = data.apartments;
      break;
    case 1:
      TITLE = TEXT_ADDRESSES_EDIT_FORM.workPlace.titleRestData;
      addresses = data.place;
      other = data.position;
      break;
    case 2:
      TITLE = TEXT_ADDRESSES_EDIT_FORM.preferentialCategories.titleRestData;
      break;
  }
  return (
    <Box
      marginTop="8px"
      padding="16px 32px"
      display="flex"
      justifyContent="space-between"
      border="solid 1px #DBE5DF"
      borderRadius="10px"
      bgcolor="background.default"
    >
      <Box display="flex" gap="64px">
        <Box display="flex" gap="8px" flexDirection="column" minWidth="174px">
          <Typography variant="body1" color="#97B1A5" display="block">
            {TITLE.type}
          </Typography>
          <Typography variant="subtitle2" color="#00382A" display="block">
            {typeContentCars[index]}
          </Typography>
        </Box>
        <Box display="flex" gap="8px" flexDirection="column" maxWidth="422px">
          <Typography variant="body1" color="#97B1A5">
            {TITLE.addresses}
          </Typography>
          <Typography
            variant="subtitle2"
            color="#00382A"
            overflow="hidden"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            maxWidth="422px"
            //todo add text from rest
            title={" м. Київ; вул. Шевченка Тараса (Троєщина), 7; буд. 1"}
          >
            {/*//todo add text from api*/}
            {addresses}
          </Typography>
        </Box>
        <Box display="flex" gap="8px" flexDirection="column" maxWidth="108px">
          <Typography variant="body1" color="#97B1A5">
            {TITLE.other}
          </Typography>
          {/*//todo add text from api*/}
          <Typography
            variant="subtitle2"
            color="#00382A"
            overflow="hidden"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            maxWidth="108px"
          >
            1
          </Typography>
        </Box>
      </Box>
      {isEditView && (
        <Box display="flex" justifyContent="center" alignItems="center">
          <Trash2 color="#DE3730" size="22" />
        </Box>
      )}
    </Box>
  );
};

export default ContentCardAdditionData;
