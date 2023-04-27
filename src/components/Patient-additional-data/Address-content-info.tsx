import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { TEXT_ADDRESSES_EDIT_FORM } from "~/components/Patient-additional-data/const-additional-data";
import { Trash2 } from "lucide-react";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/system";
import { IPatientAdditionData, useApiService } from "~/common";

const StackContentBox = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  padding: "16px 32px",
  justifyContent: "space-between",
  alignItems: "center",
  background: theme.palette.custom.neutral99,
  border: `1px solid ${theme.palette.custom.neutralVariant90}`,
  borderRadius: "10px",
}));

export const AddressContentInfo = ({
  patientAdditionData,
  isChangeAddress,
}: IPatientAdditionData) => {
  const { custom } = useTheme().palette;
  const { titleContent } = TEXT_ADDRESSES_EDIT_FORM.addresses;
  const { patient } = useApiService();

  const deleteInfoAddress = () => {
    patient.additionalInfo.delete({ type: "address" }).then();
    // isChangeAddress();
  };
  return (
    <StackContentBox>
      <Stack gap={1}>
        <Typography variant="body2" color={custom.secondary70}>
          {titleContent.type}
        </Typography>
        <Typography variant="subtitle2" color={custom.secondary20}>
          {patientAdditionData?.settlementType}
        </Typography>
      </Stack>
      <Stack gap={1}>
        <Typography variant="body2" color={custom.secondary70}>
          {titleContent.addresses}
        </Typography>
        <Typography variant="subtitle2" color={custom.secondary20}>
          {`${patientAdditionData?.settlementAndStr} буд:${patientAdditionData?.houseNum}`}
        </Typography>
      </Stack>
      <Stack gap={1}>
        <Typography variant="body2" color={custom.secondary70}>
          {titleContent.type}
        </Typography>
        <Typography variant="subtitle2" color={custom.secondary20}>
          {patientAdditionData?.apartmentNum}
        </Typography>
      </Stack>
      <IconButton onClick={deleteInfoAddress}>
        <Trash2 size="24px" color={custom.error50} />
      </IconButton>
    </StackContentBox>
  );
};
