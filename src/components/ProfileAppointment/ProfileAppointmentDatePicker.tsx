import * as React from 'react';
import { LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DateRangePickerDay from '@mui/lab/DateRangePickerDay';

export const ProfileAppointmentDatePicker = () => {

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateRangePickerDay calendars={1} />
        </LocalizationProvider>
    );
};
