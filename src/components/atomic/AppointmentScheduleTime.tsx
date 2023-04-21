import { useState } from "react";

import {
  Button,
  Typography,
  Stack,
  styled,
  Select,
  useTheme,
  MenuItem,
} from "@mui/material";

import dayjs, { Dayjs } from "dayjs";
import { KeyboardArrowDown } from "@mui/icons-material";
import { GridIcon } from "lucide-react";

const TimeButton = styled(Button)`
  height: 44px;
  width: 68px;
`;

const timeSlots = [
  ["09:00", "09:20", "09:40", "10:00", "10:20"],
  ["10:40", "11:00", "11:20", "11:40", "12:00"],
  ["12:20", "12:40", "13:00", "13:20", "13:40"],
  ["14:00", "14:20", "14:40", "15:00", "15:20"],
  ["15:40", "16:00", "16:20", "16:40", "17:00"],
];

interface TimePickerProps {
  selectedTime: string | null;
  setSelectedTime: (time: string) => void;
}

const TimePicker = ({ selectedTime, setSelectedTime }: TimePickerProps) => (
  <Stack spacing={2}>
    {timeSlots.map((row, i) => (
      <Stack direction="row" spacing={2} key={i}>
        {row.map((time) => (
          <TimeButton
            key={time}
            variant={time === selectedTime ? "contained" : "text"}
            color={time === selectedTime ? "primary" : "inherit"}
            onClick={() => setSelectedTime(time)}
          >
            {time}
          </TimeButton>
        ))}
      </Stack>
    ))}
  </Stack>
);

export const AppointmentScheduleTime = () => {
  const { custom } = useTheme().palette;
  // const [selectedTime, setSelectedTime] = useState<Dayjs | null>(dayjs());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  return (
    <Stack
      p="32px"
      height="574px"
      width="656px"
      alignItems="center"
      sx={{ backgroundColor: "#F6F8F7" }}
    >
      <Stack
        height="100%"
        width="404px"
        gap="24px"
        alignItems="stretch"
        justifyContent="space-between"
      >
        <Typography textAlign="center">Виберіть зручний час</Typography>

        <Select
          defaultValue="Платний"
          IconComponent={KeyboardArrowDown}
          renderValue={(value) => {
            return (
              <Stack direction="row" gap={1}>
                <GridIcon color={custom.neutral70} />
                {value}
              </Stack>
            );
          }}
        >
          <MenuItem value="Платний">Платний</MenuItem>
          <MenuItem value="Безоплатний">Безоплатний</MenuItem>
          <MenuItem value="Бартер">Бартер</MenuItem>
        </Select>

        <TimePicker
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
        />

        <Button onClick={() => {}} variant="contained">
          Записатися
        </Button>
      </Stack>
    </Stack>
  );
};
