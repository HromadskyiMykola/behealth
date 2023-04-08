import {
  DatePicker,
  DateTimePicker,
  DesktopDatePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { Ref, forwardRef, useState } from "react";
import { CalendarDays } from "lucide-react";

import { CustomizedInput } from ".";

function DatePickerComponent(props: any, inputRef: Ref<HTMLDivElement>) {
  const [value, setValue] = useState<Dayjs | null>();
  // dayjs('2014-08-18'),

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };
  return (
    // <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        components={{
          OpenPickerIcon: () => <CalendarDays size={22} />,
        }}
        value={value}
        onChange={handleChange}
        ref={inputRef}
        renderInput={(params: any) => (
          <CustomizedInput {...params} {...props} />
        )}
      />
    // </LocalizationProvider>
  );
}

export const DatePickerInput = forwardRef(DatePickerComponent);