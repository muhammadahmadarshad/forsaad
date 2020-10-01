import React,{useState} from 'react'
import { Card } from "antd";
import { Row, Col, Divider } from "antd";
import { Form, Input, Button, Select } from "antd";
import moment from 'moment'
import LeaveService from '../Services/LeaveService';
const { Option } = Select;
export default function PendingLeaveByUser({leave,getLeaves}) {

  const [verify,setVerify]=useState(false)
  let [form]=Form.useForm()
  let {userId,approvalStatus,
    fromDate,
    leaveType,
    numberOfDays,
    reasonOfLeave,
    remainingLeaves,
    requestDate,
    toDate,
    totalLeaves,
  }= leave
  requestDate=moment(requestDate)
  toDate= moment(toDate)
  fromDate=moment(fromDate)

  form.setFieldsValue({approvalStatus})
  const onFinish=(values)=>{
    setVerify(true)
   LeaveService.verifyleave(leave._id,values)
   .then(()=>{
    alert("Leave has been verified.")
    setVerify(false)
    getLeaves()
   })
   .catch((err)=>{
    setVerify(false)
    alert("Request Failed")
   })

  }
    return (
        <div>
      <Card title={`Pending Leave from ${userId.empId} ${userId.firstName} ${userId.lastName}`}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" xs={{ span: 12 }} lg={{ span: 6 }}>
            <div style={{ marginTop: "8%" }}>
              <strong>Request Date : </strong>
            </div>
            <div style={{ marginTop: "8%" }}>
              <strong>Leave From : </strong>
            </div>
            <div style={{ marginTop: "8%" }}>
              <strong>total days : </strong>
            </div>

          </Col>
          <Col xs={{ span: 12 }} lg={{ span: 6 }}>
            <div style={{ marginTop: "8%" }}>
              <p>{requestDate.calendar()}</p>
            </div>
            <div style={{ marginTop: "8%" }}>
            <p>{fromDate.format("dddd, MMMM Do YYYY")}</p>
            </div>
            <div style={{ marginTop: "8%" }}>
              <p>{numberOfDays} </p>
            </div>

          </Col>

          <Col className="gutter-row" xs={{ span: 12 }} lg={{ span: 6 }}>
            <div style={{ marginTop: "8%" }}>
              <strong>Employee Name: </strong>
            </div>
            <div style={{ marginTop: "8%" }}>
              <strong>Leave Till: </strong>
            </div>
            <div style={{ marginTop: "8%" }}>
              <strong>Leave Type: </strong>
            </div>
            <div style={{ marginTop: "8%" }}>
              <strong>Reason of Leave:</strong>
            </div>
          </Col>
          <Col className="gutter-row" xs={{ span: 12 }} lg={{ span: 6 }}>
            <div style={{ marginTop: "8%" }}>
            <p>{`${userId.empId} ${userId.firstName} ${userId.lastName}`}</p>
            </div>
            <div style={{ marginTop: "8%" }}>
            <p>{fromDate.format("dddd, MMMM Do YYYY")}</p>
            </div>
            <div style={{ marginTop: "8%" }}>
              <p>{`${leaveType} ${remainingLeaves}/${totalLeaves}`}</p>
            </div>
            <div style={{ marginTop: "8%" }}>
              <p>
                {" "}
                {reasonOfLeave}{" "}
              </p>
            </div>
          </Col>
        </Row>
        <Divider></Divider>
        <Form form={form} name="control-ref" onFinish={onFinish}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" xs={{ span: 24 }} lg={{ span: 12 }}>
              <Form.Item
                name="remarks"
                label="Remarks"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input.TextArea />
              </Form.Item>
            </Col>
            <Col className="gutter-row" xs={{ span: 24 }} lg={{ span: 12 }}>
              <Form.Item
                name="approvalStatus"
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
                  <Option value="rejected">Rejected</Option>
                </Select>
              </Form.Item>
              <Form.Item>
                <Button
                  disabled={verify}
                  type="primary"
                  htmlType="submit"
                  style={{ marginLeft: "85%" }}
                >
                  Submit
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
        </div>
    )
}
