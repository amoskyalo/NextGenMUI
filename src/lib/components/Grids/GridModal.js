import { DataGrid } from "@mui/x-data-grid";
import { Button, Chip, Box } from "@mui/material";
// import { handleExportToExcel, handlePrint, fromDate, toDate } from "../../_Utils/Utils";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from '@mui/icons-material/Add';
import PrintIcon from '@mui/icons-material/Print';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
// import * as loading from '../../Assets/GifsJson/loading.json'
// import Lottie from 'react-lottie'

// const defaultOptions = {
//   loop: true,
//   autoplay: true,
//   animationData: loading,
//   rendererSettings: {
//     preserveAspectRatio: 'xMidYMid slice'
//   }
// };

const handleExportToExcel = () => { };
const handlePrint = () => { };


const GridModal = ({
    columns = [{ field: "name" }],
    rows = [{ name: "Amos" }],
    loading,
    pageSizeOptions,
    pagination,
    paginationMode,
    handleOpen = true,
    label,
    FilterComponent,
    GridButtonsComponent,
    handleSetDate = true,
    ...props
}) => {

    function formatDate(date) {
        return date.$y + "-" + String(date.$M + 1).padStart(2, "0") + "-" + String(date.$D).padStart(2, "0");
    }

    return (
        <>
            <Box display={"flex"} justifyContent={"space-between"}>
                <Box>
                    <Button
                        sx={{ textTransform: "capitalize" }}
                        startIcon={<PrintIcon />}
                        variant="contained"
                        onClick={handlePrint}
                    >
                        Print
                    </Button>
                    <Button
                        sx={{ textTransform: "capitalize" }}
                        startIcon={<ExitToAppIcon />}
                        variant="contained"
                        onClick={() => handleExportToExcel(columns, rows)}
                    >
                        Export to Excel
                    </Button>
                </Box>

                <Box display={"flex"}>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            border: "1px solid gray",
                            borderRadius: 1,
                            paddingX: 1,
                            minWidth: 300
                        }}
                    >
                        <input
                            placeholder="Search"
                            style={{ outline: "none", paddingY: 1, border: "none", backgroundColor: "transparent" }}
                        />
                        <SearchIcon className="!text-gray-400" />
                    </Box>

                    {/* {handleSetDate && <Box>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                label="From"
                                autoFocus={true}
                                // value={dayjs(fromDate)}
                                onChange={(e) => handleSetDate(formatDate(e), "StartDate")}
                                sx={{
                                    padding: 0,
                                    "& .MuiOutlinedInput-root": {
                                        height: 38,
                                        width: 150
                                    }
                                }}
                            />

                            <DatePicker
                                label="To"
                                autoFocus={true}
                                // value={dayjs(toDate)}
                                onChange={(e) => handleSetDate(formatDate(e), "EndDate")}
                                sx={{
                                    padding: 0,
                                    "& .MuiOutlinedInput-root": {
                                        height: 38,
                                        width: 150
                                    }
                                }}
                            />
                        </LocalizationProvider>
                    </Box>} */}

                    {FilterComponent && <FilterComponent />}

                    {handleOpen && (
                        <Button
                            startIcon={<AddIcon />}
                            onClick={handleOpen}
                            variant="contained"
                            sx={{ textTransform: "capitalize" }}>
                            New
                        </Button>
                    )}
                </Box>
            </Box>

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

            {/* {loading && <div className="flex flex-col flex-1 items-center justify-center">
        <Lottie options={defaultOptions}
          height={300}
          width={300}
        />
      </div>} */}

            {!loading && rows.length === 0 &&
                <div className="flex flex-col flex-1 items-center justify-center">
                    {/* <img src={empty} className="h-48" /> */}
                    <p>Looks like you dont have any data</p>
                    {handleOpen && <Button
                        onClick={handleOpen}
                        variant="contained"
                        sx={{ textTransform: 'capitalize', mt: 2, width: 300 }}
                        startIcon={<AddIcon />}
                    >
                        New
                    </Button>}
                </div>}
        </>
    );
};

export default GridModal;
