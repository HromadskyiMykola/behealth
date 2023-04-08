import { Outlet } from "react-router-dom";

import Footer from "~/components/Footer/Footer";
import Header from "~/components/Header/Header";

export function Root() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
