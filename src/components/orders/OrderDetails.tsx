import '../../styles/orders/OrderDetailsPage.scss';
import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { generalGetRequest } from '../../utils/SendRequest';
import { useParams } from 'react-router-dom';

const OrderDetails = () => {
    const { id } = useParams();
	const { data, isLoading } = useQuery({
		queryKey: ["orders-data", id],
		queryFn: () =>
			generalGetRequest(
				`orders/${id}`
			),
	});

  return (
    <div className='order_details'>
        <div className='basic_details'>
            <h3>Order Main Info.</h3>
            <div className='info_container'>
                <div className='info'>
                    <span className='label'>Order ID</span>
                    <span className='value'>{data?.id}</span>
                </div>
                <div className='info'>
                    <span className='label'>Store Name</span>
                    <span className='value'>{data?.store_name}</span>
                </div>
                <div className='info'>
                    <span className='label'>Store Logo</span>
                    <span className='value'><img src={data?.store_logo} alt={data?.store_name}/></span>
                </div>
                <div className='info'>
                    <span className='label'>Store URL</span>
                    <a className='value' href={data?.store_url} target='_blank' rel="noreferrer">{data?.store_url}</a>
                </div>
                <div className='info'>
                    <span className='label'>Order Amount</span>
                    <span className='value'>{data?.amount}</span>
                </div>
                <div className='info'>
                    <span className='label'>Refund Reason</span>
                    <span className='value'>{data?.reason}</span>
                </div>
            </div>
        </div>
        <div className='items'>
            <h3>Order Items</h3>
            {data?.items.map((item: any, index: number) => (
                <div className='item'>
                    <div className='info no'>
                        <span className='label'>No.</span>
                        <span className='value'>{index + 1}</span>
                    </div>
                    <div className='info'>
                        <span className='label'>Item Name</span>
                        <span className='value'>{item.name}</span>
                    </div>
                    <div className='info'>
                        <span className='label'>Item ID</span>
                        <span className='value'>{item.id}</span>
                    </div>
                    <div className='info'>
                        <span className='label'>Price</span>
                        <span className='value'>{item.price}</span>
                    </div>
                    <div className='info'>
                        <span className='label'>Quantity</span>
                        <span className='value'>{item.quantity}</span>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default OrderDetails