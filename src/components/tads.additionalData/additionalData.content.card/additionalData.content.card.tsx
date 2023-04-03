import React from "react";
import Typography from "@mui/material/Typography";
import AdditionalContentData from "./additional.content.data";

const emptyText = [
  "Ви ще не додали свої адреси.",
  "Ви ще не додали свої місця роботи.",
  "Пільгові категорії відсутні.",
];

const AdditionalDataContentCard = ({ data }: any) => {
  const isDataEmpty = false;
  return !isDataEmpty ? (
    <AdditionalContentData />
  ) : (
    <Typography variant="body2">{emptyText[0]}</Typography>
  );
};

export default AdditionalDataContentCard;
