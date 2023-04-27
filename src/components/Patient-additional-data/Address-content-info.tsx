import { useTheme, styled, Typography, Stack, IconButton } from "@mui/material";
import { Trash2 } from "lucide-react";

import { TEXT_ADDRESSES_EDIT_FORM } from "~/components/Patient-additional-data/const-additional-data";

import { TOnSubmitAdditionalData, TPatientAdditionalData } from "~/common";

interface Props {
  onSubmitAdditionalData: TOnSubmitAdditionalData;
  patientAdditionalData: TPatientAdditionalData | null;
}

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
  patientAdditionalData,
  onSubmitAdditionalData,
}: Props) => {
  const { secondary70, secondary20, error50 } = useTheme().palette.custom;
  const { type, addresses } = TEXT_ADDRESSES_EDIT_FORM.addresses.titleContent;
  const { settlementType, settlementAndStr, houseNum, apartmentNum } =
    patientAdditionalData || {};

  const deleteInfoAddress = () => {
    onSubmitAdditionalData({ type: "address" }, { isNeedDeleteData: true });
  };

  return (
    <StackContentBox>
      <Stack gap={1}>
        <Typography variant="body2" color={secondary70}>
          {type}
        </Typography>

        <Typography variant="subtitle2" color={secondary20}>
          {settlementType}
        </Typography>
      </Stack>

      <Stack gap={1}>
        <Typography variant="body2" color={secondary70}>
          {addresses}
        </Typography>

        <Typography variant="subtitle2" color={secondary20}>
          {settlementAndStr} буд:{houseNum}
        </Typography>
      </Stack>

      <Stack gap={1}>
        <Typography variant="body2" color={secondary70}>
          {type}
        </Typography>

        <Typography variant="subtitle2" color={secondary20}>
          {apartmentNum}
        </Typography>
      </Stack>

      <IconButton onClick={deleteInfoAddress}>
        <Trash2 size="24px" color={error50} />
      </IconButton>
    </StackContentBox>
  );
};
