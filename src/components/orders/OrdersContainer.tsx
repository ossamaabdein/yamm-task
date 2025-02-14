import React, { useState } from "react";
import { Order } from "./interfaces";
import GeneralTable from "../common/GeneralTable";

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
	return (
				<GeneralTable data={data}/>

	);
};
