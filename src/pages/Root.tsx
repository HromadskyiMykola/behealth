import { Outlet } from "react-router-dom";

import { ModalStateProvider } from "~/providers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import uk from "dayjs/locale/uk";

import Footer from "~/components/Footer/Footer";
import Header from "~/components/Header/Header";
import { SimpleModal } from "~/components/atomic";

dayjs.locale(uk);

export function Root() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ModalStateProvider>
        <Header />
        <Outlet />
        <Footer />
        <SimpleModal />
      </ModalStateProvider>
    </LocalizationProvider>
  );
}
