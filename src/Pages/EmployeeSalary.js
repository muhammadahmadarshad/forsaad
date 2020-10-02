import React, { useEffect, useState } from "react";
import { Form, Button } from "antd";
import { Row, Col, Divider } from "antd";
import EmployeeTable from "../components/EmployeeTable.jsx";
import { DatePicker } from "antd";
import {  useParams } from "react-router-dom";
import salaryService from "../Services/Salary.js";
import Loading from './Loading'
import moment from 'moment'
import {useAuth} from '../Context/auth'
function EmployeeSalary(props) {
  const [err,setErr]=useState(false)
  const [form]=Form.useForm()
  const redux=useAuth()
  let {id}=useParams()

  form.setFieldsValue({date:moment(id)})
  useEffect(()=>{
    if(id){
    salaryService.calculateSalary(id)
    .then(res=>{
      console.log(res.data)
      setState((prev)=>{        
        return {...prev,rows:res.data}})
        setErr(false)
        setLoading(false)
        
    }).catch(err=>{
      setErr(true)
      setLoading(false)
    })}
    else 
      setLoading(false)

  },[id])
  const [loading,setLoading]=useState(true)
  const [state, setState] = useState({
    columns: [
      {
        title: "Employee ID",
        field: "empName",render:(row)=>`${row.empId}`,
      },
      {
        title: "Employee Name",
        field: "empName",render:(row)=>`${row.firstName} ${row.lastName}`,
      },
      { title: "Working Days", field: "workingDays",render:({noOfWorkDays})=>noOfWorkDays*4 },
      {
        title: "Worked",
        field: "daysWorked",
      },
      { title: "Gross Total", field: "basicSalary" },
      { title: "Deduction", field: "deduction" },
      { title: "Extra Day", field: "extraDay" },
      { title: "Payable", field: "payAble" },
      {
        title: "Actions",
        render: (rowData) => {
          return (
            <Button color='success' onClick={()=>{
                console.log(rowData)
                redux.dispatch({type:'ProcessSalary',payload:{...rowData,salaryMonth:moment(id)}})
                props.history.push(`/admin/ProcessSalary`)
            }} >Process</Button>
          );
        },
      },
    ],
    rows: [
    ],
  });


  function onChangedate(date, dateString) {
    console.log(dateString);
  }
  const onFinish = (values) => {
    setLoading(true)
    let {date}=values
    props.history.push(`/admin/EmployeeSalary/${date.format('YYYY-MM')}`)

  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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

  
  return (
    <div className='p-5'>
      <Divider orientation="left">Process Salary</Divider>

      <Form
      form={form}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" xs={{ span: 24 }} lg={{ span: 12 }}>
            <Form.Item label="Select Month" name="date"
              rules={[{
                required:true,
                message:'Month Should Not be Empty.'
              }]}
            
            >
              <DatePicker placeholder='Select Month' onChange={onChangedate}  style={{ width: "80%" }} />
            </Form.Item>

            <Form.Item>
              <Button
                style={{ marginLeft: "46%" }}
                type="primary"
                htmlType="submit"
              >
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      {state.rows.length>0?<EmployeeTable data={state} title="Employee Salary"></EmployeeTable>:
        loading?<Loading/>:<div>{err?<h5 className='text-center text-danger'>Not Found</h5>:""}</div>
      
      
      }
    </div>
  );
}

export default EmployeeSalary;
