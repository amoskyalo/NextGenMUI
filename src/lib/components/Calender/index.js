import React from 'react'
import { Box, Divider, Typography, Button, Menu } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { styled } from "@mui/material/styles";

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
        }}
        transformOrigin={{
            vertical: "top",
            horizontal: "right",
        }}
        {...props}
    />
))(({ theme }) => ({
    "& .MuiPaper-root": {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        color:
            theme.palette.mode === "light"
                ? "rgb(55, 65, 81)"
                : theme.palette.grey[300],
        boxShadow:
            "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    },
}));

const CalenderModel = ({ open, anchorEl, onClose }) => {
    const rangeOptions = ["Select past 7 days", "Previous 30 days", "Previous 6 months", "Previous year"];

    return (
        <StyledMenu
            anchorEl={anchorEl}
            open={open}
            onClose={onClose}
            id="calender-range"
        >
            <Box sx={{
                backgroundColor: "white",
                paddingTop: 2,
                paddingX: 3,
                borderRadius: 3,
                width: "max-content",
            }}
            >
                <Box display={"flex"}>
                    {/* <Box sx={{ rowGap: 2, display: "flex", flexDirection: "column", paddingRight: 4 }}>
                        {rangeOptions.map((r, __) => (
                            <Typography key={r} sx={{ whiteSpace: "nowrap", fontWeight: 500, opacity: "70%", cursor: "pointer" }}>{r}</Typography>
                        ))}
                    </Box>

                    <Divider orientation="vertical" variant="middle" flexItem /> */}

                    <Box sx={{ display: "flex" }}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateCalendar />
                        </LocalizationProvider>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateCalendar />
                        </LocalizationProvider>
                    </Box>
                </Box>

                <Divider />

                <Box sx={{ display: "flex", justifyContent: "right", paddingY: 2.5, columnGap: 2 }}>
                    <Button size="small" sx={{ textTransform: "capitalize" }} variant="outlined" onClick={onClose}>Cancel</Button>
                    <Button size="small" sx={{ textTransform: "capitalize" }} variant="contained">Apply dates</Button>
                </Box>
            </Box>
        </StyledMenu>
    )
}

export default CalenderModel