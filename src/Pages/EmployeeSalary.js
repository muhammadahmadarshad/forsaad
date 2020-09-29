import React, { useState } from "react";
import { Form, Button } from "antd";
import { Row, Col, Divider } from "antd";
import EmployeeTable from "../components/EmployeeTable.jsx";
import { DatePicker } from "antd";
import { Select } from "antd";
import { NavLink } from "react-router-dom";

const { Option } = Select;
function EmployeeSalary() {
  const [state, setState] = useState({
    columns: [
      {
        title: "Employee Name",
        field: "empName",
      },
      { title: "Working Days", field: "workindDays" },
      {
        title: "Worked",
        field: "worked",
      },
      { title: "Gross Total", field: "grossTotal" },
      { title: "Deduction", field: "deduction" },
      { title: "Extra Day", field: "extraDay" },
      { title: "Payable", field: "Payable" },
      {
        title: "Actions",
        render: (rowData) => {
          return (
            <NavLink to="/SalarySlip">
              <button class="btn btn-danger">Process</button>
              <button class="btn btn-primary">View Salary</button>
            </NavLink>
          );
        },
      },
    ],
    rows: [
      {
        empName: "Saad",
        workindDays: "30",
        worked: "28",
        grossTotal: "25000",
        deduction: "2000",
        extraDay: "2",
        Payable: "23000",
      },
      {
        empName: "Saad",
        workindDays: "30",
        worked: "28",
        grossTotal: "25000",
        deduction: "2000",
        extraDay: "2",
        Payable: "23000",
      },
      {
        empName: "Saad",
        workindDays: "30",
        worked: "28",
        grossTotal: "25000",
        deduction: "2000",
        extraDay: "2",
        Payable: "23000",
      },
      {
        empName: "Saad",
        workindDays: "30",
        worked: "28",
        grossTotal: "25000",
        deduction: "2000",
        extraDay: "2",
        Payable: "23000",
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
      <Divider orientation="left">Process Salary</Divider>

      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" xs={{ span: 24 }} lg={{ span: 12 }}>
            <Form.Item label="EmployeeName" name="empName">
              <Select
                showSearch
                placeholder="Select Employee"
                onSearch={onSearch}
                onChange={onchange}
                style={{ width: "50%" }}
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col className="gutter-row" xs={{ span: 24 }} lg={{ span: 12 }}>
            <Form.Item label="Select Date" name="date">
              <DatePicker onChange={onChangedate} style={{ width: "50%" }} />
            </Form.Item>

            <Form.Item>
              <Button
                style={{ marginLeft: "46%" }}
                type="primary"
                htmlType="submit"
              >
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <EmployeeTable data={state} title="Employee Salary"></EmployeeTable>
    </div>
  );
}

export default EmployeeSalary;
