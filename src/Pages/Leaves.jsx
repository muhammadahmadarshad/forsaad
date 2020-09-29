import React from "react";
import { Card } from "antd";
import { Row, Col, Divider } from "antd";
import { Form, Input, Button, Select } from "antd";
function Leaves() {
  return (
    <div>
      <h5>Leave</h5>
      <Divider></Divider>
      <Card>
        <Row>
          <Col md={24} lg={6} sm={24} xs={12} span={12}>
            <div style={{ marginTop: "8%" }}>
              <strong>Sick Leave</strong>
            </div>
            <div style={{ marginTop: "8%" }}>
              <strong>Annual Leave : </strong>
            </div>
          </Col>
          <Col md={24} lg={6} sm={24} xs={12} span={12}>
            <div style={{ marginTop: "8%" }}>
              <p>12/12</p>
            </div>
            <div style={{ marginTop: "8%" }}>
              <p>11/11 </p>
            </div>
          </Col>
          <Col md={24} lg={6} sm={24} xs={12} span={12}>
            <div style={{ marginTop: "8%" }}>
              <strong>Casual Leave</strong>
            </div>
          </Col>
          <Col md={24} lg={6} sm={24} xs={12} span={12}>
            <div style={{ marginTop: "8%" }}>
              <p>8/4</p>
            </div>
          </Col>
        </Row>
        <Col md={24} lg={24} sm={24} xs={24} span={24}>
        
        </Col>
      </Card>
    </div>
  );
}

export default Leaves;
