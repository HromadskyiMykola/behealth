import { styled } from "@mui/system";

export const TextWithIcon = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: "12px",
  color: theme.palette.custom.neutral40,
}));
