import { useTheme, styled, Typography, Stack, IconButton } from "@mui/material";
import { Trash2 } from "lucide-react";

import { TEXT_ADDRESSES_EDIT_FORM } from "~/components/Patient-additional-data/const-additional-data";

import { IOnSubmitPatientData, TPatientAdditionalData } from "~/common";

interface Props {
  onSubmitAdditionalData: IOnSubmitPatientData;
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

export const WorkplaceInfo = ({
  patientAdditionalData,
  onSubmitAdditionalData,
}: Props) => {
  const { secondary70, secondary20, error50 } = useTheme().palette.custom;
  const { type, addresses, other } =
    TEXT_ADDRESSES_EDIT_FORM.workPlace.titleRestData;
  const { employmentStatus, workplace, jobTitle } = patientAdditionalData || {};

  const deleteInfoAddress = () => {
    onSubmitAdditionalData({ type: "work" }, { isNeedDeleteData: true });
  };

  return (
    <StackContentBox>
      <Stack gap={1}>
        <Typography variant="body2" color={secondary70}>
          {type}
        </Typography>

        <Typography variant="subtitle2" color={secondary20}>
          {employmentStatus}
        </Typography>
      </Stack>

      <Stack gap={1}>
        <Typography variant="body2" color={secondary70}>
          {addresses}
        </Typography>

        <Typography variant="subtitle2" color={secondary20}>
          {workplace}
        </Typography>
      </Stack>

      <Stack gap={1}>
        <Typography variant="body2" color={secondary70}>
          {other}
        </Typography>

        <Typography variant="subtitle2" color={secondary20}>
          {jobTitle}
        </Typography>
      </Stack>

      <IconButton onClick={deleteInfoAddress}>
        <Trash2 size="24px" color={error50} />
      </IconButton>
    </StackContentBox>
  );
};
