import React, { useState } from "react";
import { Form, Button } from "antd";
import { Row, Col, Divider } from "antd";
import { Table } from "antd";
import { DatePicker } from "antd";
import { Card } from "antd";
import "../Styles/home.css";
function Attendance() {
  var daa = new Date();

  const dataSource = [
    {
      key: "1",
      name: "Mike",
      1: "p",
      2: "p",
      3: "p",
      4: "p",
      5: "p",
      6: "p",
      7: "p",
      8: "p",
      9: "p",
      10: "p",
      11: "p",
      12: "p",
      13: "p",
      14: "p",
      15: "p",
      16: "p",
      17: "A",
      18: "p",
      19: "p",
      20: "p",
      21: "p",
      22: "p",
      23: "p",
      24: "p",
      25: "p",
      26: "p",
      27: "p",
      28: "p",
      29: "p",
      30: "p",
      P: 0,
      A: 0,
      SL: 0,
      CL: 0,
      AL: 0,
    },
    {
      key: "2",
      name: "John",
      1: "p",
      2: "p",
      3: "p",
      4: "p",
      5: "p",
      6: "p",
      7: "p",
      8: "p",
      9: "p",
      10: "p",
      11: "p",
      12: "p",
      13: "p",
      14: "p",
      15: "p",
      16: "p",
      17: "A",
      18: "p",
      19: "p",
      20: "p",
      21: "p",
      22: "p",
      23: "p",
      24: "p",
      25: "p",
      26: "p",
      27: "p",
      28: "p",
      29: "p",
      30: "p",
      P: 0,
      A: 0,
      SL: 0,
      CL: 0,
      AL: 0,
    },
  ];

  const columns = [
    {
      title: "Employee Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "1",
      dataIndex: "1",
      key: "age",
    },
    {
      title: "2",
      dataIndex: "2",
      key: "address",
    },
    {
      title: "3",
      dataIndex: "3",
      key: "address",
    },
    {
      title: "4",
      dataIndex: "4",
      key: "address",
    },
    {
      title: "4",
      dataIndex: "4",
      key: "address",
    },
    {
      title: "5",
      dataIndex: "5",
      key: "address",
    },

    {
      title: "6",
      dataIndex: "6",
      key: "address",
    },
    {
      title: "7",
      dataIndex: "7",
      key: "address",
    },
    {
      title: "8",
      dataIndex: "8",
      key: "address",
    },
    {
      title: "9",
      dataIndex: "9",
      key: "address",
    },
    {
      title: "10",
      dataIndex: "10",
      key: "address",
    },
    {
      title: "11",
      dataIndex: "11",
      key: "address",
    },
    {
      title: "12",
      dataIndex: "12",
      key: "address",
    },
    {
      title: "13",
      dataIndex: "13",
      key: "address",
    },
    {
      title: "14",
      dataIndex: "14",
      key: "address",
    },
    {
      title: "15",
      dataIndex: "15",
      key: "address",
    },

    {
      title: "16",
      dataIndex: "16",
      key: "address",
    },
    {
      title: "17",
      dataIndex: "17",
      key: "address",
    },
    {
      title: "18",
      dataIndex: "18",
      key: "address",
    },
    {
      title: "19",
      dataIndex: "19",
      key: "address",
    },
    {
      title: "20",
      dataIndex: "20",
      key: "address",
    },
    {
      title: "21",
      dataIndex: "21",
      key: "address",
    },
    {
      title: "22",
      dataIndex: "22",
      key: "address",
    },
    {
      title: "23",
      dataIndex: "23",
      key: "address",
    },
    {
      title: "24",
      dataIndex: "24",
      key: "address",
    },
    {
      title: "25",
      dataIndex: "25",
      key: "address",
    },
    {
      title: "26",
      dataIndex: "26",
      key: "address",
    },
    {
      title: "27",
      dataIndex: "27",
      key: "address",
    },
    {
      title: "28",
      dataIndex: "28",
      key: "address",
    },
    {
      title: "29",
      dataIndex: "29",
      key: "address",
    },
    {
      title: "30",
      dataIndex: "30",
      key: "address",
    },
    {
      title: "P",
      dataIndex: "P",
      key: "address",
    },
    {
      title: "A",
      dataIndex: "A",
      key: "address",
    },
    {
      title: "SL",
      dataIndex: "SL",
      key: "address",
    },
    {
      title: "CL",
      dataIndex: "CL",
      key: "address",
    },
    {
      title: "AL",
      dataIndex: "AL",
      key: "address",
    },
  ];
  const [date, setDate] = useState(
    daa.getFullYear() + "-" + (daa.getMonth() + 1)
  );
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
    // console.log(values["dateFrom"]._d.getMonth() + 1);
    // console.log(values["dateFrom"]._d.getFullYear());
    // var str =
    //   values["dateFrom"]._d.getFullYear() +
    //   "-" +
    //   values["dateFrom"]._d.getMonth() +
    //   1;
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
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 18 }}>
          <Col className="gutter-row" xs={{ span: 24 }} lg={{ span: 6 }}>
            <Form.Item label=" Select Date" name="dateFrom">
              <DatePicker onChange={onChangedate} picker="month" />
            </Form.Item>
          </Col>

          <Col className="gutter-row" xs={{ span: 24 }} lg={{ span: 12 }}>
            <Form.Item>
              <Button type="primary" htmlType="submit" lg={{ span: 4 }}>
                View Attendance Sheet
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <Divider>Attendance Sheet of month : {date} </Divider>

      <Card>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 18 }}>
          <Col className="gutter-row" xs={{ span: 12 }} lg={{ span: 4 }}>
            <p>
              <strong>P=</strong> Present
            </p>
          </Col>
          <Col className="gutter-row" xs={{ span: 12 }} lg={{ span: 5 }}>
            <p>
              <strong>A=</strong> Absent
            </p>
          </Col>
          <Col className="gutter-row" xs={{ span: 12 }} lg={{ span: 5 }}>
            <p>
              <strong>SL=</strong> Sick Leave
            </p>
          </Col>
          <Col className="gutter-row" xs={{ span: 12 }} lg={{ span: 5 }}>
            <p>
              <strong>CL=</strong> Casual Leave
            </p>
          </Col>
          <Col className="gutter-row" xs={{ span: 12 }} lg={{ span: 5 }}>
            <p>
              <strong>AL=</strong> Annual Leave
            </p>
          </Col>
        </Row>
      </Card>
      <Table
        className="table-striped-rows"
        dataSource={dataSource}
        columns={columns}
        scroll={{ x: "max-content" }}
        bordered={true}
      />
    </div>
  );
}

export default Attendance;
