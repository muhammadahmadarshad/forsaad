import React,{useEffect, useState} from "react";
import {Form,Input,DatePicker,Button,Row,Col, Divider, Select} from 'antd'
import LeaveService from "../Services/LeaveService";
import LastLeaveRequest from "../components/LastLeaveRequest";
import Loading from "./Loading";
const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 18,
  },
};


function SendLeaveRequest(props) {
  const [loadingData,setLoadingData]=useState(true)
  const [data,setData]= useState([])
  const [loading,setLoading]=useState(false)

  const deleteRow=(oldData) =>
  new Promise((resolve) => {
    LeaveService.deleteLeave(oldData._id)
    .then(res=>{
        const data1 = [...data];
        data1.splice(data.indexOf(oldData), 1);
        setData(data1)
      resolve()
    }).
    catch((err)=>{
      console.log(err.response)
      alert('You Are Not Allowed to Delete.')
      resolve()
    })

  })

  useEffect(()=>{


    LeaveService.getMyleavesRequest()
    .then(res=>{
      setData(res.data)
      setLoadingData(false)
    })
    .catch(err=>{
      setLoadingData(false)
    })

  },[])


  function onFinish(values){
    setLoading(true)
    LeaveService.applyleave(values)
    .then((res)=>{
      console.log(res)
      let leaves=[...data]
      leaves.unshift(res.data)
      setData(leaves)
      setLoading(false)
      alert('Successfully Applied for Leave.')
    })
    .catch(err=>{
      setLoading(false)
      console.log(err.response)
      alert(err.response.data)
    })
  }

  if(loadingData){
      return <Loading/>
  }
  return (
    <div className='p-5'>

      <div>
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

      <LastLeaveRequest DeleteData={deleteRow} data={data}/>
    </div>
  );
}

export default SendLeaveRequest;
