import React,{useState} from 'react'
import {Row,Col,Tabs, Divider,Input, Badge} from 'antd'
import {MailOutlined,InboxOutlined,SendOutlined} from '@ant-design/icons'
import SendMessageForm from '../components/SendMessageForm'
import Inbox from '../components/Inbox'
const {TabPane}=Tabs
export default function PrivateMessage() {


    const [tabNumber,setTabNumber]=useState(1)
    return (
        <div className='mt-5'>
                <Tabs defaultActiveKey='1' size='small' centered    onTabClick={(v)=>{
                   setTabNumber(v) 
                    }} >
            <TabPane  tab={<span><MailOutlined  />New Message</span>} key="1">
            <SendMessageForm/>
            </TabPane>
                    <TabPane tab={<span><InboxOutlined/> Inbox <Badge count={1} overflowCount={10}></Badge></span>} key="2">
                       <Inbox/>
                    </TabPane>
                    <TabPane tab={<span><SendOutlined/> Outbox</span>} key="3">

                    </TabPane>

                    </Tabs>
        </div>
    )
}
