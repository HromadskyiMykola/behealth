import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export  function Root() {
  return (
    <>
      <Header />

      <Container sx={{ mt: "30px", mb: "30px" }}>
        <Outlet />
      </Container>

      <Footer />
    </>
  );
}
