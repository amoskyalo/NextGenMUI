import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import { IconButton, DialogTitle, Dialog, DialogContent, Box, Typography } from "@mui/material";

const DialogModel = ({ onClose, open, title, fullWidth, maxWidth, children }) => {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            fullWidth={fullWidth}
            maxWidth={maxWidth}
        >
            {
                title &&
                <DialogTitle>
                    <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                        <Typography variant="h6">{title}</Typography>
                        <IconButton onClick={onClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                    </Box>
                </DialogTitle>
            }
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    );
};

DialogModel.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    title: PropTypes.string,
    fullWidth: PropTypes.bool,
    maxWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    children: PropTypes.node.isRequired
}

DialogModel.defaultProps = {
    maxWidth: "sm",
    fullWidth: false
}

export default DialogModel;
