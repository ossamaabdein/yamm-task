import React from 'react'
import GeneralTable from '../components/common/TableContainer'
import { useQuery } from '@tanstack/react-query'
import { generalGetRequest } from '../utils/SendRequest'

const Orders = () => {

    const { data, isSuccess } = useQuery({
        queryKey: ["orders-data"],
        queryFn: () => generalGetRequest("orders"),
    })


  return (
    <div>
        {/* <GeneralTable data={data}/> */}
    </div>
  )
}

export default Orders