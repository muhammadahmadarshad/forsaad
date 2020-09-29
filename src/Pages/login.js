import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Row, Col } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import User from '../Services/UserService'
import Cookie from 'js-cookie'
import {useAuth} from '../Context/auth'
function Login(props) {
  const [loginIn,setLoginIn]=useState(false)  
  const [err,setErr]=useState({err:false,msg:""})
  let {dispatch}=useAuth()

  const onFinish = (values) => {
    setLoginIn(true)
     User.login(values)
      .then(res=>{
        setLoginIn(false)
        dispatch({action:'LOGIN',payload:res.data})
        let {isAdmin}= res.data
        isAdmin?props.history.push('/admin'):props.history.push('/employee')
        setErr({err:false,msg:""})
        Cookie.set('token',res.data)
      })
      .catch(err=>{
        setLoginIn(false)
        console.log(err.response)
        //setErr({msg:err.response.data,err:true})
      })};

  return (
    <div className='jumbotron m-5'>

      <h3 className='text-center'>Login Form</h3>
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[
          {
            type:'email',
            message:'Should be a valid email.'
          },
          {
            required: true,
            message: 'Please input your Email!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email Address" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button disabled={loginIn} block type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>

      {err.err?<h5 className='text-center text-danger'>{err.msg}</h5>:<></>}
    </Form>
    </div>
  );
}
export default Login;
