import React from 'react';
import { Menu } from '@mui/material';
import CalenderModel from '../CalenderModel';
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

const GridCalender = ({ open, anchorEl, onClose, onChange, onApplyDateChanges, resetDates, setDates }) => {
    return (
        <StyledMenu
            anchorEl={anchorEl}
            open={open}
            onClose={onClose}
            id="calender-range"
        >
            <CalenderModel
                onChange={onChange}
                onApplyDateChanges={onApplyDateChanges}
                resetDates={resetDates}
                setDates={setDates}
                onClose={onClose}
            />
        </StyledMenu>
    );
};

export default GridCalender;
