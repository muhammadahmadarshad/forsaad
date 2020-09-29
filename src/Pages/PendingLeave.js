import React, { useEffect, useState } from "react";

import PendingLeaveByUser from "../components/PendingLeaveByUser";
import LeaveService from "../Services/LeaveService";



function PendingLeave() {

const [leaves,setLeaves]=useState([])
const [loading,setLoading]=useState(true)

  useEffect(()=>{

    LeaveService.getPendingleaves()
    .then(res=>{
      console.log(res.data)
    })

  },[])


  return (
    <div>
      <PendingLeaveByUser/>

      
    </div>
  );
}

export default PendingLeave;
