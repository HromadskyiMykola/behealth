import { Paper, useTheme } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export const PaginationBottomBar = () => {
  const { palette } = useTheme();

  return (
    <Paper
      sx={{
        mt: "24px",
        p: "16px 32px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Pagination
        count={10}
        variant="outlined"
        shape="rounded"
        color="primary"
        size="large"
        sx={{
          "& .Mui-selected": {
            backgroundColor: palette.primary.main,
            color: `${palette.custom.primary100} !important`,
            opacity: 0.8,
          },
          "& .MuiPaginationItem-root": {
            color: palette.custom.secondary20,
            //   fontFamily: "Montserrat",
          },
        }}
      />
    </Paper>
  );
};
