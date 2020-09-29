import React, { useState } from "react";
import { Card } from "antd";
import { Row, Col, Divider } from "antd";
import { Input } from "antd";
function SalarySlip() {
  const [userName, setUserName] = useState("Saad");
  const [Month, setMonth] = useState("Jan-2019");
  return (
    <div>
      <Card title={"Salary Month Of  " + Month}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" xs={{ span: 11 }} lg={{ span: 6 }}>
            <div style={{ marginTop: "8%" }}>
              <strong>Employee ID : </strong>
            </div>
            <div style={{ marginTop: "8%" }}>
              <strong>Department Name : </strong>
            </div>
            <div style={{ marginTop: "8%" }}>
              <strong>Total Working Days </strong>
            </div>
          </Col>
          <Col className="gutter-row" xs={{ span: 13 }} lg={{ span: 6 }}>
            <div style={{ marginTop: "8%" }}>Emp-052</div>
            <div style={{ marginTop: "8%" }}>Customer Sales Executive</div>
            <div style={{ marginTop: "8%" }}>12</div>
          </Col>
          <Col className="gutter-row" xs={{ span: 11 }} lg={{ span: 6 }}>
            <div style={{ marginTop: "8%" }}>
              <strong>Full Name </strong>
            </div>
            <div style={{ marginTop: "8%" }}>
              <strong>Pay Date </strong>
            </div>
            <div style={{ marginTop: "8%" }}>
              <strong>Total Days Worked </strong>
            </div>
          </Col>
          <Col className="gutter-row" xs={{ span: 1 }} lg={{ span: 6 }}>
            <div style={{ marginTop: "8%" }}>
              <p>Waqar Hassan</p>
            </div>
            <div style={{ marginTop: "8%" }}>
              <p>28-OCT-2020</p>
            </div>
            <div style={{ marginTop: "8%" }}>
              <p>18</p>
            </div>
          </Col>
        </Row>
        <Divider></Divider>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" xs={{ span: 24 }} lg={{ span: 12 }}>
            <div style={{ marginTop: "8%" }}>
              <strong>
                <h4>Earnings </h4>
              </strong>
            </div>
            <Divider></Divider>
            <Card>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={12}>
                  <div className="earnings-cnt">
                    <strong>Descriptions</strong>
                    <Divider></Divider>
                    <p>Basic Salary</p>
                    <Divider></Divider>
                    <p>House Rent</p>
                    <Divider></Divider>
                    <p>Travel Allowance</p>
                    <Divider></Divider>
                    <p>Medical Allowance</p>
                    <Divider></Divider>
                    <p>Extra Day(s)</p>
                    <Divider></Divider>
                    <p>Other Allowance</p>
                  </div>
                </Col>
                <Col className="gutter-row" span={12}>
                  <div style={{ float: "right" }} className="earnings-cnt">
                    <strong>Amount</strong>
                    <Divider></Divider>
                    <p>30,000</p>
                    <Divider></Divider>
                    <p>0.00</p>
                    <Divider></Divider>
                    <p>0.00</p>
                    <Divider></Divider>
                    <p>0.00</p>
                    <Divider></Divider>
                    <p>0.00</p>
                    <Divider></Divider>
                  </div>
                  <Input></Input>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col className="gutter-row" xs={{ span: 24 }} lg={{ span: 12 }}>
            <div style={{ marginTop: "8%" }}>
              <strong>
                <h4>Deductions </h4>
              </strong>
            </div>
            <Divider></Divider>
            <Card>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={12}>
                  <div style={{ float: "left" }} className="earnings-cnt">
                    <strong>Descriptions</strong>
                    <Divider></Divider>
                    <p>Provident Fund</p>
                    <Divider></Divider>
                    <p>Salary Deductions</p>
                    <Divider></Divider>
                    <p>Tax Deductions</p>
                    <Divider></Divider>
                    <p style={{ height: "23px" }}></p>
                    <Divider></Divider>
                    <p style={{ height: "23px" }}></p>
                    <Divider></Divider>
                    <p>Other Deductions</p>
                  </div>
                </Col>
                <Col className="gutter-row" span={12}>
                  <div style={{ float: "right" }} className="earnings-cnt">
                    <strong>Amount</strong>
                    <Divider></Divider>
                    <p>30,000</p>
                    <Divider></Divider>
                    <p>0.00</p>
                    <Divider></Divider>
                    <p>0.00</p>
                    <Divider></Divider>
                    <p style={{ height: "23px" }}></p>
                    <Divider></Divider>
                    <p style={{ height: "23px" }}></p>
                    <Divider></Divider>
                  </div>
                  <Input></Input>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>

        <Divider></Divider>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" xs={{ span: 24 }} lg={{ span: 12 }}>
            <Card>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={12}>
                  <strong>Total Earnings</strong>
                </Col>
                <Col className="gutter-row" span={12}>
                  {" "}
                  <strong style={{ float: "right" }}>30000</strong>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col className="gutter-row" xs={{ span: 24 }} lg={{ span: 12 }}>
            <Card>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={12}>
                  <strong>Total Deductions</strong>
                </Col>
                <Col className="gutter-row" span={12}>
                  {" "}
                  <strong style={{ float: "right" }}>6521.74</strong>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>

        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" xs={{ span: 24 }} lg={{ span: 12 }}>
            <Card>
              <strong>NET PAYABLE : 23577.26</strong>
            </Card>
          </Col>

          <Col className="gutter-row" xs={{ span: 24 }} lg={{ span: 12 }}>
            <a name="" id="" class="btn btn-primary" href="#" role="button">
              Pay Now
            </a>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default SalarySlip;
