import React, { useState } from "react";
// import TableContainer from "../common/TableContainer.tsx";
import { Order } from "./interfaces";
import StickyHeadTable from "../common/TableContainer";
import GeneralTable from "../common/TableContainer";

export const OrdersContainer = () => {
	const tableHeaders = [
		{ label: "ID", customClass: "id_col" },
		{ label: "name" },
		{ label: "club" },
		{ label: "categories", customClass: "categories_col" },
		{ label: "sponsor", customClass: "sponsor_col" },
		{ label: "date", customClass: "date_col" },
		{ label: "prize money", customClass: "prize_col" },
		{ label: "status", customClass: "status_col" },
		{ label: "actions", customClass: "actions_col" },
	];

	const data: Order[] = [
		{
			id: "1",
			reason: "x",
			store_name: "Store 1",
			store_logo: "https://via.placeholder.com/150",
			store_url: "https://via.placeholder.com/150",
			amount: 100,
			active: true,
			decision: null,
			items: [
				{
					name: "Item 1",
					id: "1",
					price: 100,
					quantity: 1,
				},
				{
					name: "Item 2",
					id: "2",
					price: 100,
					quantity: 1,
				},
			],
		},
		{
			id: "2",
			reason: "x",
			store_name: "Store 1",
			store_logo: "https://via.placeholder.com/150",
			store_url: "https://via.placeholder.com/150",
			amount: 100,
			active: true,
			decision: null,
			items: [
				{
					name: "Item 1",
					id: "1",
					price: 100,
					quantity: 1,
				},
				{
					name: "Item 2",
					id: "2",
					price: 100,
					quantity: 1,
				},
			],
		},
		{
			id: "3",
			reason: "x",
			store_name: "Store 1",
			store_logo: "https://via.placeholder.com/150",
			store_url: "https://via.placeholder.com/150",
			amount: 100,
			active: true,
			decision: null,
			items: [
				{
					name: "Item 1",
					id: "1",
					price: 100,
					quantity: 1,
				},
				{
					name: "Item 2",
					id: "2",
					price: 100,
					quantity: 1,
				},
			],
		},
		{
			id: "4",
			reason: "x",
			store_name: "Store 1",
			store_logo: "https://via.placeholder.com/150",
			store_url: "https://via.placeholder.com/150",
			amount: 100,
			active: true,
			decision: null,
			items: [
				{
					name: "Item 1",
					id: "1",
					price: 100,
					quantity: 1,
				},
				{
					name: "Item 2",
					id: "2",
					price: 100,
					quantity: 1,
				},
			],
		},
		{
			id: "5",
			reason: "x",
			store_name: "Store 1",
			store_logo: "https://via.placeholder.com/150",
			store_url: "https://via.placeholder.com/150",
			amount: 100,
			active: true,
			decision: null,
			items: [
				{
					name: "Item 1",
					id: "1",
					price: 100,
					quantity: 1,
				},
				{
					name: "Item 2",
					id: "2",
					price: 100,
					quantity: 1,
				},
			],
		},
	];

	const [ordersList, setordersList] = useState(data);
	const [shownList, setShownList] = useState();
	const [refetchData, setRefetchData] = useState(false);

	return (
		<div>
			{/* <TableContainer
				allData={ordersList}
				setShownList={setShownList}
				tableHeaders={tableHeaders}
				data={shownList}
				noDataMessage={"No tournaments found"}
				setRefetchData={setRefetchData}
				// searchInput={searchInput}
			/> */}
			{/* <MiniDrawer> */}
				<GeneralTable data={data}/>
			{/* </MiniDrawer> */}
			{/* <StickyHeadTable /> */}
		</div>
	);
};
