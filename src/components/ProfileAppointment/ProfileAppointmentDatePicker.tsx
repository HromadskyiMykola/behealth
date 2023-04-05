import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import DateRangePickerDay from '@mui/lab/DateRangePickerDay';

export const ProfileAppointmentDatePicker = () => {

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            {/* <DateRangePickerDay calendars={1} /> */}
        </LocalizationProvider>
    );
};
