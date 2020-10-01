import React, { useEffect, useState } from "react";
import { Form, Button } from "antd";
import { Row, Col, Divider } from "antd";
import UserService from '../Services/UserService'
import { DatePicker } from "antd";
import { Select } from "antd";
import Loading from "./Loading";
import attendanceService from "../Services/AttendanceService";
const { Option } = Select;





function ManuallymarkAttendance() {

  const [loading,setLoading]=useState(true)
  const [err,setErr]=useState(false)
  const [employs,setEmploys]=useState([])

  useEffect(()=>{
    UserService.getAllUsers()
    .then(({data})=>{

      setEmploys(data)

      setErr(false)
      setLoading(false)})
    .catch(()=>{
      setErr(true)
      setLoading(false)
    })

  },[])


  const onFinish = (values) => {
    let {empName,status, checkInDate} =values
    attendanceService.ManuallyMarkAttendance(empName,{status,checkInDate})
    .then(res=>{  
      alert('Successfully Marked..')
    })
    .catch(err=>{
      alert("Request Failed.")
    })
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const layout = {
    labelCol: {
      span: 14,
    },
    wrapperCol: {
      span: 14,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 14,
      span: 10,
    },
  };

  if (loading){

    return <Loading/>
  }

  else if (err) {

    return <h3 className='text-center text-danger'>Request Failed</h3>
  }


  return (
    <div>
      <Divider orientation="left">Mannually Mark Attendance</Divider>

      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 18 }}>
          <Col className="gutter-row" span={14}>
            <Form.Item label="EmployeeName" name="empName"
              rules={[{
                required:true,
                message:"Employee Must be selected."
              }]}
            
            >
              <Select
                style={{ width: 210 }}
                placeholder="Select Employee"
              >
                {employs.map(((emp,key)=><Option key={key} value={emp._id}>{`${emp.empId}  ${emp.firstName} ${emp.lastName}`}</Option>))}
                
              </Select>
            </Form.Item>
            <Form.Item label="Date" name="checkInDate"
            
              rules={[{
                required:true,
                message:"Date Should Not be Empty."
              }]}
            
            >
              <DatePicker  />
            </Form.Item>
            <Form.Item label="Status" name="status"
            rules={[{

              required:true,
              message:'Status Should not be Empty..'
            }]}
            
            >
              <Select placeholder="Select Status">
                <Option value="absent">Absent</Option>
                <Option value="present">Present</Option>
              </Select>
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default ManuallymarkAttendance;
