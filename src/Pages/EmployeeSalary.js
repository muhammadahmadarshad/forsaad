import React, { useEffect, useState } from "react";
import { Form, Button } from "antd";
import { Row, Col, Divider } from "antd";
import EmployeeTable from "../components/EmployeeTable.jsx";
import { DatePicker } from "antd";
import { Select } from "antd";
import { NavLink } from "react-router-dom";
import salaryService from "../Services/Salary.js";
import Loading from './Loading'
const { Option } = Select;
function EmployeeSalary() {

  const [loading,setLoading]=useState(false)
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
            <Button>Process</Button>
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
    salaryService.calculateSalary(date.format('YYYY-MM'))
    .then(res=>{
      console.log(res.data)
      setState((prev)=>{
        
        return {...state,rows:res.data}})
        setLoading(false)
        
    })

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
        loading?<Loading/>:<div></div>
      
      
      }
    </div>
  );
}

export default EmployeeSalary;
