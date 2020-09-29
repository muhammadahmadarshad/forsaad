import React,{useState} from 'react'
import { Card } from "antd";
import { Row, Col, Divider } from "antd";
import { Form, Input, Button, Select } from "antd";
const { Option } = Select;
export default function PendingLeaveByUser() {
    const [userName, setUserName] = useState("Saad");

    const onFinish = (values) => {
      console.log(values);
    };
    return (
        <div>
                  <Card title={"Pending Leave from " + userName}>
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
            <div style={{ marginTop: "8%" }}>
              <strong>Department Name : </strong>
            </div>
          </Col>
          <Col xs={{ span: 12 }} lg={{ span: 6 }}>
            <div style={{ marginTop: "8%" }}>
              <p>14-OCT-2020</p>
            </div>
            <div style={{ marginTop: "8%" }}>
              <p>12-OCT-2020</p>
            </div>
            <div style={{ marginTop: "8%" }}>
              <p>1 </p>
            </div>
            <div style={{ marginTop: "8%" }}>
              <p>Customer Sales Executive </p>
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
              <p>Waqar Hassan</p>
            </div>
            <div style={{ marginTop: "8%" }}>
              <p>28-OCT-2020</p>
            </div>
            <div style={{ marginTop: "8%" }}>
              <p>Casual Leave 5/5</p>
            </div>
            <div style={{ marginTop: "8%" }}>
              <p>
                {" "}
                I am requesting a Leave for One day on 28th of October Due to
                Some Import i want leave due to illness{" "}
              </p>
            </div>
          </Col>
        </Row>
        <Divider></Divider>
        <Form name="control-ref" onFinish={onFinish}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" xs={{ span: 24 }} lg={{ span: 12 }}>
              <Form.Item
                name="Remarks"
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
                name="Action"
                label="Action"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select placeholder="Select Any option">
                  <Option value="male">Pending</Option>
                  <Option value="female">Approved</Option>
                  <Option value="other">Rejected</Option>
                </Select>
              </Form.Item>
              <Form.Item>
                <Button
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
