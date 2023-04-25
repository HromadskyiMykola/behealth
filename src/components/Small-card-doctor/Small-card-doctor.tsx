import { useState } from "react";
import {
  styled,
  useTheme,
  Stack,
  Box,
  Button,
  Modal,
  Paper,
  List,
  ListItem,
  Typography,
  IconButton,
} from "@mui/material";
import { XIcon } from "lucide-react";
import { useAuthProvider, useModalState } from "~/providers";
import { FormModal } from "../user-auth";

import {
  AT_RECEPTION,
  POP_UP_DOC_APPOINTMENT_1,
  POP_UP_DOC_APPOINTMENT_1_VALUE,
} from "~/components/Small-card-doctor/constants-small-card-doctor";
import { HeaderItem } from "~/components/Small-card-doctor/Header-item";
import { MapInfoDoctor } from "~/components/Map-info-doctor";
import { PopUpDocAppointment2 } from "~/components/Small-card-doctor/Pop-up-doc-appointment-2";
import { CalendarSlick } from "~/components/Small-card-doctor/Calendar-slick/Calendar-slick";
import { CustomizedPaper } from "~/components/atomic";

const BoxCalendar = styled("div")(({ theme }) => ({
  background: "#F6F8F7",
  width: "332px",
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
  const { authenticatedUser } = useAuthProvider();
  const { setOpenMainModal, setSimpleModalMessage } = useModalState();

  const [open, setOpen] = useState(false);
  const [confirm, setConfirm] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setConfirm(false);
  };

  const handleConfirm = () => {
    if (!authenticatedUser) {
      console.log("do");
      setOpenMainModal(true);
      return;
    }
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

          <Stack
            maxWidth="620px"
            width="100%"
            gap="38px"
            p="16px"
            borderRadius="10px"
            sx={{ border: `1px solid ${custom.neutral90}` }}
          >
            <MapInfoDoctor />

            <Typography
              variant="caption"
              component="p"
              color={custom.neutral70}
            >
              {AT_RECEPTION}
            </Typography>
          </Stack>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          gap="16px"
        >
          <BoxCalendar>
            <CalendarSlick />
          </BoxCalendar>
          <Button
            variant="contained"
            sx={{ width: "100%", height: "40px" }}
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
              <IconButton
                sx={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                }}
                onClick={() => setOpen(false)}
              >
                <XIcon />
              </IconButton>

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
              <FormModal />
            </ModalPaper>
          </Modal>
        </Box>
      </Box>
    </CustomizedPaper>
  );
};
