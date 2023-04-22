import { DesktopDatePicker } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";
import { Ref, forwardRef, useState } from "react";
import { CalendarDays } from "lucide-react";

import { CustomizedInput } from ".";

function DatePickerComponent(
  props: any,
  inputRef: Ref<HTMLDivElement>
  // onChange: (newValue: Dayjs | null) => void
) {
  const [value, setValue] = useState<Dayjs | null>(null);
  // dayjs('2014-08-18'),
  const { onChange } = props;

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
    if (onChange && newValue) {
      onChange(newValue.format("YYYY-MM-DD"));
    } else {
      onChange(null);
    }
  };
  
  return (
    <DesktopDatePicker
      components={{
        OpenPickerIcon: () => <CalendarDays size={22} />,
      }}
      value={value}
      onChange={handleChange}
      ref={inputRef}
      renderInput={(params: any) => <CustomizedInput {...params} {...props} />}
    />
  );
}

export const DatePickerInput = forwardRef(DatePickerComponent);
