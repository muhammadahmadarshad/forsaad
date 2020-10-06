import React, { useEffect, useState } from "react";
import {useMediaPredicate} from 'react-media-hook'
import "./Styles/home.css";
import {Layout,Menu} from 'antd'
import GloabalChat from './components/GloabalChat'
import "./Styles/home.css";
import Sidebar from "./components/Sidebar";
import { MenuFoldOutlined,MenuUnfoldOutlined ,PoweroffOutlined} from "@ant-design/icons";
import AdminRoutes from "./AdminRoutes";
import './App.css'
import { Route, Switch, useRouteMatch } from "react-router";
import Dashboard from "./Pages/Dashboard";
import Cookie from 'js-cookie'
import { useAuth } from "./Context/auth";
import io from 'socket.io-client'
const {Header,Sider}=Layout
function Admin(props) {
  const {dispatch,state}=useAuth()
  const isSmallScreen=useMediaPredicate("(max-width: 600px)")
  const [collapsed,setCollapsed]=useState(false)
  const [isOpen,setIsOpen]=useState(false)
  useEffect(()=>{
   let socket= io('https://intense-wave-96999.herokuapp.com')
   socket.on("getAllMessages",(msgs)=>{

    dispatch({type:'ONSOCKETOUTPUTS',payload:msgs})
})

socket.on('output',(msg)=>{

    console.log(msg)
    dispatch({type:"AddMessage",payload:msg})
})
      dispatch({type:"ONSOCKET",payload:socket})

    },[])
  
  
  const onSignOut=()=>{

    Cookie.remove('token')
    dispatch({type:'LOGOUT'})
  }


  function handleChatOpen(){

    setIsOpen(!isOpen)

  }
  function toggleCollapsed(){
      setCollapsed(!collapsed)
  }
  let {path,url}=useRouteMatch()

  return (
    <div className='Admin'>
              
            <Layout>

            <Header>        
              <button className= 'btn logo btn-sm btn-primary'
              onClick= {toggleCollapsed}
              style={{fontSize:'10px'}}>{collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>} 
              </button>
            <Menu theme="dark" mode="horizontal" style={{float:'right'}}>
            <Menu.Item onClick={onSignOut} key="1"><PoweroffOutlined/></Menu.Item>
      </Menu>

      
            
            </Header >

            <Layout >
   

            <Sider theme={'dark'} breakpoint='sm'  trigger={null}
                      style={{
                        overflow: 'auto',
                        position: 'relative',
                        zIndex:1,
                        
                        left: 0,
                      }}
                collapsedWidth={isSmallScreen?0:80}
                collapsible
                defaultCollapsed={true}
                width={isSmallScreen?'100%':230}
                onCollapse={setCollapsed}
                onBreakpoint={(v)=>{

                setCollapsed(true)}}
                
                collapsed={collapsed}>
                <div className='logo'/>
                  <Sidebar style={{overflowY:'scroll'}}    path={path} url={url} isSmallScreen={isSmallScreen} toggleCollapsed={toggleCollapsed} setCollapsed={setCollapsed} />
              </Sider>
              <Layout>
                <Layout.Content  className='container-fluid'  >
                <Switch>
                  <Route path={path} exact component={Dashboard}></Route>
                  <Route exact path={`${path}/:page/:id?`} component={AdminRoutes}/>
                </Switch>
                <GloabalChat isOpen={isOpen} handleChatOpen={handleChatOpen}/>
                </Layout.Content>
                
                </Layout>
            </Layout>
            

            
          </Layout>
      
    </div>
  );
}

export default Admin;
