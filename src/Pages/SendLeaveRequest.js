import React,{useState} from "react";
import {Form,Input,DatePicker,Button,Row,Col, Divider, Select} from 'antd'
import LeaveService from "../Services/LeaveService";
const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 18,
  },
};


function SendLeaveRequest(props) {

  const [loading,setLoading]=useState(false)
  const [error,setError]=useState(false)
  function onFinish(data){
    console.log(data)
    setLoading(true)
    LeaveService.applyleave(data)
    .then((res)=>{
      setLoading(false)
      alert('Successfully Applied for Leave.')
    })
    .catch(err=>{
      setLoading(false)
      console.log(err.response)
      alert(err.response.data)
    })
  }

  return (
    <div>

      <div className='w-75' >
        <h4>Leave Request Form</h4>
        <Divider/>
      <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={ 
        {required: '${label} is required!'}}>
      
      <Row>
        <Col lg={12} md={24} sm={24} xs={24}>
            <Form.Item
              name='leaveType'
              label="Type"
              rules={[
                {
                  required: true,
          
                },
              ]}>
                <Select placeholder='Select Leave Type'>
                  <Select.Option value='sick leave'>Sick Leave</Select.Option>
                  <Select.Option value='casual leave'>Casual Leave</Select.Option>
                  <Select.Option value='annual leave'>Annual Leave</Select.Option>
                </Select>
            </Form.Item>
      </Col>


      <Col lg={12} md={24} sm={24} xs={24}>
      <Form.Item
        name='fromDate'
        rules={[
          {
            required:true,
          },
        ]}
        label="From Date">
        <DatePicker className='w-100' />
      </Form.Item>
      </Col>

      <Col lg={12} md={24} sm={24} xs={24} >
      <Form.Item name='toDate'
                rules={[
                  {
                    required:true
                  },
                ]}
      label="To Date">
        <DatePicker className='w-100' />
      </Form.Item>
      </Col>

      <Col lg={12} md={24} sm={24} xs={24}>
      <Form.Item
        name='reasonOfLeave'
        label="Reason"
        rules={[
          {
            required:true
          },
        ]}
      >
        <Input.TextArea placeholder='Brief Description' />
      </Form.Item>
      </Col>
    
      <Col lg={24} md={24} sm={24} xs={24}>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 19 }}>
        <Button disabled={loading} type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      </Col>

      </Row>
    </Form>
      </div>
    </div>
  );
}

export default SendLeaveRequest;
