import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function DateCalendarValue() {
    const todaysDate = new Date()
    const [value, setValue] = React.useState(dayjs(todaysDate));

    return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DateCalendar', 'DateCalendar']}>
        <DemoItem label="Controlled calendar">
            <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} />
        </DemoItem>
        </DemoContainer>
    </LocalizationProvider>
    );
}