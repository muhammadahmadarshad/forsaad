import React, { useEffect, useState } from "react";

import PendingLeaveByUser from "../components/PendingLeaveByUser";
import LeaveService from "../Services/LeaveService";
import Loading from '../Pages/Loading'


function PendingLeave() {

const [leaves,setLeaves]=useState([])
const [loading,setLoading]=useState(true)
const [err,setErr]=useState(false)
const getLeaves=()=>{

  LeaveService.getPendingleaves()
  .then(res=>{
    setLeaves(res.data?res.data:[])
    setErr(false)
    setLoading(false)
  }).catch(err=>{
    setErr(true)
    setLoading(false)
  }
  )

}
  useEffect(getLeaves,[])

  if(loading){

    return <Loading/>
  }

  return (
    <div>
      {leaves.length>0?<div>
        {
          leaves.map(leave=><PendingLeaveByUser getLeaves={getLeaves} leave={leave} key={leave._id}/>)
        }
        </div>:<h1>No Pending Leaves</h1>}

      
    </div>
  );
}

export default PendingLeave;
