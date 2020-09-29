import React from "react";
import { Row, Col, Divider } from "antd";
import {  Card } from "antd";
import moment from 'moment'
function LastLoanRequest({data}) {
  if(data.length<=0){

    return <div></div>
  }
  return (
    <div>
      <Card title="Last Loan Request" style={{ marginTop: "1%" }}>
        <Row
          gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          style={{ marginLeft: "2%" }}>       
          <Col className="gutter-row" span={5}>
            <strong>Request Date</strong>
          </Col>
          <Col className="gutter-row" span={5}>
            <strong>Loan Amount</strong>
          </Col>
          <Col className="gutter-row" span={6}>
            <strong>Decision Date</strong>
          </Col>
          <Col className="gutter-row" span={4}>
            <strong>Remarks</strong>
          </Col>
          <Col className="gutter-row" span={4}>
            <strong>Final Status</strong>
          </Col>
        </Row>
        <Divider></Divider>
        {data.map(d=><Row
          gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          style={{ marginLeft: "2%" }}
        >
          <Col className="gutter-row" span={5}>
            {moment(d.requestDate).calendar()}
          </Col>
          <Col className="gutter-row" span={5}>
            {d.loanAmount}
          </Col>
          <Col className="gutter-row" span={6}></Col>
          <Col className="gutter-row" span={4}></Col>
          <Col className="gutter-row" span={4}>
            {d.finalStatus}
          </Col>
        </Row>)}
      </Card>
    </div>
  );
}

export default LastLoanRequest;
