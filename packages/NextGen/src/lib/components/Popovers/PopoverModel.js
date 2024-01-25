import React from "react";
import PropTypes from 'prop-types'
import { Menu, MenuItem } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

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
        minWidth: 150,
        color:
            theme.palette.mode === "light"
                ? "rgb(55, 65, 81)"
                : theme.palette.grey[300],
        boxShadow:
            "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
        "& .MuiMenu-list": {
            padding: "4px 0",
        },
        "& .MuiMenuItem-root": {
            "& .MuiSvgIcon-root": {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            "&:active": {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity
                ),
            },
        },
    },
}));

const PopoverModel = ({ popoverItems, open, anchorEl, onClose }) => {
    return (
        <StyledMenu
            id="customized-popover"
            MenuListProps={{
                "aria-labelledby": "customized-popover",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={onClose}
        >
            {popoverItems?.map((a, i) => (
                <MenuItem
                    onClick={() => { a.onItemClick(a); onClose(); }}
                    disableRipple
                    key={i}
                >
                    {a.icon && <a.icon />}
                    {a.name}
                </MenuItem>
            ))}
        </StyledMenu>
    );
}

PopoverModel.propTypes = {
    popoverItems: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        onItemClick: PropTypes.func,
        icon: PropTypes.node
    })),
    open: PropTypes.bool.isRequired,
    anchorEl: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired
}
export default PopoverModel