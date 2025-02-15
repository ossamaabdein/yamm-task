import React, { useEffect, useState } from "react";
import GeneralTable from "../components/common/GeneralTable";
import { useQuery } from "@tanstack/react-query";
import { generalGetRequest } from "../utils/SendRequest";
import { TableSkeleton } from "../components/common/TableSkeleton";

const Orders = () => {
	const [activePage, setActivePage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);
	const [refetchData, setRefetchData] = useState(false);

	useEffect(() => {
		console.log(activePage, rowsPerPage, "ROTTT");
	}, [activePage, rowsPerPage]);

	const { data, isLoading } = useQuery({
		queryKey: ["orders-data", activePage, rowsPerPage, refetchData],
		queryFn: () =>
			generalGetRequest(
				`orders?_page=${activePage + 1}&_per_page=${rowsPerPage}`
			),
	});

	if (isLoading) {
		return <TableSkeleton rowsNum={rowsPerPage} colsNum={10} />;
	}
	return (
		<GeneralTable
			data={data?.data}
			totalCount={data?.items}
			setActivePage={setActivePage}
			activePage={activePage}
			setRowsPerPage={setRowsPerPage}
			rowsPerPage={rowsPerPage}
			setRefetchData={setRefetchData}
			renderImgKeys={["store_logo"]}
		/>
	);
};

export default Orders;
