import React from 'react'
import { Order } from './interfaces'

const OrderItems = ({data}: {data: Order }) => {
  return (
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
  )
}

export default OrderItems