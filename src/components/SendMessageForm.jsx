import React, { useEffect, useState } from "react";

import { Form, Input, Button, Select } from "antd";
import UserService from "../Services/UserService";
import { Divider } from "antd";
import FroalaEditorComponent from "react-froala-wysiwyg";
import Loading from "../Pages/Loading";
import MessageService from "../Services/MessageService";
const { Option } = Select;

const layout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 16,
  },
};

export default function SendMessageForm(props) {
  console.log(props.empid);
  const [form] = Form.useForm();
  if (props.empid) {
    form.setFieldsValue({
      to: [props.empid],
    });
  }
  const [employs, setEmployes] = useState([]);
  let [loading, setLoading] = useState(true);
  let [err, setError] = useState(false);
  useEffect(() => {
    UserService.getAllUsers()
      .then((res) => {
        console.log(res.data);
        setEmployes(res.data);
        setError(false);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
        console.log(err.response);
      });
  }, []);
  const [model, setmodal] = useState("");
  function onFinish(e) {
    console.log("To here", e.to, "subject", e.subject);
    console.log(model);
    let { to, subject } = e;

    setLoading(true);
    MessageService.sendMessage({ toUserId: to, subject, message: model })
      .then((res) => {
        setLoading(false);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e.response);
      });
  }

  return (
    <div className="container w-100 mt-5">
      <Divider orientation="center">
        <h3>New Message</h3>
      </Divider>
      <Form
        {...layout}
        name="nest-messages"
        form={form}
        onFinish={onFinish}
        validateMessages={{ required: "${label} is required!" }}
      >
        <Form.Item
          name={["to"]}
          label="To"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            mode="multiple"
            style={{ width: 300 }}
            placeholder="Select Employee"
          >
            {employs.map((emp) => (
              <Option
                key={emp._id}
                value={emp._id}
              >{`${emp.firstName} ${emp.lastName}`}</Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name={["subject"]}
          label="Subject"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input allowClear />
        </Form.Item>
        <Form.Item name={["message"]} label="Message" rules={[{}]}>
          <FroalaEditorComponent
            model={model}
            onModelChange={(e) => {
              setmodal(e);
              console.log("he", e);
            }}
            tag={"textarea"}
            config={{
              placeholderText: "Edit Your Content Here!",
              charCounterCount: false,
            }}
          />
        </Form.Item>

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Send Message
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
