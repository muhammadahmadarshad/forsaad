import React from "react";
import SalarySlip from "./SalarySlip";
import { Button, Col, Form } from "antd";
import { NavLink } from "react-router-dom";
function MonthlySalary() {
  return (
    <div>
      <SalarySlip />
      <Col md={24} lg={24} sm={24} xs={24} span={24}>
        <Form.Item>
      
        </Form.Item>
      </Col>
    </div>
  );
}

export default MonthlySalary;
