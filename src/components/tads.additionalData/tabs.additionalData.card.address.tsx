import Paper from "@mui/material/Paper/Paper";
import React from "react";
import TabHeaderCard from "./tab.header.card/tab.header.card";
import Typography from "@mui/material/Typography";
import AdditionalDataContentCard from "./additionalData.content.card/additionalData.content.card";
import Box from "@mui/material/Box/Box";
import InputForm from "./additionalData.content.card/inputForm";

const data = [
  { address: undefined },
  { placeOfWork: undefined },
  { preferentialCategories: undefined },
];

const title = ["Адреси", "Місце роботи", "Пільгові категорії"];
const emptyText = [
  "Ви ще не додали свої адреси.",
  "Ви ще не додали свої місця роботи.",
  "Пільгові категорії відсутні.",
];
const TabsAdditionalDataCardAddress = () => {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "40px",
        padding: "32px",
      }}
    >
      {data.map((item, index) => {
        return (
          <Box
            key={title[index]}
            sx={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <TabHeaderCard title={title[index]} />
            <AdditionalDataContentCard data={item} />
            <InputForm />
          </Box>
        );
      })}
    </Paper>
  );
};

export default TabsAdditionalDataCardAddress;
