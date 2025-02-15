export interface ITable {
    data: any[];
    setActivePage: (page: number) => void;
    activePage: number;
    totalCount: number;
    setRowsPerPage: (rows: number) => void;
    rowsPerPage: number;
    actions?: any[];
    columns: Column[];
    imageKeys?: string[] | number[];
}
export interface Column {
	id: string | number;
	label: string;
	minWidth?: number;
	align?: "right";
	format?: (value: number) => string;
	totalCount?: number;
  render?: (value: any, row: any) => React.ReactNode;
}

export interface TableAction<T> {
    id: string;
    label: string;
    render: (row: T) => React.ReactNode;
  }