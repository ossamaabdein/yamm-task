import React, { act, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import {
	FormControlLabel,
	Switch,
} from "@mui/material";
import SelectDropdown from "./SelectDropdown";
import InfoIcon from "@mui/icons-material/Info";

interface Column {
	id: keyof Data;
	label: string;
	minWidth?: number;
	align?: "right";
	format?: (value: number) => string;
}

interface Data {
	[key: string]: any; // Adjust this according to the actual structure of your data
}

const columns: readonly Column[] = [
	{ id: "id", label: "id", minWidth: 50 },
	{ id: "reason", label: "reason", minWidth: 100 },
	{
		id: "store_name",
		label: "store name",
		minWidth: 170,
	},
	{
		id: "store_logo",
		label: "Store logo",
		minWidth: 80,
	},
	{
		id: "store_url",
		label: "Store url",
		minWidth: 170,
	},
	{
		id: "amount",
		label: "amount",
		minWidth: 80,
	},
];

interface Data {
	name: string;
	code: string;
	population: number;
	size: number;
	density: number;
}

export default function StickyHeadTable({ data }: any) {
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);

	const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	const actions = [
		{
			id: 1,
			label: "decision",
		},
		{
			id: 2,
			label: "status",
		},
		{
			id: 3,
			label: "Details",
		},
	];

	return (
		<Paper sx={{ width: "100%", overflow: "hidden" }}>
			<TableContainer sx={{ maxHeight: 440 }}>
				<Table stickyHeader aria-label="sticky table">
					<TableHead>
						<TableRow>
							{columns.map((column) => (
								<TableCell
									key={column.id}
									align={column.align}
									style={{ minWidth: column.minWidth }}
								>
									{column.label}
								</TableCell>
							))}
							{/* {actions && actions?.map((action) => (
                <TableCell
                key={action.id}
              >
                {action.label}
              </TableCell>
              ))} */}
							{actions &&
								actions?.map((action) => (
									<TableCell key={action.id}>{action.label}</TableCell>
								))}
						</TableRow>
					</TableHead>
					<TableBody>
						{data
							.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							.map((row: any) => {
								return (
									<TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
										{columns.map((column) => {
											const value = row?.[column.id];
											return (
												<TableCell key={column.id} align={column.align}>
													{column.format && typeof value === "number"
														? column.format(value)
														: value}
												</TableCell>
											);
										})}
										{/* {actions &&
											actions?.map((action, index) => (
												<TableCell key={index}>
													<SelectDropdown index={index} />
												</TableCell>
											))} */}
										<TableCell key={0} style={{ minWidth: 120 }}>
											<SelectDropdown
												index={0}
												options={[
													{ label: "reject", value: "reject" },
													{ label: "accept", value: "accept" },
													{ label: "escalate", value: "escalate" },
												]}
                        placeholder="not yet"
											/>
										</TableCell>
										<TableCell key={1}>
											<FormControlLabel control={<Switch />} label="Active" />
										</TableCell>
										<TableCell key={3}>
											<InfoIcon />
										</TableCell>
									</TableRow>
								);
							})}
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				rowsPerPageOptions={[10, 25, 100]}
				component="div"
				// count={rows.length}
				count={data.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
		</Paper>
	);
}
