import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { ITable, Column } from "./interfaces";

export default function GeneralTable({
	data,
	setActivePage,
	activePage,
	totalCount,
	setRowsPerPage,
	rowsPerPage,
	actions,
	columns,
	imageKeys,
}: ITable) {
	const handleChangePage = (event: unknown, newPage: number) => {
		setActivePage(newPage);
	};

	const handleChangeRowsPerPage = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setRowsPerPage(+event.target.value);
	};

	const renderCellContent = <T,>(value: any, row: T, column: Column) => {
		if (column.render) {
			return column.render(value, row);
		}

		if (imageKeys && (imageKeys as (string | number)[]).includes(column.id)) {
			return <img className="store_logo" src={value} alt={String(value)} />;
		}

		if (Array.isArray(value)) {
			return <span>{value.length}</span>;
		}

		return value;
	};

	return (
		<Paper sx={{ width: "100%", overflow: "hidden" }}>
			<TableContainer sx={{ maxHeight: 600 }}>
				<Table stickyHeader aria-label="sticky table">
					<TableHead>
						<TableRow>
							{columns.map((column: any) => (
								<TableCell
									key={column.id}
									align={column.align}
									style={{ minWidth: column.minWidth }}
								>
									{column.label}
								</TableCell>
							))}
							{actions &&
								actions?.map((action: any) => (
									<TableCell key={action.id}>{action.label}</TableCell>
								))}
						</TableRow>
					</TableHead>
					<TableBody>
						{data?.map((row: any) => {
							return (
								<TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
									{columns.map((column) => {
										const value = row[column.id];
										return (
											<TableCell key={String(column.id)} align={column.align}>
												{renderCellContent(value, row, column)}
											</TableCell>
										);
									})}
									{actions?.map((action) => (
										<TableCell key={action.id}>{action.render(row)}</TableCell>
									))}
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				rowsPerPageOptions={[10, 15]}
				component="div"
				count={totalCount}
				rowsPerPage={rowsPerPage}
				page={activePage}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
		</Paper>
	);
}
