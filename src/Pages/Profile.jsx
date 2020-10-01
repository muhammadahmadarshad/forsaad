import React, { useEffect, useState } from "react";
import { Card } from "antd";
import { Row, Col, Divider } from "antd";
import { Form, Input, Button, Select } from "antd";
import UserService from "../Services/UserService";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router";
import Loading from "./Loading";
import Moment from "moment";
function Profile() {
  let { id } = useParams();
  let [loading, setLoading] = useState(true);
  let [err, setError] = useState(false);
  let [data, setData] = useState({});
  useEffect(() => {
    UserService.getSingleUser(id)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setLoading(false);
        setError(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;
  else if (err)
    return (
      <h1 className="text-center text-danger mt-5">HTTP Request Failed</h1>
    );
  else
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
              <p>{data.firstName}</p>
            </div>
            <div style={{ marginTop: "8%" }}>
              <p>{data.gender} </p>
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
              <p>{data.lastName} </p>
            </div>
            <div style={{ marginTop: "8%" }}>
              <p>{data.maritalStatus} </p>
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
              <p>{data.mobileNumber} </p>
            </div>
            <div style={{ marginTop: "8%" }}>
              <p>{data.idCardNumber} </p>
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
              <p>{data.landlineNumber} </p>
            </div>
            <div style={{ marginTop: "8%" }}>
              <p>{Moment(data.joiningDate).calendar()}</p>
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
              <p>{data.mailingAddress} </p>
            </div>
            <div style={{ marginTop: "8%" }}>
              <p>{data.email} </p>
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
              <p>{data.permanentAddress} </p>
            </div>
            <div style={{ marginTop: "8%" }}>
              <p>{data.department.name} </p>
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
              <p>{data.contract.name} </p>
            </div>
            <div style={{ marginTop: "8%" }}>
              <p>{data.noOfWorkDays}</p>
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
              <p>{data.employeeStatus} </p>
            </div>
            <div style={{ marginTop: "8%" }}>
              <p>{data.employeeRole} </p>
            </div>
          </Col>

          <Col md={24} lg={24} sm={24} xs={24} span={24}>
            <Form.Item>
              <NavLink to={"/admin/EditProfile/" + id}>
                <Button type="primary">Edit Profile</Button>
              </NavLink>
            </Form.Item>
          </Col>
        </Row>
      </div>
    );
}

export default Profile;
