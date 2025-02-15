import React from 'react'
import { Order } from './interfaces'

const OrderBasicDetails = ({data}: {data: Order }) => {
  return (
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
  )
}

export default OrderBasicDetails