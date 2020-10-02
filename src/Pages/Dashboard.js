import React, { useEffect, useState } from "react";
import { Card } from "antd";
import { Row, Col, Divider } from "antd";
import EmployeeTable from "../components/EmployeeTable.jsx";
import Loading from "./Loading.jsx";
import attendanceService from "../Services/AttendanceService.js";
import moment from 'moment'
import userService from "../Services/UserService.js";
import {Link} from 'react-router-dom'
function Dashboard() {
  const [loading,setLoading]=useState(true)
  const [err,setErr]=useState(false)
  const [employs,setEmploys]=useState({
    columns: [
      { title: "Employee ID", field: "empName", render:(row)=><Link to={`/admin/ViewProfile/${row._id}`}>{`${row.empId}`}</Link> },
      { title: "Department", render:(row)=>`${row.firstName} ${row.lastName}`} ,
      { title: "Department", render:({department})=>department?department.name:'N/A' },
      { title: "Email Address", field: "email", },
      { title: "Contact", field: "mobileNumber", },
      { title: "Weekly Working Days", field: "noOfWorkDays", },

    ],
    rows: [

    ],
  })
  const [state, setState] = useState({
    columns: [
      { title: "Employee Name", field: "empName", render:(row)=>`${row.userId.empId} ${row.userId.firstName} ${row.userId.lastName}` },

      { title: "Status", field: "status" },
      { title: "Marked Time", field: "checkInDate",render:({checkInDate})=>moment(checkInDate).calendar() },
    ],
    rows: [

    ],
  });

  useEffect(()=>{

    attendanceService.getTodaysAttendance()
    .then(res=>{
      setState({...state,rows:res.data})
      userService.getAllUsers().
      then(res=>{
        console.log('Employs',res.data)
        setEmploys((prev)=>{

          return {...prev,rows:res.data}
        })
        setLoading(false)
      })
      
    })
    .catch(err=>{
      setLoading(false)
      console.log(err.response)
    })
    

  },[])

  if(loading)
    return <Loading/>

  else if (err)
    return <h5 className='text-danger text-center'>Request Failed</h5>



  return (
    <div>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" xs={{ span: 24 }} lg={{ span: 16 }}>
          <Card title="Live Chat" style={{ marginBottom: "2%" }}></Card>
        </Col>
        <Col className="gutter-row" xs={{ span: 24 }} lg={{ span: 8 }}>
          <Card title="Events" style={{ marginBottom: "2%" }}></Card>
        </Col>
      </Row>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col style={{ marginBottom: "2%" }} className="gutter-row" xs={{ span: 24 }} lg={{ span: 12 }}>
          <EmployeeTable data={state} title="Attendance "></EmployeeTable>
        </Col>
        <Col className="gutter-row" xs={{ span: 24 }} lg={{ span: 12 }}>
          <EmployeeTable data={employs} title="Employees "></EmployeeTable>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
