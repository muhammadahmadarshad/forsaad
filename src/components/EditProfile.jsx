import React, { useState, useEffect } from "react";
import moment from "moment";
import {
  Form,
  Input,
  Button,
  Row,
  Col,
  Divider,
  Select,
  DatePicker,
} from "antd";
import { useParams } from "react-router";
import UserService from "../Services/UserService";
import DepartmentService from "../Services/DepartmentService";
import ContractService from "../Services/ContractService";
import Loading from "../Pages/Loading";
import Moment from "moment";
const validateMessages = {
  required: "Should Not be Empty!",
  types: {
    email: "Should be Valid Email!",
    number: "Not a valid number!",
    phone: "${label} is not a valid phone number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
const layout = {
  labelCol: {
    span: 7,
  },
  wrapperCol: {
    span: 12,
  },
};
export default function EditProfile(props) {
  let { id } = useParams();
  const [form] = Form.useForm();
  let { setCurrent, departments, contracts, setEmployeeID } = props;
  const [credentials, setCredentioals] = useState({
    departments: [],
    contracts: [],
  });
  let [loading, setLoading] = useState(true);
  let [err, setError] = useState(false);
  useEffect(() => {
    UserService.getSingleUser(id)
      .then((res) => {
        console.log(res.data);
        // setData(res.data);

        let {
          email,
          employeeRole,
          mailingAddress,
          employeeStatus,
          firstName,
          gender,
          idCardNumber,
          joiningDate,
          landlineNumber,
          lastName,
          maritalStatus,
          mobileNumber,
          noOfWorkDays,
          permanentAddress,
        } = res.data;
        let { contract } = res.data.contract.name;

        form.setFieldsValue({
          email,
          isAdmin: employeeRole,
          mailingAddress,
          employeeStatus,
          firstName,
          employeeRole: contract,
          gender,
          idCardNumber,
          joiningDate: Moment(joiningDate),
          landlineNumber,
          lastName,
          maritalStatus,
          mobileNumber,
          noOfWorkDays,
          permanentAddress,
        });

        setError(false);
      })
      .catch((err) => {
        console.log(err);
        console.log("in catch of user profile");
        setError(true);
        setLoading(false);
      });
    DepartmentService.getDepartments()
      .then((res) => {
        let departments = res.data;
        ContractService.getContract()
          .then((res) => {
            setCredentioals({
              ...credentials,
              contracts: res.data,
              departments,
            });
            setError(false);
            setLoading(false);
          })
          .catch(() => {
            setError(true);
            setLoading(false);
          });
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }, []);
  const onFinish = (values) => {
    UserService.editUser(id, {
      ...values,
      isAdmin: values.employeeRole == "Administator" ? true : false,
    })
      .then((res) => {
        console.log(res.data);
        alert("Successfully updated");
      })
      .catch((err) => {
        console.log(err.response);
        setError(true);
        alert("Failed to update ", err.response);
      });
    //setLoading(true);
    // let { user } = values;
    // let joiningDate = moment(user.joiningDate).format("YYYY-MM-DD").toString();
    // let isAdmin = user.employeeRole === "Administator" ? true : false;
  };
  if (loading) return <Loading />;
  else if (err)
    return (
      <h1 className="text-center text-danger mt-5">HTTP Request Failed</h1>
    );
  else
    return (
      <div className="mt-4">
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          form={form}
          validateMessages={validateMessages}
        >
          <h5>Edit Employee Info</h5>
          <Divider />
          <Row>
            <Col md={24} lg={12} sm={24} xs={24} span={12}>
              <Form.Item
                name={["firstName"]}
                label="Firstname"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col md={24} lg={12} sm={24} xs={24} span={12}>
              <Form.Item
                name={["lastName"]}
                label="Lastname"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col md={24} lg={12} sm={24} xs={24} span={12}>
              <Form.Item
                name={["gender"]}
                label="Gender"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select defaultValue="Select Gender">
                  <Select.Option value="Male">Male</Select.Option>
                  <Select.Option value="Female">Female</Select.Option>
                </Select>
              </Form.Item>
            </Col>

            <Col md={24} lg={12} sm={24} xs={24} span={12}>
              <Form.Item
                name={["maritalStatus"]}
                label="Marital Status"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select defaultValue="Select Martial">
                  <Select.Option value="Single">Single</Select.Option>
                  <Select.Option value="Married">Married</Select.Option>
                  <Select.Option value="Divorced">Divorced</Select.Option>
                  <Select.Option value="Widowed">Widowed</Select.Option>
                </Select>
              </Form.Item>
            </Col>

            <Col md={24} lg={12} sm={24} xs={24} span={12}>
              <Form.Item
                name={["mobileNumber"]}
                label="Phone No."
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input name="phone" type="text" />
              </Form.Item>
            </Col>
            <Col md={24} lg={12} sm={24} xs={24} span={12}>
              <Form.Item name={["landlineNumber"]} label="Landline No.">
                <Input name="landlineNumber" type="number" />
              </Form.Item>
            </Col>

            <Col md={24} lg={12} sm={24} xs={24} span={12}>
              <Form.Item
                name={["idCardNumber"]}
                label="NIC"
                rules={[
                  {
                    len: 13,
                    required: true,
                    pattern: "^[0-9]+$",
                    message: "Length should be 13 & Must be Numbers",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>

            <Col md={24} lg={12} sm={24} xs={24} span={12}>
              <Form.Item name={["joiningDate"]} label="Joining Date">
                <DatePicker className="w-100" placeholder="Select Date" />
              </Form.Item>
            </Col>
            <Col md={24} lg={12} sm={24} xs={24} span={12}>
              <Form.Item
                name={["mailingAddress"]}
                label="Mailing Address"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input.TextArea name="mailingAddress" />
              </Form.Item>
            </Col>

            <Col md={24} lg={12} sm={24} xs={24} span={12}>
              <Form.Item
                name={["permanentAddress"]}
                label="Permanent Address"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input.TextArea name="mailingAddress" />
              </Form.Item>
            </Col>

            <Col md={24} lg={12} sm={24} xs={24} span={12}>
              <Form.Item
                name={["email"]}
                label="Email Address"
                rules={[
                  {
                    type: "email",
                    required: true,
                  },
                ]}
              >
                <Input name="email" />
              </Form.Item>
            </Col>

            <Col md={24} lg={12} sm={24} xs={24} span={12}>
              <Form.Item name={["password"]} label="Password" rules={[{}]}>
                <Input type="password" size="large" />
              </Form.Item>
            </Col>

            <Col md={24} lg={12} sm={24} xs={24} span={12}>
              <Form.Item
                name={["department"]}
                label="Department Name"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select defaultValue="Select Department">
                  {credentials.departments.map(({ _id, name }, index) => (
                    <Select.Option key={index} value={_id}>
                      {name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>

            <Col md={24} lg={12} sm={24} xs={24} span={12}>
              <Form.Item
                name={["contract"]}
                label="Contract Name"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select defaultValue="Select Contract Name">
                  {credentials.contracts.map(({ _id, name }, index) => (
                    <Select.Option key={index} value={_id}>
                      {name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>

            <Col md={24} lg={12} sm={24} xs={24} span={12}>
              <Form.Item
                name={["noOfWorkDays"]}
                label="Weekly Working Days"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select defaultValue="Select Days">
                  <Select.Option value="1">1 Day</Select.Option>
                  <Select.Option value="2">2 Days</Select.Option>
                  <Select.Option value="3">3 Days</Select.Option>
                  <Select.Option value="4">4 Days</Select.Option>
                  <Select.Option value="5">5 Days</Select.Option>
                  <Select.Option value="6">6 Days</Select.Option>
                  <Select.Option value="7">7 Days</Select.Option>
                </Select>
              </Form.Item>
            </Col>

            <Col md={24} lg={12} sm={24} xs={24} span={12}>
              <Form.Item
                name={["employeeStatus"]}
                label="Employee Status"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select defaultValue="Select Status">
                  <Select.Option value="Active">Active</Select.Option>
                  <Select.Option value="Inactive">Inactive</Select.Option>
                </Select>
              </Form.Item>
            </Col>

            <Col md={24} lg={12} sm={24} xs={24} span={12}>
              <Form.Item name={["profile_pic"]} label="Profile Pic">
                <Input type="file" />
              </Form.Item>
            </Col>

            <Col md={24} lg={12} sm={24} xs={24} span={12}>
              <Form.Item
                name={["employeeRole"]}
                label="Employee Role"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select defaultValue="Employee Role">
                  <Select.Option value={"Employee"}>Employee</Select.Option>
                  <Select.Option value={"Administator"}>
                    Administator
                  </Select.Option>
                </Select>
              </Form.Item>
            </Col>

            <Col md={24} lg={24} sm={24} xs={24} span={24}>
              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 18 }}>
                <Button disabled={loading} type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    );
}
