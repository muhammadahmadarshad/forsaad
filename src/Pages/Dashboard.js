import React, { useState } from "react";
import { Card } from "antd";
import { Row, Col, Divider } from "antd";
import EmployeeTable from "../components/EmployeeTable.jsx";
function Dashboard() {
  const [state, setState] = useState({
    columns: [
      { title: "Employee Name", field: "empName" },

      { title: "Total Working days", field: "totalTime" },
      { title: " Break Time(hrs)", field: "totalBreakTime" },
    ],
    rows: [
      {
        empName: "Saad",

        totalTime: "22",
        totalBreakTime: "2",
      },
      {
        empName: "Saad",

        totalTime: "22",
        totalBreakTime: "2",
      },
      {
        empName: "Saad",

        totalTime: "22",
        totalBreakTime: "2",
      },
      {
        empName: "Saad",

        totalTime: "22",
        totalBreakTime: "2",
      },
    ],
  });
  return (
    <div>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" xs={{ span: 24 }} lg={{ span: 16 }}>
          <Card title="Live Chat" style={{ marginBottom: "2%" }}></Card>
        </Col>
        <Col className="gutter-row" xs={{ span: 24 }} lg={{ span: 8 }}>
          <Card title="Events" style={{ marginBottom: "2%" }}></Card>
        </Col>
      </Row>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col style={{ marginBottom: "2%" }} className="gutter-row" xs={{ span: 24 }} lg={{ span: 12 }}>
          <EmployeeTable data={state} title="Attendance "></EmployeeTable>
        </Col>
        <Col className="gutter-row" xs={{ span: 24 }} lg={{ span: 12 }}>
          <EmployeeTable data={state} title="Employees "></EmployeeTable>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
