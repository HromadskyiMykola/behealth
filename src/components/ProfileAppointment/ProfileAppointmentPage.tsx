import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { PROFILE_APPOINTMENT } from "./profile-appointment.constants";
import { ProfileAppointmentList } from "./ProfileAppointmentList";
import { IProfileAppointmentCard } from "~/common/types-and-interfaces";
import { Pagination } from "./Pagination";
import { DatePickerInput } from "../atomic";
import { ButtonsFiltering } from "./ButtonsFiltering";

export const ProfileAppointmentPage = () => {
  const {
    title: { scheduleTitle, historyTitle },
    cards,
  } = PROFILE_APPOINTMENT;
  const [page, setPage] = useState<number>(1);
  const [scheduleAppointment, setScheduleAppointment] = useState<
    IProfileAppointmentCard[]
  >([]);
  const [historyAppointment, setHistoryAppointment] = useState<
    IProfileAppointmentCard[]
  >([]);
  const [activeButton, setActiveButton] = useState<string>("0");

  useEffect(() => {
    const scheduleAppointmentArr: IProfileAppointmentCard[] = [];
    const historyAppointmentArr: IProfileAppointmentCard[] = [];

    cards.forEach((card: IProfileAppointmentCard) => {
      if (card.status === "Заплановано") {
        scheduleAppointmentArr.push(card);
      } else {
        historyAppointmentArr.push(card);
      }
    });

    setScheduleAppointment(scheduleAppointmentArr);
    setHistoryAppointment(historyAppointmentArr);
  }, [cards]);

  useEffect(() => {
    console.log(page);
  }, [page]);

  const CardsFiltering = (e: React.MouseEvent<HTMLButtonElement>) => {
    setActiveButton(e.currentTarget.dataset.buttonId as string);
    switch (e.currentTarget.dataset.buttonId) {
      case "0":
        setHistoryAppointment(
          cards.filter(
            (_: IProfileAppointmentCard) => _.status !== "Заплановано"
          )
        );
        break;
      case "1":
        setHistoryAppointment(
          cards.filter((_: IProfileAppointmentCard) => _.status === "Скасовано")
        );
        break;
      case "2":
        setHistoryAppointment(
          cards.filter((_: IProfileAppointmentCard) => _.status === "Завершено")
        );
        break;
    }
  };

  return (
    <>
      <Box
        sx={{
          mb: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          bgcolor: "#fff",
          borderRadius: "12px",
          boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.02)",
          p: "32px",
        }}
      >
        <Box>
          <Typography variant="h5" sx={{ color: "#00382A", mb: "24px" }}>
            {scheduleTitle}
          </Typography>
          {scheduleAppointment && (
            <ProfileAppointmentList cards={scheduleAppointment} />
          )}
        </Box>
        <Box>
          <Box
            sx={{
              mb: "12px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" sx={{ color: "#00382A" }}>
              {historyTitle}
            </Typography>
            <Box sx={{ display: "flex", gap: "16px", alignItems: "center" }}>
              <Typography variant="caption" sx={{ color: "#A9ACA9" }}>
                від
              </Typography>
              <DatePickerInput
                sx={{
                  width: "170px", // by layout 150px
                  "& .MuiInputBase-input": {
                    p: "12px",
                    fontSize: "16px",
                  },
                }}
                onChange={(e: any) => console.log(e.target.value)}
              />
              <Typography variant="caption" sx={{ color: "#A9ACA9" }}>
                до
              </Typography>
              <DatePickerInput
                sx={{
                  width: "170px", // by layout 150px
                  "& .MuiInputBase-input": {
                    p: "12px",
                    fontSize: "16px",
                  },
                }}
                onChange={(e: any) => console.log(e.target.value)}
              />
            </Box>
          </Box>
          <ButtonsFiltering
            CardsFiltering={CardsFiltering}
            activeButton={activeButton}
          />
          {historyAppointment && (
            <ProfileAppointmentList cards={historyAppointment} />
          )}
        </Box>
      </Box>
      <Box
        sx={{
          bgcolor: "#fff",
          borderRadius: "12px",
          p: "16px 32px",
        }}
      >
        <Pagination count={10} setState={setPage} />
      </Box>
    </>
  );
};
