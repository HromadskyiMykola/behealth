import { Stack, Typography, useTheme } from "@mui/material";

export const OptionsWrapper = ({
  children,
  label,
  variant = "subtitle2",
}: any) => {
  const { custom } = useTheme().palette;

  return (
    <Stack gap="20px">
      <Typography variant={variant} color={custom.primary20}>
        {label}
      </Typography>

      <Stack gap="16px">{children}</Stack>
    </Stack>
  );
};
