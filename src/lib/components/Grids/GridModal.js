import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Box, TextField, Typography } from "@mui/material";
import { handleExportToExcel, handlePrint, fromDate, toDate } from "../../Utils/Utils";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import PropTypes from 'prop-types'
import dayjs from 'dayjs';
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from '@mui/icons-material/Add';
import PrintIcon from '@mui/icons-material/Print';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import empty from '../../Assets/empty.gif'
import * as loading from '../../Assets/loading.json'
import Lottie from 'react-lottie'

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

const GridModal = ({
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
    ...props
}) => {

    return (
        <Box>
            {showGridHeader && <Box display={"flex"} justifyContent={"space-between"}>
                <Box display={"flex"} columnGap={3}>
                    {!disablePrint && <Button
                        sx={{ textTransform: "capitalize" }}
                        startIcon={<PrintIcon />}
                        variant="contained"
                        onClick={handlePrint}
                    >
                        Print
                    </Button>}
                    {!disableExport && <Button
                        sx={{ textTransform: "capitalize" }}
                        startIcon={<ExitToAppIcon />}
                        variant="contained"
                        onClick={() => handleExportToExcel(columns, rows)}
                    >
                        Export to Excel
                    </Button>}
                </Box>

                <Box display={"flex"} columnGap={3}>
                    {showSearchBar && <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            border: "1px solid gray",
                            borderRadius: 1,
                            paddingX: 1,
                            minWidth: 300,
                        }}
                    >
                        <TextField
                            placeholder="Search"
                            fullWidth
                            sx={{
                                "& .MuiInputBase-input": {
                                    height: 36,
                                    padding: 0,
                                    flex: 1,
                                },
                                "& .MuiOutlinedInput-root": {
                                    "&.Mui-focused fieldset": {
                                        borderColor: "transparent",
                                    },
                                    "& fieldset": {
                                        borderColor: "transparent",
                                    },
                                    "&:hover fieldset": {
                                        borderColor: "transparent",
                                    },
                                },
                                "& .MuiOutlinedInput-input": {
                                    "&:focus": {
                                        outline: "none",
                                    }
                                }
                            }}
                        />

                        <SearchIcon sx={{ color: "gray" }} />
                    </Box>}


                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        {showStartDateFilter && <DatePicker
                            label="From"
                            value={dayjs(defaultStartDate)}
                            onChange={onChangeStartDate}
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    height: 38,
                                    width: 175
                                },
                                "& .MuiFormLabel-root": {
                                    top: -7,
                                },
                            }}
                        />}

                        {showEndDateFilter && <DatePicker
                            label="To"
                            value={dayjs(defaultEndDate)}
                            onChange={onChangeEndDate}
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    height: 38,
                                    width: 175
                                },
                                "& .MuiFormLabel-root": {
                                    top: -7,
                                }
                            }}
                        />}
                    </LocalizationProvider>


                    {FilterComponent && <FilterComponent />}

                    {!disableAdd && (
                        <Button
                            startIcon={<AddIcon />}
                            onClick={onAdd}
                            variant="contained"
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
                        checkboxSelection={false}
                        disableRowSelectionOnClick
                        autoHeight={true}
                        disableColumnMenu={true}
                        loading={loading}
                        pageSizeOptions={pageSizeOptions}
                        paginationMode={paginationMode}
                        pagination={pagination}
                        getRowClassName={(params) => params.indexRelativeToCurrentPage % 2 === 0 ? "even-row" : "odd-row"}
                        getRowId={row => row.name}
                        {...props}
                        sx={{
                            "&>.MuiDataGrid-main": {
                                "& .MuiDataGrid-columnHeaderTitle": {
                                    fontWeight: "900",
                                    fontSize: 15,
                                },
                                "& .MuiDataGrid-columnHeader:focus": {
                                    outline: "none",
                                    border: "none",
                                },
                                "& .MuiDataGrid-columnHeader:focus-within": {
                                    outline: "none !important",
                                },
                            },
                            "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
                                outline: "none !important",
                            },
                            "& .odd-row": {
                                backgroundColor: "rgba(245,250,254, 0.9)",
                            },
                            borderColor: "transparent",
                        }}
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
                        sx={{ textTransform: 'capitalize', width: 300, mt: 1 }}
                        startIcon={<AddIcon />}
                    >
                        New
                    </Button>}
                </Box>}
        </Box>
    );
};

GridModal.propTypes = {
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

GridModal.defaultProps = {
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

export default GridModal;
