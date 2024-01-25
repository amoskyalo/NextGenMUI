import React from 'react';
import dayjs from 'dayjs';
import { useState } from 'react';
import { Box, Divider, Button, Chip } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DateCalendar, PickersDay } from '@mui/x-date-pickers';

const CalendarComponent = ({ onChange, value, ...props }) => (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
            onChange={value => onChange(value)}
            views={['month', 'day']}
            onViewChange={() => null}
            {...props}
        />
    </LocalizationProvider>
);

const dates = new Date();
const currentDate = dates.getDate();
const currentMonth = dates.getMonth();
const currentYear = dates.getFullYear();

function d() {
    const padToTwoDigits = (num) => num.toString().padStart(2, "0");

    const day = padToTwoDigits(currentDate);
    const startMonth = padToTwoDigits(currentMonth === 0 ? 12 : currentMonth);
    const endMonth = padToTwoDigits(currentMonth + 1);

    const startYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    const endYear = currentYear;

    const startValues = `${startYear}-${startMonth}-${day}`;
    const endValues = `${endYear}-${endMonth}-${day}`;

    return { startValues, endValues };
}

const CalenderModel = ({ onClose, onChange, onApplyDateChanges, resetDates, setDates }) => {
    const [datesValues, setDatesValues] = useState({ sd: null, ed: null });
    const { sd, ed } = datesValues;

    const handleChangeDay = (values) => {
        if (sd && ed && (values?.$D < sd?.$D)) {
            setDatesValues(prev => ({ ...prev, sd: values }))
        } else if (!sd) {
            setDatesValues(prev => ({ ...prev, sd: values }))
            onChange('startDate', values);
        } else {
            if ((values?.$D !== sd?.$D) || (values?.$M !== sd?.$M)) {
                setDatesValues(prev => ({ ...prev, ed: values }))
                onChange('endDate', values);
            }
        }
    };

    const handleSelection = (day) => {
        if (!ed || !sd) return { f: null, s: null };

        const startDay = sd.$D;
        const endDay = ed.$D;
        const isSameMonth = sd.$M === ed.$M;

        const createDayRange = (start, end) => Array.from({ length: end - start + 1 }, (_, i) => start + i);

        const daysWithinFirstCalendar = isSameMonth ? createDayRange(startDay, endDay) : createDayRange(1, startDay - 1);
        const daysWithinSecondCalendar = isSameMonth ? [] : createDayRange(1, endDay);

        function getX() {
            const p = daysWithinFirstCalendar.includes(day.$D);

            return !isSameMonth ? p : p && (day?.$M === sd?.$M)
        }

        const x = getX()
        const y = daysWithinSecondCalendar.includes(day.$D);

        return { f: isSameMonth ? x : !x, s: isSameMonth ? x : y };
    };

    const handleSelectRange = (range) => {
        const v = range.toLowerCase();
        const lastMonth = currentMonth === 0 ? 11 : currentMonth;
        const year = currentMonth === 0 ? currentYear - 1 : currentYear;

        let dateRange;

        switch (v) {
            case 'this week':
                dateRange = { ed: dayjs(), sd: dayjs().subtract(7, 'day') }
                break;
            case 'last 7 days':
                dateRange = { ed: dayjs().subtract(7, 'day'), sd: dayjs().subtract(14, 'day') }
                break;
            case 'current month':
                dateRange = { ed: dayjs().date(currentDate), sd: dayjs().date(1) }
                break;
            case 'last month':
                dateRange = { ed: dayjs().year(year).month(lastMonth).date(dayjs(lastMonth).daysInMonth()), sd: dayjs().year(year).month(lastMonth).date(1) }
                break;
            case 'reset':
                setDatesValues({ sd: null, ed: null });
                resetDates();
                break;
        }

        if (v !== 'reset') {
            setDatesValues(dateRange);
            setDates({ startDate: dateRange.sd, endDate: dateRange.ed })
        }
    };

    return (
        <Box sx={{ backgroundColor: "white", pt: 2, px: 3, borderRadius: 3, width: "max-content" }}>
            <Box display="flex" mb={1}>
                <Box sx={{ display: "flex" }}>
                    <Box sx={{ display: 'flex', flexDirection: "column", rowGap: 2, mt: 3, pr: 4 }}>
                        {
                            ["This Week", "Last 7 days", "Current Month", "Last Month", "Reset"].map(val => (
                                <Chip
                                    label={val}
                                    sx={{ cursor: "pointer", maxWidth: "max-content" }}
                                    onClick={() => handleSelectRange(val)}
                                />
                            ))
                        }
                    </Box>

                    <Divider orientation="vertical" flexItem />

                    <CalendarComponent
                        referenceDate={dayjs(d().startValues)}
                        slots={{
                            nextIconButton: () => null,
                            switchViewIcon: () => null,
                            day: (params) => {
                                const { day, isFirstVisibleCell, isLastVisibleCell, outsideCurrentMonth } = params;
                                const selected = handleSelection(day).f;

                                return (
                                    <PickersDay
                                        day={day}
                                        isFirstVisibleCell={isFirstVisibleCell}
                                        isLastVisibleCell={isLastVisibleCell}
                                        outsideCurrentMonth={outsideCurrentMonth}
                                        selected={day === sd || day === ed || selected}
                                        onDaySelect={values => handleChangeDay(values)}
                                    />
                                )
                            }
                        }}
                    />

                    <Divider orientation="vertical" flexItem />

                    <CalendarComponent
                        referenceDate={dayjs(d().endValues)}
                        slots={{
                            leftArrowIcon: () => null,
                            switchViewIcon: () => null,
                            day: (params) => {
                                const { day, isFirstVisibleCell, isLastVisibleCell, outsideCurrentMonth } = params;

                                const disabled = () => {
                                    const { $D, $M } = day;
                                    return $M === currentMonth && $D > currentDate
                                };

                                const selected = handleSelection(day).s && !disabled();

                                return (
                                    <PickersDay
                                        day={day}
                                        disabled={disabled()}
                                        isFirstVisibleCell={isFirstVisibleCell}
                                        isLastVisibleCell={isLastVisibleCell}
                                        outsideCurrentMonth={outsideCurrentMonth}
                                        selected={day === sd || day === ed || selected}
                                        onDaySelect={values => handleChangeDay(values)}
                                    />
                                )
                            }
                        }}
                    />
                </Box>
            </Box>

            <Divider />

            <Box sx={{ display: "flex", justifyContent: "right", py: 2.5, gap: 2 }}>
                <Button
                    size="small"
                    sx={{ textTransform: "capitalize" }}
                    variant="outlined"
                    onClick={onClose}
                >
                    Cancel
                </Button>
                <Button
                    size="small"
                    sx={{ textTransform: "capitalize" }}
                    variant="contained"
                    onClick={() => { onApplyDateChanges(); onClose() }}
                >
                    Apply dates
                </Button>
            </Box>
        </Box>
    );
};

export default CalenderModel;
