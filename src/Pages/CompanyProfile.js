import React, { useState,useEffect} from "react";
import "antd/dist/antd.css";
import { Form, Input, Button } from "antd";
import { Row, Col, Divider } from "antd";
import { Upload, message } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import CompanyProfileService from '../Services/CompanyProfileService'
import Loading from "./Loading";
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);}



function beforeUpload(file) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
}
const style = { background: "#0092ff", padding: "8px 0" };

const layout = {
  labelCol: {
    span: 14,
  },
  wrapperCol: {
    span: 18,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 18,
    span: 16,
  },
}



/*Component Starts Here*/

function CompanyProfile() {
  const [sta, setSta] = useState({
    loading: false,
    imageUrl: "",
  });
  const [updating,setUpdating]=useState(false)

  const [form]=Form.useForm()
  const [data,setData]=useState([])

  const [loading,setLoading]=useState(true)

  useEffect(()=>{
    CompanyProfileService.getCompanyProfile().then(res=>{
      let {
        companyName,
        websiteURL,
        mailingAddress,
        email,
        phoneNumber
      }=res.data[0]
      setData(res.data)
      form.setFieldsValue({
        companyName,
        websiteURL,
        mailingAddress,
        email,
        phoneNumber          
      })
      setLoading(false)
      
    })
  },[])

  const onFinish = (values) => {
    setUpdating(true)
    if(data.length>0){
      CompanyProfileService.editCompanyProfile(data[0]._id,values)
      .then(res=>{
        console.log(res)
        alert("Successfully Updated..")
        setUpdating(false)
      })
      .catch((err)=>{
        console.log(err.response)

      })

    }

    else {
      CompanyProfileService.CreateCompanyProfile(values)
      .then(res=>{
        console.log(res)
      })
      .catch(()=>{


      })

    }};
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const uploadButton = (
    <div>
      {sta.loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setSta({ loading: true });
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) =>
        setSta({
          imageUrl,
          loading: false,
        })
      );
    }
  };

  if(loading){

    return (<Loading/>)
  }



  return (
    <div>
      <Divider orientation="left">Company Information</Divider>
      <Form
        {...layout}
        form={form}
        name="basic"
        initialValues={data}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 24 }}>
          <Col className="gutter-row" xs={{ span: 24 }} lg={{ span: 12 }}>
            <Form.Item
              label="Company Name"
              name="companyName"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input required />
            </Form.Item>

            <Form.Item
              label="Website URL"
              name="websiteURL"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Mailing Address"
              name="mailingAddress"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input.TextArea />
            </Form.Item>
          </Col>
          <Col className="gutter-row" xs={{ span: 24 }} lg={{ span: 10 }}>
            <Form.Item
              label="Email Address"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Phone Number"
              name="phoneNumber"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Company Logo"
              name="logo"
              rules={[
                {
                  message: "Please input your username!",
                },
              ]}
            >
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                beforeUpload={beforeUpload}
                onChange={handleChange}
              >
                {sta.imageUrl ? (
                  <img
                    src={sta.imageUrl}
                    alt="avatar"
                    style={{ width: "100%" }}
                  />
                ) : (
                  uploadButton
                )}
              </Upload>
            </Form.Item>
          </Col>
          {/* <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>  */}
        </Row>
        <Form.Item {...tailLayout}>
          <Button disabled={updating} type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default CompanyProfile;
