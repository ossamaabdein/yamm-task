import React, { useState } from "react";
import GeneralTable from "../components/common/GeneralTable";
import { useQuery } from "@tanstack/react-query";
import { generalGetRequest, generalPutRequest } from "../utils/SendRequest";
import { TableSkeleton } from "../components/common/TableSkeleton";
import { Column, TableAction } from "../components/common/interfaces";
import { Order } from "../components/orders/interfaces";
import SelectDropdown from "../components/common/SelectDropdown";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";
import { FormControlLabel, Switch } from "@mui/material";

const Orders = () => {
	const [activePage, setActivePage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);
	const [refetchData, setRefetchData] = useState<any>();

	const { data, isLoading } = useQuery({
		queryKey: ["orders-data", activePage, rowsPerPage, refetchData],
		queryFn: () =>
			generalGetRequest(
				`orders?_page=${activePage + 1}&_per_page=${rowsPerPage}`
			),
	});

	const handleOrderUpdate = (
		keyToChange: string,
		updatedValue: any,
		row: Order
	) => {
		console.log(keyToChange, updatedValue, row, "DDDDD");
		generalPutRequest({
			route: `/orders/${row?.id}`,
			values: {
				...row,
				[keyToChange]: updatedValue,
			},
			onSuccess: () => {
				toast.success("Order updated successfully");
				setRefetchData && setRefetchData(new Date().getTime());
			},
			onError: () => {
				toast.error("Something went wrong, please try again.");
			},
		});
	};

	const columns: Column[] = [
		{ id: "id", label: "id", minWidth: 50 },
		{
			id: "store_logo",
			label: "Store logo",
			render: (value) => <img src={value} alt="Store Logo" />,
		},
		{
			id: "store_name",
			label: "store name",
		},
		{ id: "reason", label: "reason", minWidth: 100 },
		{
			id: "store_url",
			label: "Store url",
		},
		{
			id: "amount",
			label: "amount",
			minWidth: 30,
			format: (value) => `$${value.toFixed(2)}`,
		},
		{
			id: "items",
			label: "items",
			minWidth: 30,
		},
	];

	const orderActions: TableAction<Order>[] = [
		{
			id: "decision",
			label: "Decision",
			render: (row) => (
				<SelectDropdown
					options={[
						{ label: "None", value: "" },
						{ label: "Reject", value: "reject" },
						{ label: "Accept", value: "accept" },
						{ label: "Escalate", value: "escalate" },
					]}
					keyToChange={"decision"}
					action={handleOrderUpdate}
					label="Decision"
					row={row}
					placeholder="Decision"
				/>
			),
		},
		{
			id: "status",
			label: "Status",
			render: (row) => (
				<FormControlLabel
					onChange={() => {
						handleOrderUpdate("active", !row?.active, row);
					}}
					checked={row?.active}
					control={<Switch color="success" />}
					label="Active"
				/>
			),
		},
		{
			id: "details",
			label: "Details",
			render: (row) => (
				<Link to={`/orders/${row.id}`}>
					<InfoIcon />
				</Link>
			),
		},
	];

	if (isLoading) {
		return <TableSkeleton rowsNum={rowsPerPage} colsNum={10} />;
	}
	return (
		<GeneralTable
			data={data?.data}
			setActivePage={setActivePage}
			activePage={activePage}
			totalCount={data?.items}
			setRowsPerPage={setRowsPerPage}
			rowsPerPage={rowsPerPage}
			columns={columns}
			actions={orderActions}
			imageKeys={["store_logo"]}
		/>
	);
};

export default Orders;
