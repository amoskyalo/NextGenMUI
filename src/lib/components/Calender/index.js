import React from 'react';
import dayjs from 'dayjs';
import { Box, Divider, Button, Menu } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DateCalendar } from '@mui/x-date-pickers';
import { styled } from "@mui/material/styles";

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horgitizontal: "right" }}
        {...props}
    />
))(({ theme }) => ({
    "& .MuiPaper-root": {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        color: theme.palette.mode === "light" ? "rgb(55, 65, 81)" : theme.palette.grey[300],
        boxShadow: "rgb(255 255 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    },
}));

const CalendarComponent = ({ onChange, value, ...props }) => (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
            onChange={value => onChange(value)}
            disableFuture={true}
            {...props}
        />
    </LocalizationProvider>
);

const CalenderModel = ({ open, anchorEl, onClose, onChange, onApplyDateChanges, defaultDates }) => {
    return (
        <StyledMenu anchorEl={anchorEl} open={open} onClose={onClose} id="calender-range">
            <Box sx={{ backgroundColor: "white", pt: 2, px: 3, borderRadius: 3, width: "max-content" }}>
                <Box display="flex">
                    <Box sx={{ display: "flex" }}>
                        <CalendarComponent onChange={value => onChange("startDate", value)} />
                        <CalendarComponent onChange={value => onChange("endDate", value)} />
                    </Box>
                </Box>

                <Divider />

                <Box sx={{ display: "flex", justifyContent: "right", py: 2.5, gap: 2 }}>
                    <Button size="small" sx={{ textTransform: "capitalize" }} variant="outlined" onClick={onClose}>Cancel</Button>
                    <Button size="small" sx={{ textTransform: "capitalize" }} variant="contained" onClick={() => { onApplyDateChanges(); onClose() }}>Apply dates</Button>
                </Box>
            </Box>
        </StyledMenu>
    );
};

export default CalenderModel;
