import { KeyboardArrowDown } from "@mui/icons-material";
import { MenuItem, Paper, Select, Typography, styled } from "@mui/material";

const StyledSelect = styled(Select)(({ theme }) => ({
  width: "100%",
  "&:focus": {
    outline: "none",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "transparent",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "transparent !important",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "transparent !important",
  },
  ...theme.typography.body2,
}));

export const SelectBar = () => {
  return (
    <Paper sx={{ mb: "24px", p: "10px 16px", borderRadius: "8px" }}>
      <StyledSelect IconComponent={KeyboardArrowDown} value={1}>
        <MenuItem value={1}>
          <Typography variant="body2">Рекомендовані</Typography>
        </MenuItem>

        <MenuItem value={2}>
          <Typography variant="body2">Молоді</Typography>
        </MenuItem>

        <MenuItem value={3}>
          <Typography variant="body2">Старі Ж)</Typography>
        </MenuItem>
      </StyledSelect>
    </Paper>
  );
};
