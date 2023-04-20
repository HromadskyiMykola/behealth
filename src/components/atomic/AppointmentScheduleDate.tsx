import {
  IconButton,
  Typography,
  Box,
  Stack,
  styled,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { TextField } from "@mui/material";
import { StaticDatePicker } from "@mui/x-date-pickers";
import { FC, useState } from "react";

interface CustomToolBarProps {
  date: Date | null;
  onChange: (date: Date) => void;
}

const CustomToolBar: FC<CustomToolBarProps> = ({ date, onChange }) => {
  const handleMonthChange = (forward: boolean) => {
    if (!date) return;

    const newDate = new Date(date);
    const month = newDate.getMonth();

    if (forward) {
      newDate.setMonth(month + 1);
    } else {
      newDate.setMonth(month - 1);
    }

    onChange(newDate);
  };

  let monthName = date?.toLocaleString("uk-UA", { month: "long" }) || "";
  monthName = monthName.replace(/^[слбктчвжг]/, (c) => c.toUpperCase());

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        maxWidth: "404px",
        width: "100%",
        mb: 2,
        
      }}
    >
      <IconButton onClick={() => handleMonthChange(false)}>
        <ArrowBackIos />
      </IconButton>
      <Typography variant="subtitle1">{monthName}</Typography>
      <IconButton onClick={() => handleMonthChange(true)}>
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
};

const StyledStaticDatePicker = styled(StaticDatePicker)`
  & .PrivatePickersSlideTransition-root {
    overflow-x: unset;
  }
  & .MuiPickerStaticWrapper-root,
  .MuiPickerStaticWrapper-content,
  .MuiCalendarOrClockPicker-root,
  .MuiCalendarPicker-root,
  .css-epd502 {
    height: 392px;
    width: 404px;
    max-height: 392px;
  }
  & .MuiPickerStaticWrapper-content {
    background-color: transparent;
  }
  & .MuiDayPicker-weekContainer {
    margin: 24px 0;
  }
  & .MuiTypography-root {
    margin: 0 8px;
  }
  & .MuiButtonBase-root,
  .MuiPickersDay-root {
    border-radius: 8px;
    margin: 0 8px;
    font-size: 16px;
    background-color: transparent;
  }
  & .MuiPickersCalendarHeader-root {
    display: none;
  }
  & .Mui-selected {
    background-color: #3abd98;
  }
`;

export const AppointmentScheduleDate = () => {
  const [value, setValue] = useState<Date | null>(new Date());

  const handleChange = (value: unknown, keyboardInputValue?: string) => {
    setValue(value as Date | null);
  };

  return (
    <Stack
      p={4}
      spacing={3}
      alignItems="center"
      maxWidth="656px"
      sx={{ backgroundColor: "#F6F8F7" }}
    >
      <Typography>Виберіть зручну дату</Typography>
      <CustomToolBar date={value} onChange={handleChange} />
      <StyledStaticDatePicker
        displayStaticWrapperAs="desktop"
        value={value}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </Stack>
  );
};
