import React from "react";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Box, TextField, Typography, IconButton } from "@mui/material";
import { handleExportToExcel, handlePrint, fromDate, toDate } from "../../Utils/Utils";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PropTypes from 'prop-types'
import dayjs from 'dayjs';
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from '@mui/icons-material/Refresh';
import AddIcon from '@mui/icons-material/Add';
import PrintIcon from '@mui/icons-material/Print';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import empty from '../../Assets/empty.gif'
import * as loading from '../../Assets/loading.json'
import Lottie from 'react-lottie'
import CalenderModel from "../Calender";

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

const GridModel = ({
    columns,
    rows,
    loading,
    pageSizeOptions,
    pagination,
    paginationMode,
    FilterComponent,
    GridButtonsComponent,
    onAdd,
    onChangeStartDate,
    onChangeEndDate,
    disableAdd,
    disablePrint,
    disableExport,
    showGridHeader,
    showStartDateFilter,
    showEndDateFilter,
    showSearchBar,
    defaultStartDate,
    defaultEndDate,
    ...otherGridProps
}) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    return (
        <Box>
            {showGridHeader &&
                <Box display={"flex"} justifyContent={"space-between"} marginBottom={1}>
                    <Box display={"flex"} columnGap={3}>
                        {!disablePrint && <Button
                            sx={{ textTransform: "capitalize" }}
                            startIcon={<PrintIcon />}
                            variant="contained"
                            // size="small"
                            onClick={handlePrint}
                        >
                            Print
                        </Button>}
                        {!disableExport && <Button
                            sx={{ textTransform: "capitalize" }}
                            startIcon={<ExitToAppIcon />}
                            variant="contained"
                            // size="small"
                            onClick={() => handleExportToExcel(columns, rows)}
                        >
                            Export
                        </Button>}
                    </Box>

                    <Box display={"flex"} columnGap={3}>
                        <IconButton>
                            <RefreshIcon />
                        </IconButton>

                        <Button
                            startIcon={<CalendarMonthIcon />}
                            variant="contained"
                            onClick={event => setAnchorEl(event.currentTarget)}
                            // size="small"
                            sx={{ textTransform: "capitalize", backgroundColor: "#eff4f8", boxShadow: 0, color: "#495c6c" }}>
                            Last 30 days
                        </Button>

                        <CalenderModel anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)} />

                        {FilterComponent && <FilterComponent />}

                        {!disableAdd && (
                            <Button
                                startIcon={<AddIcon />}
                                onClick={onAdd}
                                variant="contained"
                                // size="small"
                                sx={{ textTransform: "capitalize" }}>
                                New
                            </Button>
                        )}
                    </Box>
                </Box>}

            {GridButtonsComponent && <GridButtonsComponent />}

            {rows.length > 0 && !loading &&
                <div id="printTable">
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        loading={loading}
                        pageSizeOptions={pageSizeOptions}
                        paginationMode={paginationMode}
                        pagination={pagination}
                        {...otherGridProps}
                    />
                </div>}

            {
                loading &&
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flex: 1
                }}>
                    <Lottie options={defaultOptions}
                        height={300}
                        width={300}
                    />
                </Box>
            }

            {!loading && rows.length === 0 &&
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    flex: 1,
                    paddingY: 4
                }}>
                    <img src={empty} className="h-48" />
                    <Typography>Looks like you dont have any data</Typography>
                    {!disableAdd && <Button
                        onClick={onAdd}
                        variant="contained"
                        // size="small"
                        sx={{ textTransform: 'capitalize', width: 300, mt: 1 }}
                        startIcon={<AddIcon />}
                    >
                        New
                    </Button>}
                </Box>}
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
    onChangeStartDate: PropTypes.func,
    onChangeEndDate: PropTypes.func,
    showGridHeader: PropTypes.bool,
    showSearchBar: PropTypes.bool,
    disableAdd: PropTypes.bool,
    disablePrint: PropTypes.bool,
    disableExport: PropTypes.bool,
    defaultStartDate: PropTypes.string,
    defaultEndDate: PropTypes.string
};

GridModel.defaultProps = {
    disableAdd: false,
    disableExport: false,
    disablePrint: false,
    showGridHeader: true,
    showStartDateFilter: true,
    showEndDateFilter: true,
    showSearchBar: true,
    defaultStartDate: fromDate,
    defaultEndDate: toDate
}

export default GridModel;
