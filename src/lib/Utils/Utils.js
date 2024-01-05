import * as XLSX from "xlsx";

const date = new Date();

export const handleExportToExcel = (columns, handleSearch) => {
    const headers = columns.map((column) => column.headerName);

    const data = handleSearch.map((row) =>
        columns.map((column) =>
            column.field === "actions" ? "" : row[column.field]
        )
    );

    const allData = [headers, ...data];

    const ws = XLSX.utils.aoa_to_sheet(allData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "orders.xlsx");
};

export const handlePrint = () => {
    window.print();
};

export const dateObject = {
    '$D': date.getDate(),
    '$H': date.getHours(),
    '$L': "en",
    '$M': date.getMonth(),
    '$W': date.getDay(),
    '$d': date,
    '$isDayjsObject': true,
    '$m': date.getMinutes(),
    '$ms': date.getMilliseconds(),
    '$s': date.getSeconds(),
    '$u': undefined,
    '$x': {},
    '$y': date.getFullYear()
};

export const startDate = {
    '$M': date.getMonth() - 1
};

export const monthsOfTheYear = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]