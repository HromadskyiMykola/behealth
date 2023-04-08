import React from "react";
import AdditionData from "./content-components-addition-data/Addition-data";
import Box from "@mui/material/Box/Box";
import {titleCards} from "~/components/tads.additionalData/const-additional-data";

const emptyText = [
    "Ви ще не додали свої адреси.",
    "Ви ще не додали свої місця роботи.",
    "Пільгові категорії відсутні.",
];
const AdditionDataContainer = () => {

    return (
        <Box
            display="flex"
            flexDirection="column"
            gap="40px"
        >
            { titleCards.map((item, index) => {
                return <AdditionData  item={item} index={index} key={`${item}-label`} />
            }) }
        </Box>
    );
};

export default AdditionDataContainer;
