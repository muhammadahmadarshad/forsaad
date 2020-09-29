import React, { useEffect, useState } from "react";
import PendingLoanRequestByUser from "../components/PendingLoanRequestByUser";
import LoanService from '../Services/LoanService'
import Loading from '../Pages/Loading'
function PendingLoanRequest() {

  let [data,setData]=useState([])
  let [loading,setLoading]=useState(true)
  let getData=()=>{


    LoanService.getPendingLoans()
    .then((res)=>{
      setData(res.data)
      setLoading(false)
    })
    .catch(()=>{
      setLoading(false)
    })
  }
  useEffect(getData,[])

  if (loading){

    return <Loading/>
  }

  return (
    <div>
      <h4 className='text-center'><em>Pending Loan Requests</em></h4>
      {data.length>0?
        data.map((d,index)=><PendingLoanRequestByUser getData={getData} key={index} data={d}/>)
          :<h5>No Pending Requests Available</h5>}
    </div>
  );
}

export default PendingLoanRequest;
