import { DatePicker, DateTimePicker, DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import CustomizedInput from "./CustomizedInput";

function DatePickerInput(props: any) {
  const [value, setValue] = useState<Dayjs | null>(
    // dayjs('2014-08-18'),
  );

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        value={value}
        onChange={handleChange}
        renderInput={(params: any) => (
          <CustomizedInput {...params} {...props} />
        )}
      />
    </LocalizationProvider>
  );
}

export default DatePickerInput