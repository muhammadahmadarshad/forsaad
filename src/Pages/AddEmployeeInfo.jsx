import React,{useState} from 'react'
import moment from 'moment'
import {
    Form,
    Input,
    Button,Row, Col, Divider, Select, DatePicker,
  } from 'antd';

import UserService from '../Services/UserService'
const validateMessages = {
    required: 'Should Not be Empty!',
    types: {
      email: 'Should be Valid Email!',
      number: 'Not a valid number!',
      phone:'${label} is not a valid phone number!'
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
const layout = {
  labelCol: {
    span: 7,
  },
  wrapperCol: {
    span: 12,
  },
};
export default function EmployeeInfo(props) {

  let {setCurrent,departments,contracts,setEmployeeID}=props
  let [loading,setLoading]=useState(false)
    const onFinish = values => {
        setLoading(true)
        let {user}= values 
        let joiningDate= moment(user.joiningDate).format('YYYY-MM-DD').toString()
        let isAdmin=user.employeeRole==='Administator'?true:false
        UserService.register({...user,isAdmin,joiningDate})
        .then(res=>{
          setEmployeeID(res.data._id)          
          setLoading(false)
          setCurrent(1)
        })
        .catch(err=>{
          setLoading(false)
          console.log(err.response)
          alert("Request Failed")


        })
      
      
      
      } 
    
    
    return (
        <div className='mt-4'>
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
          <h5>Add Employee Info</h5>
          <Divider/>
            <Row>
            <Col md={24} lg={12} sm={24} xs={24} span={12}>
            <Form.Item
              name={['user', 'firstName']}
              label="Firstname"
              rules={[
              {
                required: true,
              },
              ]}>
            
        <Input />
      </Form.Item>
      </Col>
      <Col md={24} lg={12} sm={24} xs={24} span={12}>

      <Form.Item
        name={['user', 'lastName']}
        label="Lastname"
        rules={[
          {
            required:true,
          },
        ]}>
        <Input  />
      </Form.Item>
      </Col>
      <Col md={24} lg={12} sm={24} xs={24} span={12}>
      <Form.Item
        name={['user', 'gender']}
        label="Gender"
        rules={[
          {
            required:true
          }]}
      >
        <Select defaultValue='Select Gender' >
            <Select.Option value='Male'>Male</Select.Option>
            <Select.Option value='Female'>Female</Select.Option>
        </Select>
      </Form.Item>
      </Col>
      
      <Col md={24} lg={12} sm={24} xs={24} span={12}>
      <Form.Item
        name={['user', 'maritalStatus']}
        label="Marital Status"
        rules={[
          {
            required:true
          }]}>
            <Select defaultValue='Select Martial' >
            <Select.Option value='Single'>Single</Select.Option>
            <Select.Option value='Married'>Married</Select.Option>
            <Select.Option value='Divorced'>Divorced</Select.Option>
            <Select.Option value='Widowed'>Widowed</Select.Option>
        </Select>
      </Form.Item>
      </Col>

      <Col md={24} lg={12} sm={24} xs={24} span={12}>
      <Form.Item
        name={['user', 'mobileNumber']}
        label="Phone No."
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input name='phone' type='number' />
      </Form.Item>
      </Col>
      <Col md={24} lg={12} sm={24} xs={24} span={12}>
      <Form.Item
        name={['user', 'landlineNumber']}
        label="Landline No."
      >
        <Input name='landlineNumber' type='number' />
      </Form.Item>
      </Col>

      <Col md={24} lg={12} sm={24} xs={24} span={12}>
      <Form.Item
        name={['user', 'idCardNumber']}
        label="NIC"
        rules={[
          {
            len:13,
            required:true,
            pattern:"^[0-9]+$",
            message:'Length should be 13 & Must be Numbers'
          },
        ]}
      >
        <Input />
      </Form.Item>
      </Col>

      <Col md={24} lg={12} sm={24} xs={24} span={12}>
      <Form.Item
        name={['user', 'joiningDate']}
        label="Joining Date"
        
      >
        <DatePicker className='w-100' placeholder='Select Date'/>
      </Form.Item>
      </Col>
      <Col md={24} lg={12} sm={24} xs={24} span={12}>
      <Form.Item
        name={['user', 'mailingAddress']}
        label="Mailing Address"
        rules={[
          {
            required:true
          },
        ]}
      >
        <Input.TextArea name='mailingAddress' />
      </Form.Item>
      </Col>

      <Col md={24} lg={12} sm={24} xs={24} span={12}>
      <Form.Item
        name={['user', 'permanentAddress']}
        label="Permanent Address"
        rules={[
          {
            required:true
          },
        ]}
      >
        <Input.TextArea name='mailingAddress' />
      </Form.Item>
      </Col>

      <Col md={24} lg={12} sm={24} xs={24} span={12}>
      <Form.Item
        name={['user', 'email']}
        label="Email Address"
        rules={[
          {
            type: 'email',
            required:true
          },
        ]}
      >
        <Input name='email' />
      </Form.Item>
      </Col>

      <Col md={24} lg={12} sm={24} xs={24} span={12}>
      <Form.Item 
        name={['user', 'password']}
        label="Password"
        rules={[
          {
            required:true
          },
        ]}
      >
        <Input type='password' size='large' />
      </Form.Item>
      </Col>


      <Col md={24} lg={12} sm={24} xs={24} span={12}>
      <Form.Item
        name={['user', 'department']}
        label="Department Name"
        rules={[
          {
            required:true
          }]}>
            <Select defaultValue='Select Department' >
            {departments.map(({_id,name},index)=>
            (<Select.Option key={index} value={_id}>{name}</Select.Option>))}
        </Select>
      </Form.Item>
      </Col>
      
      <Col md={24} lg={12} sm={24} xs={24} span={12}>
      <Form.Item
        name={['user', 'contract']}
        label="Contract Name"
        rules={[
          {
            required:true
          }]}>
            <Select defaultValue='Select Contract Name' >
            {contracts.map(({_id,name},index)=>
            (<Select.Option key={index} value={_id}>{name}</Select.Option>))}
        </Select>
      </Form.Item>
      </Col>

      <Col md={24} lg={12} sm={24} xs={24} span={12}>
      <Form.Item
        name={['user', 'noOfWorkDays']}
        label="Weekly Working Days"
        rules={[
          {
            required:true
          }]}>
            <Select defaultValue='Select Days' >
            <Select.Option value='1'>1 Day</Select.Option>
            <Select.Option value='2'>2 Days</Select.Option>
            <Select.Option value='3'>3 Days</Select.Option>
            <Select.Option value='4'>4 Days</Select.Option>
            <Select.Option value='5'>5 Days</Select.Option>
            <Select.Option value='6'>6 Days</Select.Option>
            <Select.Option value='7'>7 Days</Select.Option>
        </Select>
      </Form.Item>
      </Col>

      <Col md={24} lg={12} sm={24} xs={24} span={12}>
      <Form.Item
        name={['user', 'employeeStatus']}
        label="Employee Status"
        rules={[
          {
            required:true
          }]}>
            <Select defaultValue='Select Status' >
            <Select.Option value='Active'>Active</Select.Option>
            <Select.Option value='Inactive'>Inactive</Select.Option>
        </Select>
      </Form.Item>
      </Col>

      <Col md={24} lg={12} sm={24} xs={24} span={12}>
      <Form.Item
        name={['user', 'profile_pic']}
        label="Profile Pic">

            <Input type='file' />
      </Form.Item>
      </Col>

      <Col md={24} lg={12} sm={24} xs={24} span={12}>
      <Form.Item
        name={['user', 'employeeRole']}
        label="Employee Role"
        rules={[
          {
            required:true
          }]}>
            <Select defaultValue='Employee Role' >
            <Select.Option value='Employee'>Employee</Select.Option>
            <Select.Option value='Administator'>Administator</Select.Option>
        </Select>
      </Form.Item>
      </Col>
    
      <Col md={24} lg={24} sm={24} xs={24} span={24}>
      <Form.Item  wrapperCol={{ ...layout.wrapperCol, offset:18  }}>
        <Button disabled={loading} type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>

      </Col>

      </Row>
      </Form>
            </div>
    )
}
