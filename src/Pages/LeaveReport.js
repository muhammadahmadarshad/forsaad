import React, { useEffect, useState } from "react";
import { Form, Button } from "antd";
import { Row, Col, Divider } from "antd";
import EmployeeTable from "../components/EmployeeTable.jsx";
import { DatePicker } from "antd";
import { Select } from "antd";
import UserService from '../Services/UserService'
import Loading from "./Loading.jsx";
import LeaveService from '../Services/LeaveService'
import moment from 'moment'
const { Option } = Select;
function LeaveReport() {
  const [employs,setEmploys]=useState([])
  const [loading,setLoading]=useState(true)
  const [err,setError]=useState(false)
  
  useEffect(()=>{

      UserService.getAllUsers()
      .then((res=>{
        setEmploys(res.data)
        setError(false)
        setLoading(false)
      }))
      .catch(()=>{
        setError(true)
        setLoading(false)

      })
  }
  ,[])

  const [loadingData,setLoadingData]=useState(false)


  const [state, setState] = useState({
    columns: [
      {
        title: "Sr.",
        render: (rowData) => rowData.tableData.id + 1,
      },
      { title: "Employee ID", field: "empId" ,render:(row)=>row.userId.empId},
      { title: "Employee Name", render:(data)=>`${data.userId.firstName} ${data.userId.lastName}` },

      {
        title: "Leave from",
        field: "leaveFrom",
        render:(data)=>moment(data.fromDate).format('DD-MM-YYYY')},
      { title: "Leave To", field: "leaveTo", render:(data)=>moment(data.toDate).format('DD-MM-YYYY')},
      { title: "Leave Type", field: "leaveType" },
      { title: "Number Of day(s)", field: "numberOfDays" },
      { title: "Status", field: "approvalStatus" },
    ],
    rows: [

    ],
  });


  const onFinish = (values) => {
    setLoadingData(true)
    let {empID,fromDate,toDate}=values
    if(!empID){

      fromDate=moment(fromDate).toISOString()
      toDate=moment(toDate).toISOString()
      LeaveService.getLeaveReportofAllUser({ fromDate,
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
      LeaveService.getLeaveReportUser({ empID,fromDate,
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
      offset: 18,
      span: 13,
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
          <Col className="gutter-row" span={8}>
            <Form.Item label="EmployeeName" name="empID"
              
            >
              <Select
              
                style={{ width: 300 }}
                placeholder="Select Employee"
              >
               {employs.map(emp=><Option value={emp._id} key={emp._id}>{`${emp.empId} ${emp.firstName} ${emp.lastName}`}</Option>)}
              
              </Select>
            </Form.Item>
          </Col>
          <Col className="gutter-row" span={12}>
            <Form.Item label=" Date from" rules={[{

              required:true,
              message:'From Date Should Not Be Empty'
            }]} name="fromDate">
              <DatePicker  style={{ width: 310 }} />
            </Form.Item>
            <Form.Item label=" Date to" name="toDate"
              rules={[{

                required:true,
                message:'To Date Should Not Be Empty'
              }]}
            
            
            >
              <DatePicker  style={{ width: 310 }} />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button disabled={loadingData} type="primary" htmlType="submit">
                View Leave Report
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
     
      {state.rows.length>0&&!loadingData?<EmployeeTable data={state} title="Leave Report "></EmployeeTable>:<div>
        
        {loadingData?<Loading/>:<h5 className='text-danger text-center'>No Report Found</h5>}
      </div>}
    </div>
  );
}

export default LeaveReport;
