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
import ListItem from "@mui/material/ListItem";
import {
  POP_UP_DOC_APPOINTMENT_1,
  POP_UP_DOC_APPOINTMENT_1_VALUE,
} from "~/components/Small-card-doctor/constants-small-card-doctor";

const BoxInfo = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "38px",
  padding: "16px",
  borderRadius: "10px",
  border: `1px solid ${theme.palette.custom.neutral90}`,
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

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
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
              Прийом з лікарем може здійснитися як у форматі онлайн-консультації
              за допомогою засобів зв’язку, так і при безпосередньому
              відвідуванні медустанови.
            </Typography>
          </BoxInfo>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Box width="332px" height="306px" color="red"></Box>
          <Button
            variant="contained"
            sx={{ width: "100%" }}
            onClick={() => setOpen(true)}
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
              <Box display="flex" justifyContent="center">
                <Typography variant="h5">Запис до лікаря</Typography>
              </Box>
              <Box>
                <CustomList>
                  {POP_UP_DOC_APPOINTMENT_1.map(
                    (item: string, index: number) => {
                      return (
                        <CustomListItem>
                          <Typography variant="subtitle2" component="span">
                            {item}
                          </Typography>
                          <Typography variant="body2" component="span">
                            {
                              Object.values(POP_UP_DOC_APPOINTMENT_1_VALUE)[
                                index
                              ]
                            }
                          </Typography>
                        </CustomListItem>
                      );
                    }
                  )}
                </CustomList>
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                >
                  <Button variant="outlined" sx={{ p: "10px 45px" }}>
                    Скасувати
                  </Button>
                  <Button variant="contained">Продовжити</Button>
                </Box>
              </Box>
            </ModalPaper>
          </Modal>
        </Box>
      </Box>
    </CustomizedPaper>
  );
};
