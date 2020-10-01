import React, { useState, useEffect } from "react";
import { Card } from "antd";
import { Row, Col, Divider } from "antd";
import { Form, Input, Button, Select } from "antd";
import LeaveService from "../Services/LeaveService";
import UserService from "../Services/UserService";
import { useParams } from "react-router";
import Loading from "./Loading";
import Moment from "moment";
function Leaves() {
  const [Cl, setCl] = useState(0);
  const [Al, setAl] = useState(0);
  const [Sl, setSl] = useState(0);
  var d = new Date();
  console.log(d.getDate(), d.getFullYear(), d.getMonth());
  var fromDate = d.getFullYear() + "-01-01";
  var toDate = d.getFullYear() + "-12-30";
  let { id } = useParams();
  let [loading, setLoading] = useState(true);
  let [err, setError] = useState(false);
  let [data, setData] = useState({});

  useEffect(() => {
    UserService.getSingleUser(id)
      .then((res) => {
        console.log(res.data.contract);
        setCl(res.data.contract.casualLeave);
        setAl(res.data.contract.annualLeave);
        setSl(res.data.contract.sickLeave);
        //setData(res.data);
        setLoading(false);
        setError(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
    LeaveService.getReportOneUser(id, fromDate, toDate)
      .then((response) => {
        console.log("Leave service", response.data);
        setData(response.data);
        response.data.map((re) => {
          if (re.leaveType === "casual leave") {
            setCl(re.remainingLeaves);
          } else if (re.leaveType === "annual leave") {
            setAl(re.remainingLeaves);
          } else if (re.leaveType === "sick leave") {
            setSl(re.remainingLeaves);
          }
        });
        console.log(Al, Cl, Sl);
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
        <h5>Leave</h5>
        <Divider></Divider>
        <Card>
          <Row>
            <Col md={24} lg={6} sm={24} xs={12} span={12}>
              <div style={{ marginTop: "8%" }}>
                <strong>Remaining Sick Leave</strong>
              </div>
              <div style={{ marginTop: "8%" }}>
                <strong>Remaining Annual Leave : </strong>
              </div>
            </Col>
            <Col md={24} lg={6} sm={24} xs={12} span={12}>
              <div style={{ marginTop: "8%" }}>
                <p>{Sl}</p>
              </div>
              <div style={{ marginTop: "8%" }}>
                <p>{Al} </p>
              </div>
            </Col>
            <Col md={24} lg={6} sm={24} xs={12} span={12}>
              <div style={{ marginTop: "8%" }}>
                <strong>Remaining Casual Leave</strong>
              </div>
            </Col>
            <Col md={24} lg={6} sm={24} xs={12} span={12}>
              <div style={{ marginTop: "8%" }}>
                <p>{Cl}</p>
              </div>
            </Col>
          </Row>
          <Col md={24} lg={24} sm={24} xs={24} span={24}></Col>
        </Card>
      </div>
    );
}

export default Leaves;
