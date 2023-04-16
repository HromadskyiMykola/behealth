import Box from "@mui/material/Box";
import React from "react";
import { HeaderItem } from "~/components/Small-card-doctor/Header-item";
import { styled } from "@mui/system";
import { MapInfoDoctor } from "~/components/Map-info-doctor";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";
import Button from "@mui/material/Button";
import { CustomizedPaper } from "~/components/atomic";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ListItem from "@mui/material/ListItem";
import { X, ChevronDown } from "lucide-react";
import {
  AT_RECEPTION,
  BUTTON_SHOW_MORE,
  POP_UP_DOC_APPOINTMENT_1,
  POP_UP_DOC_APPOINTMENT_1_VALUE,
} from "~/components/Small-card-doctor/constants-small-card-doctor";
import { PopUpDocAppointment2 } from "~/components/Small-card-doctor/Pop-up-doc-appointment-2";
import { useAuth } from "~/providers";
import { Calendar } from "~/components/Small-card-doctor/Calendar";

const BoxInfo = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "38px",
  padding: "16px",
  borderRadius: "10px",
  border: `1px solid ${theme.palette.custom.neutral90}`,
}));
const CloseBox = styled("div")(({ theme }) => ({
  display: "flex",
  position: "absolute" as "absolute",
  top: "21px",
  right: "21px",
  width: "25px",
  height: "25px",
  justifyContent: "center",
  alignItems: "center",
  color: theme.palette.custom.primary50,
}));
const BoxCalendar = styled("div")(({ theme }) => ({
  background: "#F6F8F7",
  width: "332px",
  height: "306px",
  borderRadius: "10px",
  padding: "26px 32px",
}));
const ModalPaper = styled(Paper)(({ theme }) => ({
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "433px",
  padding: "32px",
  borderRadius: "12px",
  display: "flex",
  flexDirection: "column",
  gap: "32px",
}));
const CustomList = styled(List)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  listStyleType: "disc",
  paddingLeft: "32px",
}));
const CustomListItem = styled(ListItem)(({ theme }) => ({
  display: "list-item",
  paddingLeft: "0",
  paddingRight: "0",
  paddingTop: "0",
  paddingBottom: "0",
  "& .MuiListItem-root": {
    display: "list-item",
    p: "32px",
  },
}));

export const SmallCardDoctor = () => {
  const { custom } = useTheme().palette;
  const { authenticatedUser } = useAuth();

  const [open, setOpen] = React.useState(false);
  const [confirm, setConfirm] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setConfirm(false);
  };

  const handleConfirm = () => {
    // !!authenticatedUser &&
    setConfirm(true);
    setTimeout(() => {
      setOpen(false);
      setConfirm(false);
    }, 30 * 1000);
  };
  const handleCloseConfirm = () => {
    setOpen(false);
    setConfirm(false);
  };

  return (
    <CustomizedPaper>
      <Box display="flex" gap="32px">
        <Box display="flex" flexDirection="column" gap="32px">
          <HeaderItem />
          <BoxInfo>
            <MapInfoDoctor />
            <Typography
              variant="caption"
              component="p"
              color={custom.neutral70}
            >
              {AT_RECEPTION}
            </Typography>
          </BoxInfo>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <BoxCalendar>
            <Calendar />
            <Box display="flex" justifyContent="center">
              <Button variant="text" endIcon={<ChevronDown />}>
                {BUTTON_SHOW_MORE}
              </Button>
            </Box>
          </BoxCalendar>
          <Button
            variant="contained"
            sx={{ width: "100%" }}
            onClick={handleOpen}
          >
            Записатися
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="PopUp-Appointment-1"
            aria-describedby="PopUp-Appointment-1"
          >
            <ModalPaper>
              <CloseBox onClick={() => setOpen(false)}>
                <X size="24px" />
              </CloseBox>
              <Box display="flex" justifyContent="center">
                <Typography variant="h5">Запис до лікаря</Typography>
              </Box>
              <Box>
                <CustomList>
                  {POP_UP_DOC_APPOINTMENT_1.map(
                    (item: string, index: number) => {
                      return (
                        <CustomListItem key={`${item}-label`}>
                          <Typography variant="subtitle2" component="span">
                            {item}
                          </Typography>
                          <Typography variant="body2" component="span">
                            {` ${
                              Object.values(POP_UP_DOC_APPOINTMENT_1_VALUE)[
                                index
                              ]
                            }`}
                          </Typography>
                        </CustomListItem>
                      );
                    }
                  )}
                </CustomList>
                <Box
                  pt={4}
                  display="flex"
                  flexDirection="row"
                  // justifyContent="space-between"
                  gap="24px"
                >
                  <Button
                    variant="outlined"
                    fullWidth
                    onClick={() => setOpen(false)}
                  >
                    Скасувати
                  </Button>
                  <Button variant="contained" fullWidth onClick={handleConfirm}>
                    Продовжити
                  </Button>
                </Box>
                {confirm && <PopUpDocAppointment2 close={handleCloseConfirm} />}
              </Box>
            </ModalPaper>
          </Modal>
        </Box>
      </Box>
    </CustomizedPaper>
  );
};
