import React, { useState } from "react";
import { Form, Button } from "antd";
import { Row, Col, Divider } from "antd";
import EmployeeTable from "../components/EmployeeTable.jsx";
import { DatePicker } from "antd";
import { Select } from "antd";
import { NavLink } from "react-router-dom";

const { Option } = Select;
function AttendanceReport() {
  const [state, setState] = useState({
    columns: [
      {
        title: "Sr.",
        render: (rowData) => rowData.tableData.id + 1,
      },
      { title: "Employee ID", field: "empID" },
      { title: "Employee Name", field: "empName" },

      {
        title: "Check In",
        field: "checkIn",
      },
      { title: "Check Out", field: "checkOut" },
      { title: "Total Time", field: "totalTime" },
      { title: "Status", field: "status" },
    ],
    rows: [
      {
        empName: "Saad",
        empID: "30",
        checkIn: "28",
        checkOut: "25000",
        totalTime: "2000",
        status: "2",
      },
      {
        empName: "Saad",
        empID: "30",
        checkIn: "28",
        checkOut: "25000",
        totalTime: "2000",
        status: "2",
      },
      {
        empName: "Saad",
        empID: "30",
        checkIn: "28",
        checkOut: "25000",
        totalTime: "2000",
        status: "2",
      },
      {
        empName: "Saad",
        empID: "30",
        checkIn: "28",
        checkOut: "25000",
        totalTime: "2000",
        status: "2",
      },
    ],
  });

  function onChange(value) {
    console.log(`selected ${value}`);
  }

  function onBlur() {
    console.log("blur");
  }

  function onFocus() {
    console.log("focus");
  }
  function onChangedate(date, dateString) {
    console.log(dateString);
  }
  function onSearch(val) {
    console.log("search:", val);
  }

  const onFinish = (values) => {
    console.log("Success:", values);
    console.log(values["date"]._d);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const layout = {
    labelCol: {
      span: 12,
    },
    wrapperCol: {
      span: 12,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 12,
      span: 12,
    },
  };
  return (
    <div>
      <Divider orientation="left">Search</Divider>

      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 18 }}>
          <Col className="gutter-row" xs={{ span: 24 }} lg={{ span: 8 }}>
            <Form.Item label="EmployeeName" name="empID">
              <Select
                showSearch
                placeholder="Select Employee"
                onSearch={onSearch}
                onChange={onchange}
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col className="gutter-row" xs={{ span: 24 }} lg={{ span: 8 }}>
            <Form.Item label=" Date from" name="dateFrom">
              <DatePicker onChange={onChangedate} />
            </Form.Item>
          </Col>
          <Col className="gutter-row" xs={{ span: 24 }} lg={{ span: 8 }}>
            <Form.Item label=" Date to" name="dateTo">
              <DatePicker onChange={onChangedate} />
            </Form.Item>
          </Col>
          <Col className="gutter-row" xs={{ span: 24 }} lg={{ span: 8 }}>
            <Form.Item   {...tailLayout}>
              <Button type="primary" htmlType="submit" lg={{ span: 12 }}>
                View Attendance Report
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <EmployeeTable data={state} title="Attendance Report "></EmployeeTable>
    </div>
  );
}

export default AttendanceReport;
