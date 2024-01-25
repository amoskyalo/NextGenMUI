import React from 'react';
import PropTypes from 'prop-types';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PrintIcon from '@mui/icons-material/Print';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AddIcon from '@mui/icons-material/Add';
import Lottie from 'react-lottie';
import emptyImage from '../../Assets/empty.gif';
import loadingAnimation from '../../Assets/loading.json';
import GridCalender from '../GridCalender/GridCalender';
import { handleExportToExcel, handlePrint, dateObject, monthsOfTheYear } from '../../Utils/Utils';
import { Box, Button, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';

const buttonStyle = { textTransform: 'capitalize' };
const date = new Date();

const LoadingIndicator = ({ options }) => (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Lottie options={options} height={300} width={300} />
    </Box>
);

const NoDataIndicator = ({ onAdd, disableAdd }) => (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1, py: 4 }}>
        <img src={emptyImage} alt="No data" className="h-48" />
        <Typography>Looks like you don't have any data</Typography>
        {!disableAdd && (
            <Button onClick={onAdd} variant="contained" sx={{ ...buttonStyle, width: 300, mt: 1 }} startIcon={<AddIcon />}>
                New
            </Button>
        )}
    </Box>
);

const d = {
    startDate: { ...dateObject, '$M': date.getMonth() === 0 ? 11 : date.getMonth() - 1 },
    endDate: { ...dateObject, '$M': date.getMonth() }
}

const GridModel = ({
    columns,
    rows,
    loading,
    FilterComponent,
    GridButtonsComponent,
    onAdd,
    disableAdd,
    disableDates,
    disablePrint,
    disableExport,
    showGridHeader,
    onPrint,
    onDateChange,
    onApplyDateChanges,
    ...gridProps
}) => {
    const [dates, setDates] = useState(d);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleChangeDates = (type, value) => {
        setDates({ ...dates, [type]: value });
    };

    const handleResetDates = () => setDates(d);

    useEffect(() => {
        if (onDateChange) {
            onDateChange(dates);
        }
    }, [dates]);

    const { startDate: { $D: startDay, $M: startMonth }, endDate: { $D: endDay, $M: endMonth } } = dates;

    const defaultDates = {
        start: `${date.getFullYear()}-${(startMonth + 1).toString().padStart(2, "0")}-${startDay.toString().padStart(2, "0")}`,
        end: `${date.getFullYear()}-${(endMonth + 1).toString().padStart(2, "0")}-${endDay.toString().padStart(2, "0")}`
    };

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loadingAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <Box>
            {showGridHeader && (
                <Box>
                    <Box display="flex" justifyContent="space-between" mb={1}>
                        <Box display="flex" gap={3}>
                            {!disablePrint && (
                                <Button
                                    sx={buttonStyle}
                                    startIcon={<PrintIcon />}
                                    variant="outlined"
                                    onClick={onPrint}
                                >
                                    Print
                                </Button>
                            )}
                            {!disableExport && (
                                <Button
                                    sx={buttonStyle}
                                    startIcon={<ExitToAppIcon />}
                                    variant="outlined"
                                    onClick={() => handleExportToExcel(columns, rows)}
                                >
                                    Export
                                </Button>
                            )}
                        </Box>
                        <Box display="flex" gap={3}>
                            {/* Search */}
                        </Box>
                        <Box display="flex" gap={3}>
                            {!disableDates && (
                                <Button
                                    startIcon={<CalendarMonthIcon />}
                                    variant="contained"
                                    onClick={event => setAnchorEl(event.currentTarget)}
                                    sx={buttonStyle}
                                >
                                    {monthsOfTheYear[startMonth]} {startDay.toString().padStart(2, "0")} -  {monthsOfTheYear[endMonth]} {endDay.toString().padStart(2, "0")}
                                </Button>
                            )}

                            <GridCalender
                                defaultDates={defaultDates}
                                onChange={handleChangeDates}
                                onApplyDateChanges={() => onApplyDateChanges(dates)}
                                anchorEl={anchorEl}
                                open={open}
                                onClose={() => setAnchorEl(null)}
                                resetDates={handleResetDates}
                                setDates={setDates}
                            />

                            {FilterComponent && <FilterComponent />}
                            {!disableAdd && (
                                <Button
                                    startIcon={<AddIcon />}
                                    onClick={onAdd}
                                    variant="contained"
                                    sx={buttonStyle}
                                >
                                    New
                                </Button>
                            )}
                        </Box>
                    </Box>
                </Box>
            )}

            {GridButtonsComponent && <GridButtonsComponent />}

            {rows.length > 0 && !loading ? (
                <div id="printTable">
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        loading={loading}
                        {...gridProps}
                    />
                </div>
            ) : loading ? (
                <LoadingIndicator options={defaultOptions} />
            ) : (
                <NoDataIndicator onAdd={onAdd} disableAdd={disableAdd} />
            )}
        </Box>
    );
};

GridModel.propTypes = {
    columns: PropTypes.array.isRequired,
    rows: PropTypes.array.isRequired,
    loading: PropTypes.bool,
    pageSizeOptions: PropTypes.arrayOf(PropTypes.number),
    paginationMode: PropTypes.oneOf(["server", "client"]),
    FilterComponent: PropTypes.node,
    GridButtonsComponent: PropTypes.node,
    onAdd: PropTypes.func,
    disableAdd: PropTypes.bool,
    disablePrint: PropTypes.bool,
    disableExport: PropTypes.bool,
    showGridHeader: PropTypes.bool
};

GridModel.defaultProps = {
    disableAdd: false,
    disableExport: false,
    disablePrint: false,
    disableDates: false,
    showGridHeader: true
};

export default GridModel;
