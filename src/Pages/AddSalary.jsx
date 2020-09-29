import React from 'react'
import UserService from '../Services/UserService'
import {
    Form,
    Input,
    Button,Row, Col, Divider
  } from 'antd';

const layout = {
  labelCol: {
    span: 7,
  },
  wrapperCol: {
    span: 12,
  },
};
export default function AddSalary(props) {
    let {history,employeeID}=props
    const onFinish = values => {
        let {salary}= values
        UserService.addUserSalary(employeeID,salary)
        .then(()=>{

          history.push('/admin/EmployeeManagement')

        }).catch((err)=>{
          console.log(err.response)
          alert("Request Failed.")
        })
        
        };
    
    return (
        <div className='mt-4'>
        <Form {...layout} name="nest-messages" onFinish={onFinish} >
          <h5>Salary Info</h5>
          <Divider/>
            <Row>
        <Col md={24} lg={12} sm={24} xs={24} span={12}>
            <Form.Item initialValue={0}
              name={['salary', 'basicSalary']}
              label="Basic Salary">
            <Input type='number' />
            </Form.Item>
      </Col>
      <Col md={24} lg={12} sm={24} xs={24} span={12}>
            <Form.Item
              initialValue={0}
              name={['salary', 'houseRent']}
              label="House Rent">
        <Input type='number' />
      </Form.Item>
      </Col>

      <Col md={24} lg={12} sm={24} xs={24} span={12}>
            <Form.Item
              initialValue={0}
              name={['salary', 'travelAllowance']}
              label="Travel Allowance">
        <Input type='number' />
      </Form.Item>
      </Col>

      <Col md={24} lg={12} sm={24} xs={24} span={12}>
            <Form.Item
              initialValue={0}
              name={['salary', 'medicalAllowance']}
              label="Medical Allowance">
        <Input type='number' />
      </Form.Item>
      </Col>

      <Col md={24} lg={12} sm={24} xs={24} span={12}>
            <Form.Item
              initialValue={0}
              name={['salary', 'providentFund']}
              label="Provident Fund">
              
        <Input type='number' />
      </Form.Item>
      </Col>
      <Col md={24} lg={24} sm={24} xs={24} span={24}>
      <Form.Item  wrapperCol={{ ...layout.wrapperCol, offset:18  }}>
        <Button type="primary" htmlType="submit">
          Add Salary
        </Button>
      </Form.Item>

      </Col>

      </Row>
      </Form>
    </div>
    )
}
