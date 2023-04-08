import React, { useState } from "react";
import Typography from '@mui/material/Typography'
import {emptyText} from "../const-additional-data";
import ChangeDataAddresessForm
    from "~/components/tads.additionalData/content-components-addition-data/Change-data-addresess-form";
import ContentCardAdditionData from "./Content-card-addition-data";


export const AdditionalDataContentCard = ({data, index, isEditView, isDataEmpty }: any) => {



    const renderCard = (index: number) => {
        switch (index){
            case  0 :
                return <ChangeDataAddresessForm/>
            case  1 :
                return 'lox'
            case 2:
                return 'petiy'
        }
    }
    return <>
        {!isDataEmpty ? (
            <ContentCardAdditionData index={index} isEditView={isEditView}/>
        ) : (
            <Typography variant="body2"
                        color='text.secondary'>{emptyText[index]}</Typography>
        )}
        {isEditView && renderCard(index)}
    </>

};


