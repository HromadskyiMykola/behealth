import Box from "@mui/material/Box/Box";
import React, {useState} from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button/Button";
import {Edit, Plus} from 'lucide-react';
import {
    AdditionalDataContentCard
} from "~/components/tads.additionalData/content-components-addition-data/Addition-data-content-card";
import {titleCards} from "~/components/tads.additionalData/const-additional-data";

interface IMOCKdata {
    addresses: undefined,
    workPlace: undefined,
    preferentialCategories: undefined,
}

const MOCKdata: IMOCKdata = {
    addresses: undefined,
    workPlace: undefined,
    preferentialCategories: undefined,
}

interface IAdditionData {
    item: string;
    index: number;
}

const AdditionData = ({item, index}: IAdditionData) => {
    const [isEditView, setIsEditView] = useState(false);

    // const isDataEmpty : boolean = !!MOCKdata[Object.keys(MOCKdata)[index]] ;
    const isDataEmpty = true;
    return (
        <Box display="flex" flexDirection="column" gap="16px">
            <Box display="flex" justifyContent="space-between">
                <Typography variant="h5">{item}</Typography>
                {
                    //todo написати нормальну логіку з ітерацією не по масиву а по масиву з обєктами
                    item  !== titleCards[2] && <Button
                        variant="text"
                        startIcon={
                            isDataEmpty ? <Plus size='22'/> : <Edit size='22'/>
                        }
                        onClick={() => setIsEditView(!isEditView)}
                    >
                        {isDataEmpty ? 'Додати' : 'Змінити'}
                    </Button>
                }
            </Box>
            <AdditionalDataContentCard data={MOCKdata} index={index} isEditView={isEditView} isDataEmpty={isDataEmpty}/>
        </Box>
    );
};
export default AdditionData;