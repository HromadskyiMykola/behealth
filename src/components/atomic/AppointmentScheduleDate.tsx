import { useState } from "react";

import {
  TextField,
  IconButton,
  Typography,
  Stack,
  styled,
} from "@mui/material";

import { StaticDatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

interface CustomToolBarProps {
  date: Dayjs | null;
  onChange: (date: Dayjs) => void;
}

const CustomToolBar = ({ date, onChange }: CustomToolBarProps) => {
  const handleMonthChange = (forward: boolean) => {
    if (!date) return;

    const newDate = forward ? date.add(1, "month") : date.subtract(1, "month");

    onChange(newDate);
  };

  const monthName =
    date?.format("MMMM").replace(/^[слбктчвжг]/, (c) => c.toUpperCase()) || "";

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      width="404px"
    >
      <IconButton onClick={() => handleMonthChange(false)}>
        <ChevronLeftIcon />
      </IconButton>

      <Typography variant="subtitle1">{monthName}</Typography>

      <IconButton onClick={() => handleMonthChange(true)}>
        <ChevronRightIcon />
      </IconButton>
    </Stack>
  );
};

const StyledStaticDatePicker = styled(StaticDatePicker)`
  .MuiCalendarPicker-root,
  .css-epd502 {
    height: 100%;
    width: 404px;
    max-height: 392px;
  }
  .PrivatePickersSlideTransition-root {
    height: 316px;
  }

  .MuiPickerStaticWrapper-content {
    background-color: transparent;
  }

  .MuiDayPicker-monthContainer {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .MuiDayPicker-weekContainer {
    margin: 0;
    justify-content: space-between;
  }

  .MuiDayPicker-weekDayLabel {
    height: 44px;
    width: 44px;
    color: #212121;
    margin: 0;
    font-size: 16px;
  }

  .MuiButtonBase-root,
  .MuiPickersDay-root {
    height: 44px;
    width: 44px;
    border-radius: 8px;
    margin: 0;
    font-size: 16px;
    background-color: transparent;
  }

  .MuiDayPicker-header {
    height: 60px;
    border-bottom: 0.75px solid #b2ccc0;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 16px;
  }

  .MuiPickersCalendarHeader-root {
    display: none;
  }

  .Mui-selected {
    background-color: #3abd98;
  }
`;

export const AppointmentScheduleDate = () => {
  const [value, setValue] = useState<Dayjs | null>(dayjs());

  const handleChange = (value: unknown, keyboardInputValue?: string) => {
    setValue(value as Dayjs | null);
  };

  return (
    <Stack
      p="32px"
      alignItems="center"
      height="574px"
      width="656px"
      justifyContent="space-between"
      sx={{ backgroundColor: "#F6F8F7" }}
    >
      <Typography>Виберіть зручну дату</Typography>

      <CustomToolBar date={value} onChange={handleChange} />

      <StyledStaticDatePicker
        displayStaticWrapperAs="desktop"
        value={value}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} />}
        dayOfWeekFormatter={(day) =>
          day.charAt(0).toUpperCase() + day.charAt(1)
        }
      />
    </Stack>
  );
};
