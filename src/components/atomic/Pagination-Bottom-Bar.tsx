import { Pagination,  useTheme } from "@mui/material";

export const PaginationBottomBar = () => {
  const { custom, primary } = useTheme().palette;

  return (
    <Pagination
      count={10}
      variant="outlined"
      shape="rounded"
      color="primary"
      size="large"
      sx={{
        "& .MuiPagination-ul": {
          gap: "16px",
        },
        "& .MuiButtonBase-root": {
          color: custom.secondary20,
          borderRadius: "6px",
          border: "1px solid #B2CCC0",
        },
        "& .MuiPaginationItem-previousNext": {
          color: primary.main,
          border: "none",
        },
        "& .Mui-selected": {
          backgroundColor: primary.main,
          color: `${custom.primary100} !important`,
          border: "none",
          opacity: 1,
          "&:hover": {
            backgroundColor: primary.main,
          },
        },
      }}
    />
  );
};
