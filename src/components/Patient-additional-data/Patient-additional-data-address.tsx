import { useState } from "react";
import { useTheme, Typography, Stack } from "@mui/material";
import { Plus } from "lucide-react";

import { TOnSubmitAdditionalData, TPatientAdditionalData } from "~/common";
import { AddressInputForm } from "./Address-input-form";
import { AddressContentInfo } from "~/components/Patient-additional-data/Address-content-info";
import { ButtonEditIcon, ButtonM } from "../atomic";

interface Props {
  onSubmitAdditionalData: TOnSubmitAdditionalData;
  patientAdditionalData: TPatientAdditionalData | null;
}

export const PatientAdditionalDataAddress = ({
  patientAdditionalData,
  onSubmitAdditionalData,
}: Props) => {
  const { custom } = useTheme().palette;
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

        {patientAdditionalData?.settlementType ? (
          <ButtonEditIcon onClick={viewEditButton} disabled={isViewEdit} />
        ) : (
          <ButtonM
            startIcon={<Plus size="24px" />}
            onClick={viewEditButton}
            disabled={isViewEdit}
          >
            Додати
          </ButtonM>
        )}
      </Stack>

      {!patientAdditionalData?.settlementType &&
        (isViewEdit ? null : (
          <Typography variant="body2" color={custom.secondary80}>
            Ви ще не додали свої адреси.
          </Typography>
        ))}

      {patientAdditionalData?.settlementType && (
        <AddressContentInfo
          patientAdditionalData={patientAdditionalData}
          onSubmitAdditionalData={onSubmitAdditionalData}
        />
      )}

      {isViewEdit && (
        <AddressInputForm
          closeEditFrom={closeEditFrom}
          // setIsViewEdit={setIsViewEdit}   ?
          patientAdditionalData={patientAdditionalData}
          onSubmitAdditionalData={onSubmitAdditionalData}
        />
      )}
    </Stack>
  );
};

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
