import React, { useEffect, useState } from "react";
import { Form, Button } from "antd";
import { Row, Col, Divider } from "antd";
import EmployeeTable from "../components/EmployeeTable.jsx";
import { DatePicker } from "antd";
import { Select } from "antd";
import UserService from '../Services/UserService'
import Loading from '../Pages/Loading'
import AttendanceService from '../Services/AttendanceService'
import moment from 'moment'
const { Option } = Select;

function AttendanceReport() {
  const [employs,setEmploys]=useState([])
  const [loading,setLoading]=useState(true)
  const [err,setErr]=useState(false)
  const [loadingData,setLoadingData]=useState(false)
  const [state, setState] = useState({
    columns: [
      {
        title: "Sr.",
        render: (rowData) => rowData.tableData.id + 1,
      },
      { title: "Employee ID", render:(row)=>row.userId.empId },
      { title: "Employee Name", field: "empName", render:(row)=>`${row.userId.firstName} ${row.userId.lastName}`},

      {
        title: "Check In",
        render:(row)=>moment(row.checkInDate).format("dddd, MMMM Do YYYY, h:mm a"),
      },
      { title: "Status", render:(row)=>row.status },
    ],
    rows: [],
  });

  useEffect(()=>{

      UserService.getAllUsers()
      .then(res=>{
        setEmploys(res.data)
        setLoading(false)
      })
      .catch(err=>{

        setErr(true)
        setLoading(false)
      })



  },[])

  const onFinish = (values) => {
    setLoadingData(true)
    let {empID,fromDate,toDate}=values
    if(!empID){

      fromDate=moment(fromDate).toISOString()
      toDate=moment(toDate).toISOString()
      AttendanceService.getAttendanceReportofAllUser({ fromDate,
      toDate})
      .then(res=>{
        console.log(res.data)
        setState({...state,rows:res.data})
        setLoadingData(false)
      })
      .catch(err=>{
        console.log(err.response)
        alert("Error Occured..")
        setLoadingData(false)
      })

    }

    else{

      fromDate=moment(fromDate).toISOString()
      toDate=moment(toDate).toISOString()
      AttendanceService.getAttendanceReportOfUser({ empID,fromDate,
      toDate})
      .then(res=>{
        setState({...state,rows:res.data})
        setLoadingData(false)
      })
      .catch(err=>{
        alert("Error Occured..")
        console.log(err.response)
        setLoadingData(false)
      })

    }

  };

  const layout = {
    labelCol: {
      span: 12,
    },
    wrapperCol: {
      span: 12,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 12,
      span: 12,
    },
  };

  if(loading){

    return <Loading/>
  }

  else if(err) {

    return <h5 className='text-center text-danger'>Request Failed</h5>
  }

  return (
    <div>
      <Divider orientation="left">Search</Divider>

      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
    
      >
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 18 }}>
          <Col className="gutter-row" xs={{ span: 24 }} lg={{ span: 8 }}>
            <Form.Item label="EmployeeName" name="empID">
              <Select
                placeholder="Select Employee"
              >
               {employs.map(emp=><Option value={emp._id} key={emp._id}>{`${emp.empId} ${emp.firstName} ${emp.lastName}`}</Option>)}
              
              </Select>
            </Form.Item>
          </Col>
          <Col className="gutter-row" xs={{ span: 24 }} lg={{ span: 8 }}>
            <Form.Item label=" Date from" name="fromData" 
            rules={[{
              required:true,
              message:'From Date Should Not Be Empty'
              }]}>
              <DatePicker  />
            </Form.Item>
          </Col>
          <Col className="gutter-row" xs={{ span: 24 }} lg={{ span: 8 }}>
            <Form.Item label=" Date to" name="fromDate"
                          rules={[{
                            required:true,
                            message:'To Date Should Not Be Empty'
                            }]}>
              <DatePicker  />
            </Form.Item>
          </Col>
          <Col className="gutter-row" xs={{ span: 24 }} lg={{ span: 8 }}>
            <Form.Item   {...tailLayout}>
              <Button type="primary" htmlType="submit" lg={{ span: 12 }}>
                View Attendance Report
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>

      {state.rows.length>0&&!loadingData?<EmployeeTable data={state} title="Attendance Report "></EmployeeTable>:<div>
        
        {loadingData?<Loading/>:<h5 className='text-danger text-center'>No Report Found</h5>}
      </div>}
    </div>
  );
}

export default AttendanceReport;
