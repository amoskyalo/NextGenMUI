import * as XLSX from "xlsx";

const today = new Date();

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

export const fromDate = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;

export const toDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;