import React from 'react'
import PropTypes from 'prop-types'
import { Button, Dialog, Box, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

const AlertDialog = ({ dialogContentText, dialogTitle, open, size, onClose, onAction, }) => {
    return (
        <Dialog open={open} maxWidth={size} onClose={onClose}
        >
            <Box sx={{ paddingY: 1 }}>
                <DialogTitle>{dialogTitle}</DialogTitle>
                <DialogContent sx={{ paddingY: 2 }}>
                    <DialogContentText sx={{ fontSize: 14 }}>
                        {dialogContentText}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button sx={{ textTransform: "capitalize" }} onClick={onClose}>Cancel</Button>
                    <Button
                        onClick={() => { onClose(); onAction() }}
                        autoFocus
                        sx={{ borderRadius: 50, paddingX: 4, paddingY: 0.7 }}
                        variant="contained"
                    >
                        Ok
                    </Button>
                </DialogActions>
            </Box>
        </Dialog>
    );
};

AlertDialog.propTypes = {
    dialogContentText: PropTypes.string.isRequired,
    dialogTitle: PropTypes.string.isRequired,
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onAction: PropTypes.func.isRequired,
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
}

AlertDialog.defaultProps = {
    size: "xs"
}

export default AlertDialog