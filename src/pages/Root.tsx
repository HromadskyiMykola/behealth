import { Outlet } from "react-router-dom";
import Footer from "~/components/Footer/Footer";
import Header from "~/components/Header/Header";
import { SimpleModal } from "~/components/atomic";
import { ModalStateProvider } from "~/providers";

export function Root() {
  return (
    <ModalStateProvider>
      <Header />
      <Outlet />
      <Footer />
      <SimpleModal />
    </ModalStateProvider>
  );
}
