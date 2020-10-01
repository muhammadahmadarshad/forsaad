import React, { useEffect, useState } from "react";
import { Form, Button } from "antd";
import { Row, Col, Divider } from "antd";
import EmployeeTable from "../components/EmployeeTable.jsx";
import { DatePicker } from "antd";
import { Select } from "antd";
import UserService from '../Services/UserService'
import Loading from "./Loading.jsx";
import LoanService from '../Services/LoanService'
import moment from 'moment'
const { Option } = Select;
function LoanReport() {
  const [employs,setEmployes]=useState([])
  const [loading,setLoading]=useState(true)
  const [err,setError]=useState(false)
  const [loadingData,setLoadingData]=useState(false)
  const [state, setState] = useState({
    columns: [
      {
        title: "Sr.",
        render: (rowData) => rowData.tableData.id + 1,
      },
      { title: "Employee ID", field: "empId",render:(row)=>`${row.userId.empId}` },
      { title: "Employee Name",render:(row)=>`${row.userId.firstName} ${row.userId.lastName}`
    
    },

      {
        title: "Request Date",
        field: "requestDate",
        render:(row)=>moment(row.requestDate).calendar()
      },
      { title: "Decision Date", field: "decisionDate",
      render:(row)=>moment(row.decisionDate).calendar()
    },
      { title: "Amount", field: "loanAmount" },
      { title: "Remarks", field: "remarks" },
      { title: "Status", field: "finalStatus" },
    ],
    rows: [
     
    ],
  });

  useEffect(()=>{

    UserService.getAllUsers()
    .then(res=>{

      setEmployes(res.data)
      setError(false)
      setLoading(false)
    })
    .catch((err)=>{
      setError(true)
      setLoading(false)
      console.log(err.response)

    })

  },[])


  const onFinish = (values) => {
    setLoadingData(true)
    let {empID,fromDate,toDate}=values
    if(!empID){

      fromDate=moment(fromDate).toISOString()
      toDate=moment(toDate).toISOString()
      LoanService.getLoanReportofAllUser({ fromDate,
      toDate})
      .then(res=>{
        console.log(res.data)
        setState({...state,rows:res.data})
        setLoadingData(false)
      })
      .catch(err=>{
        console.log(err.response)
        alert("Error Occured..")
        //setLoadingData(false)
      })

    }

    else{

      fromDate=moment(fromDate).toISOString()
      toDate=moment(toDate).toISOString()
      LoanService.getLoanReportOfUser({ empID,fromDate,
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
      span: 10,
    },
  };

  if(loading){

    return <Loading/>
  }

  else if (err){

    return <h4 className='text-center text-danger'>Request Failed</h4>
  }
  else
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
            <Form.Item label="EmployeeName" name="empID">
              <Select
                style={{ width: 300 }}
                placeholder="Select Employee"
              >
                {employs.map(emp=><Option key={emp._id} value={emp._id}>{`${emp.firstName} ${emp.lastName}`}</Option>)}
              </Select>
            </Form.Item>
          </Col>
          <Col className="gutter-row" span={12}>
            <Form.Item label=" Date from" name="fromDate"
                        rules={[
                          {
                            required:true
                          }
                        ]}
            >
              <DatePicker  style={{ width: 310 }} />
            </Form.Item>
            <Form.Item label=" Date to" name="toDate"
            rules={[
              {
                required:true
              }
            ]}
            
            >
              <DatePicker style={{ width: 310 }} />
            </Form.Item>

            <Form.Item  {...tailLayout}>
              <Button disabled={loadingData} type="primary" htmlType="submit">
                View Loan Report
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      {state.rows.length>0&&!loadingData?<EmployeeTable data={state} title="Loan Report "></EmployeeTable>:<div>
        
          {loadingData?<Loading/>:<h5 className='text-danger text-center'>No Report Found</h5>}
        </div>}
    </div>
  );
}

export default LoanReport;
