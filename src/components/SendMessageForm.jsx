
import React,{useState} from 'react'

import { Form, Input, Button,Select } from 'antd';

import {Divider} from 'antd'
import FroalaEditorComponent from 'react-froala-wysiwyg';


const layout = {
    labelCol: {
      span: 5,
    },
    wrapperCol: {
      span: 16,
    },
  };

export default function SendMessageForm() {
    const [model,setmodal]=useState('')
    function onFinish(e){
        console.log(e)

    }


    return (
        <div className='container w-100 mt-5'>
        <Divider orientation='center'><h3>New Message</h3></Divider>
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={{required: '${label} is required!',}}>
                
                <Form.Item
                    name={['message', 'to']}
                    label="To"
                    rules={[
                    {
                        required: true,
                    },
                    ]}
                >
                    <Select placeholder='select Employee'>
                        <Select.Option value='1234'> Hellow</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name={['message', 'subject']}
                    label="Subject"
                    rules={[
                    {
                        required:true
                    },
                    ]}
                >
                    <Input allowClear />
                </Form.Item>
                <Form.Item
                    name={['message', 'message']}
                    label="Message"

                    rules={[
                    {
                      required:true,
                      
                    },
                    ]}
                >
            <FroalaEditorComponent
                model={model}
                onModelChange={(e)=>{setmodal(e)
                console.log(e)
                }}
                tag={'textarea'} config={{
                placeholderText: 'Edit Your Content Here!',
                charCounterCount: false
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
    )
}
