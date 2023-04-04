import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function NotFound() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "60vh",
        gap: 4,
      }}
    >
      <Typography variant="h1">{"404"}</Typography>
      <Typography variant="h4">
        {"Бі-буп.. Такої сторінки не існує."}
      </Typography>
      <Button variant="contained" sx={{ mt: 2 }} onClick={() => navigate(-1)}>
        {"Повернутись"}
      </Button>
    </Box>
  );
}
