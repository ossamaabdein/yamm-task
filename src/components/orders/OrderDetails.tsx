import '../../styles/orders/OrderDetailsPage.scss';
import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { generalGetRequest } from '../../utils/SendRequest';
import { useParams } from 'react-router-dom';
import { Skeleton } from '@mui/material';
import OrderBasicDetails from './OrderBasicDetails';
import OrderItems from './OrderItems';
import { toast } from 'react-toastify';
import NoDataFoundComponent from '../common/NoDataFoundComponent';

const OrderDetails = () => {
	const { id } = useParams();
	const { data, isLoading } = useQuery({
		queryKey: ["orders-data", id],
		queryFn: () =>
			generalGetRequest(`orders/${id}`)
				.catch(() => {
					toast.error("Something went wrong, please try again.");
				}),
	});

	if (isLoading) {
		return (
			<div
				style={{
					display: "flex",
					padding: "20px",
					flexWrap: "wrap",
					gap: "20px",
				}}
			>
				{Array(4)
					.fill(null)
					.map((_, index) => (
						<Skeleton
							key={index}
							sx={{ bgcolor: "grey.400" }}
							variant="rectangular"
							width={"100%"}
							height={118}
						/>
					))}
			</div>
		);
	} else if (!data) {
		return <NoDataFoundComponent />;
	}

	return (
		<div className="order_details">
			<OrderBasicDetails data={data} />
			<OrderItems data={data} />
		</div>
	);
}

export default OrderDetails