import React from "react";
import { Card } from "antd";
import { Row, Col, Divider } from "antd";
import { Form, Input, Button, Select } from "antd";
import { NavLink } from "react-router-dom";
function Profile() {
  return (
    <div>
      <h5>Employee Profile</h5>
      <Divider />
      <Row>
        <Col md={24} lg={6} sm={24} xs={12} span={12}>
          <div style={{ marginTop: "8%" }}>
            <strong>First Name : </strong>
          </div>
          <div style={{ marginTop: "8%" }}>
            <strong>Gender : </strong>
          </div>
        </Col>
        <Col md={24} lg={6} sm={24} xs={12} span={12}>
          <div style={{ marginTop: "8%" }}>
            <p>adil</p>
          </div>
          <div style={{ marginTop: "8%" }}>
            <p>Male </p>
          </div>
        </Col>
        <Col md={24} lg={6} sm={24} xs={12} span={12}>
          <div style={{ marginTop: "8%" }}>
            <strong>Last Name : </strong>
          </div>
          <div style={{ marginTop: "8%" }}>
            <strong>Martial Status : </strong>
          </div>
        </Col>

        <Col md={24} lg={6} sm={24} xs={12} span={12}>
          <div style={{ marginTop: "8%" }}>
            <p>irshad </p>
          </div>
          <div style={{ marginTop: "8%" }}>
            <p>Single </p>
          </div>
        </Col>

        <Col md={24} lg={6} sm={24} xs={12} span={12}>
          <div style={{ marginTop: "8%" }}>
            <strong>Mobile Number : </strong>
          </div>
          <div style={{ marginTop: "8%" }}>
            <strong>ID Card Number : </strong>
          </div>
        </Col>
        <Col md={24} lg={6} sm={24} xs={12} span={12}>
          <div style={{ marginTop: "8%" }}>
            <p>4444444 </p>
          </div>
          <div style={{ marginTop: "8%" }}>
            <p>000000000000 </p>
          </div>
        </Col>

        <Col md={24} lg={6} sm={24} xs={12} span={12}>
          <div style={{ marginTop: "8%" }}>
            <strong>Landline Number: </strong>
          </div>
          <div style={{ marginTop: "8%" }}>
            <strong>Joining Date: </strong>
          </div>
        </Col>

        <Col md={24} lg={6} sm={24} xs={12} span={12}>
          <div style={{ marginTop: "8%" }}>
            <p>5555 </p>
          </div>
          <div style={{ marginTop: "8%" }}>
            <p>2017-11-15</p>
          </div>
        </Col>
        <Col md={24} lg={6} sm={24} xs={12} span={12}>
          <div style={{ marginTop: "8%" }}>
            <strong>Mailing Address</strong>
          </div>
          <div style={{ marginTop: "8%" }}>
            <strong>Email Address</strong>
          </div>
        </Col>

        <Col md={24} lg={6} sm={24} xs={12} span={12}>
          <div style={{ marginTop: "8%" }}>
            <p>Mailing Address </p>
          </div>
          <div style={{ marginTop: "8%" }}>
            <p>Email@gmail.com </p>
          </div>
        </Col>

        <Col md={24} lg={6} sm={24} xs={12} span={12}>
          <div style={{ marginTop: "8%" }}>
            <strong>Permanent Address </strong>
          </div>
          <div style={{ marginTop: "8%" }}>
            <strong>Department Name </strong>
          </div>
        </Col>

        <Col md={24} lg={6} sm={24} xs={12} span={12}>
          <div style={{ marginTop: "8%" }}>
            <p>hello 123 Block Lahore </p>
          </div>
          <div style={{ marginTop: "8%" }}>
            <p>Customer Executive </p>
          </div>
        </Col>

        <Col md={24} lg={6} sm={24} xs={12} span={12}>
          <div style={{ marginTop: "8%" }}>
            <strong>Contract Name</strong>
          </div>
          <div style={{ marginTop: "8%" }}>
            <strong>Number of working days in week </strong>
          </div>
        </Col>

        <Col md={24} lg={6} sm={24} xs={12} span={12}>
          <div style={{ marginTop: "8%" }}>
            <p>Permanent Employee </p>
          </div>
          <div style={{ marginTop: "8%" }}>
            <p>5 days</p>
          </div>
        </Col>

        <Col md={24} lg={6} sm={24} xs={12} span={12}>
          <div style={{ marginTop: "8%" }}>
            <strong>Employee Status </strong>
          </div>
          <div style={{ marginTop: "8%" }}>
            <strong>Employee Role </strong>
          </div>
        </Col>

        <Col md={24} lg={6} sm={24} xs={12} span={12}>
          <div style={{ marginTop: "8%" }}>
            <p>InActive </p>
          </div>
          <div style={{ marginTop: "8%" }}>
            <p>Employee </p>
          </div>
        </Col>

        <Col md={24} lg={24} sm={24} xs={24} span={24}>
          <Form.Item>
          
          </Form.Item>
        </Col>
      </Row>
    </div>
  );
}

export default Profile;
