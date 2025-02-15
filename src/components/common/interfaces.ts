export interface ITable {
    data: any[];
    setActivePage: (page: number) => void;
    activePage: number;
    totalCount: number;
    setRowsPerPage: (rows: number) => void;
    rowsPerPage: number;
    setRefetchData?: (params: any) => void;
}