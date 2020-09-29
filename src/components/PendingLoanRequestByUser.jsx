import React, { useState } from "react";
import { Card } from "antd";
import { Row, Col, Divider } from "antd";
import { Form, Input, Button, Select } from "antd";
import LoanService from '../Services/LoanService'
import moment from 'moment'
const { Option } = Select;
export default function PendingLoanRequestByUser({data,getData}) {
    let {   
        finalStatus,
        loanAmount,    
        reasonOfLoan,
        requestDate,
        userId,remarks,
        _id}=data

    const request=  moment(requestDate)
    const [loading,setLoading]=useState(false)
    const [form]= Form.useForm()
    form.setFieldsValue({remarks:remarks?remarks:'',finalStatus})
    const onFinish = (values) => {
        setLoading(true)
      LoanService.verffyLoan(_id,values)
      .then(()=>{

        getData()
        setLoading(false)

      })
      .catch((err)=>{
        console.log(err)
        setLoading(false)
        alert('Request Failed')
      })
    };
    return (
        <div className='mb-2'>
        <Card title={`Pending Loan Request from ${userId.firstName} ${userId.lastName}`}>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row"  xs={{ span: 12 }} lg={{ span: 6 }}>
                <div style={{ marginTop: "8%" }}>
                <strong>Request Date : </strong>
                </div>
                <div style={{ marginTop: "8%" }}>
                <strong>Loan Amount : </strong>
                </div>
            </Col>
            <Col  xs={{ span: 12 }} lg={{ span: 6 }}>
                <div style={{ marginTop: "8%" }}>
                <p>{request.calendar()}</p>
                </div>
                <div style={{ marginTop: "8%" }}>
                <p>{loanAmount}</p>
                </div>
            </Col>

            <Col className="gutter-row"  xs={{ span: 12 }} lg={{ span: 6 }}>
                <div style={{ marginTop: "8%" }}>
                <strong>Employee Name: </strong>
                </div>

                <div style={{ marginTop: "8%" }}>
                <strong>Reason of Loan:</strong>
                </div>
            </Col>
            <Col className="gutter-row"  xs={{ span: 12 }} lg={{ span: 6 }}>
                <div style={{ marginTop: "8%" }}>
                <p>{`${userId.firstName} ${userId.lastName}`}</p>
                </div>

                <div style={{ marginTop: "8%" }}>
                <p>
                    {" "}
                    {reasonOfLoan}
                    {" "}
                </p>
                </div>
            </Col>
            </Row>
            <Divider></Divider>
            <Form form={form} name="control-ref" onFinish={onFinish}>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row"  xs={{ span: 12 }} lg={{ span: 6 }}>
                <Form.Item
                    
                    name="remarks"
                    label="Remarks"
                    rules={[
                    {
                        required: true,
                    },
                    ]}
                >
                    <Input.TextArea placeholder='Remarks' />
                </Form.Item>
                </Col>
                <Col className="gutter-row"  xs={{ span: 12 }} lg={{ span: 6 }}>
                <Form.Item
                    name="finalStatus"
                    label="Action"
                    rules={[
                    {
                        required: true,
                    },
                    ]}
                >
                    <Select placeholder="Select Any option">
                    <Option value="pending">Pending</Option>
                    <Option value="approved">Approved</Option>
                    <Option value="disapproved">Rejected</Option>
                    </Select>
                </Form.Item>
                
                </Col>
                <Form.Item>
                    <Button
                    type="primary"
                    htmlType="submit"
                    style={{ marginLeft: "75%" }}
                    disabled={loading}
                    >
                    Save Changes
                    </Button>
                </Form.Item>
            </Row>
            </Form>
      </Card> 
    </div>
    )
}
