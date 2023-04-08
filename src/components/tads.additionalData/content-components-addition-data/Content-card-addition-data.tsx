import Box from "@mui/material/Box/Box";
import React from "react";
import Typography from "@mui/material/Typography";
import {titleContentCards, typeContentCars} from "~/components/tads.additionalData/const-additional-data";
import {Trash2} from 'lucide-react';

const ContentCardAdditionData = ({index, isEditView }: any) => {
    return (
        <Box
            marginTop="8px"
            padding="16px 32px"
            display='flex'
            justifyContent='space-between'
            border="solid 1px #DBE5DF"
            borderRadius="10px"
            bgcolor='background.default'
        >
            <Box display="flex"
                 gap="64px"
            >
                <Box
                    display='flex'
                    gap="8px"
                    flexDirection="column"
                    minWidth='174px'
                >
                    <Typography variant="body1" color="#97B1A5" display="block">
                        {titleContentCards.type}
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        color="#00382A"
                        display='block'
                    >
                        {typeContentCars[index]}
                    </Typography>
                </Box>
                <Box display='flex'
                     gap="8px"
                     flexDirection="column"
                     maxWidth='422px'
                >
                    <Typography variant="body1" color="#97B1A5">
                        {titleContentCards.addresses}
                    </Typography>

                    <Typography variant="subtitle2" color="#00382A"
                                overflow='hidden'
                                whiteSpace='nowrap'
                                textOverflow='ellipsis'
                                maxWidth='422px'
                        //todo add text from rest
                                title={' м. Київ; вул. Шевченка Тараса (Троєщина), 7; буд. 1'}
                    >
                        {/*//todo add text from api*/}
                        м. Київ; вул. Шевченка Тараса (Троєщина), 7; буд. 1
                    </Typography>
                </Box>
                <Box display='flex'
                     gap="8px"
                     flexDirection="column"
                     maxWidth='108px'
                >
                    <Typography variant="body1" color="#97B1A5">
                        {titleContentCards.apartments}
                    </Typography>
                    {/*//todo add text from api*/}
                    <Typography variant="subtitle2" color="#00382A" overflow='hidden'
                                whiteSpace='nowrap'
                                textOverflow='ellipsis'
                                maxWidth='108px' >
                        1
                    </Typography>
                </Box>
            </Box>
            {
                isEditView && <Box
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                >
                    <Trash2 color='#DE3730' size='22'/>
                </Box>
            }
        </Box>
    );
};

export default ContentCardAdditionData;
