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
                <DialogTitle sx={{ paddingBottom: 0 }}>
                    <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>{title}</Typography>
                        <IconButton onClick={onClose} aria-label="close" sx={{ marginRight: -1.5 }}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                </DialogTitle>
            }
            <DialogContent sx={{ paddingBottom: 4 }}>
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
