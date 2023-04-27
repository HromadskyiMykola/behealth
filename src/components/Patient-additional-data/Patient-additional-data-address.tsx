import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Plus } from "lucide-react";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material";
import { AddressInputForm } from "./Address-input-form";
import { AddressContentInfo } from "~/components/Patient-additional-data/Address-content-info";
import { IPatientAdditionData } from "~/common";

const PatientAdditionalDataAddress = ({
  patientAdditionData,
  isChangeAddress,
}: IPatientAdditionData) => {
  const { custom } = useTheme().palette;
  console.log(patientAdditionData);
  const [isViewEdit, setIsViewEdit] = useState(false);

  const viewEditButton = () => {
    setIsViewEdit(true);
  };
  const closeEditFrom = () => {
    setIsViewEdit(false);
  };
  return (
    <Stack spacing={2}>
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h5">Адреси</Typography>
        <Button
          startIcon={<Plus size="24px" />}
          onClick={viewEditButton}
          disabled={isViewEdit}
        >
          Змінити
        </Button>
      </Stack>
      {!patientAdditionData?.settlementType && (
        <Typography variant="body2" color={custom.secondary80}>
          Ви ще не додали свої адреси.
        </Typography>
      )}
      {patientAdditionData?.settlementType && (
        <AddressContentInfo
          patientAdditionData={patientAdditionData}
          isChangeAddress={isChangeAddress}
        />
      )}
      {isViewEdit && (
        <AddressInputForm
          closeEditFrom={closeEditFrom}
          patientAdditionData={patientAdditionData}
          isChangeAddress={isChangeAddress}
          setIsViewEdit={setIsViewEdit}
        />
      )}
    </Stack>
  );
};

export default PatientAdditionalDataAddress;

// <Box display="flex" flexDirection="column" gap="16px">
//     <Box display="flex" justifyContent="space-between">
//         <Typography variant="h5">{item}</Typography>
//         {
//             //todo написати нормальну логіку з ітерацією не по масиву а по масиву з обєктами
//             item !== titleCards[2] && (
//                 <Button
//                     variant="text"
//                     startIcon={
//                         !valuePatientAdditionData ? (
//                             <Plus size="22" />
//                         ) : (
//                             <Edit size="22" />
//                         )
//                     }
//                     onClick={() => setIsEditView(true)}
//                     disabled={isEditView}
//                 >
//                     {!valuePatientAdditionData ? "Додати" : "Змінити"}
//                 </Button>
//             )
//         }
//     </Box>
//     <AdditionalDataContentCard
//         valuePatientAdditionData={valuePatientAdditionData}
//         index={index}
//         isEditView={isEditView}
//         isDataEmpty={isDataEmpty}
//         closeEditForm={closeEditForm}
//     />
// </Box>
// );
// };
