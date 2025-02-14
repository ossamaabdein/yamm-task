import React, { useEffect, useState } from "react";
import GeneralTable from '../components/common/GeneralTable'
import { useQuery } from "@tanstack/react-query";
import { generalGetRequest } from "../utils/SendRequest";
import { TableSkeleton } from "../components/common/TableSkeleton";

const Orders = () => {
	const [activePage, setActivePage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);

	useEffect(() => {
		console.log(activePage, rowsPerPage, "ROTTT");
	}, [activePage, rowsPerPage]);

	const { data, isSuccess, isLoading } = useQuery({
		queryKey: ["orders-data", activePage, rowsPerPage],
		queryFn: () =>
			generalGetRequest(
				`orders?_page=${activePage + 1}&_per_page=${rowsPerPage}`
			),
	});

	if (isLoading) {
		return <TableSkeleton rowsNum={rowsPerPage} colsNum={10} />;
	}
	return (
		<div>
			<GeneralTable
				data={data?.data}
				totalCount={data?.items}
				setActivePage={setActivePage}
				activePage={activePage}
				setRowsPerPage={setRowsPerPage}
				rowsPerPage={rowsPerPage}
			/>
		</div>
	);
};

export default Orders;
