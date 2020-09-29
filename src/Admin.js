import React, { useState } from "react";
import {useMediaPredicate} from 'react-media-hook'
import "./Styles/home.css";
import {Layout} from 'antd'
import "./Styles/home.css";
import Sidebar from "./components/Sidebar";
import { MenuFoldOutlined,MenuUnfoldOutlined } from "@ant-design/icons";
import AdminRoutes from "./AdminRoutes";
import './App.css'
import { Route, Switch, useRouteMatch } from "react-router";
import Home from "./Pages/Demo";

const {Header,Sider}=Layout
function Admin(props) {
  const isSmallScreen=useMediaPredicate("(max-width: 600px)")
  const [collapsed,setCollapsed]=useState(false)
  function toggleCollapsed(){
      setCollapsed(!collapsed)
  }
  let {path,url}=useRouteMatch()

  return (
    <div className='Admin'>
              
            <Layout  >

            <Header   >
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger btn btn-sm btn-primary',
              onClick: toggleCollapsed,
              style:{fontSize:'10px'}
            })}
            </Header >

            <Layout >
   

            <Sider theme={'dark'}  breakpoint='sm'  trigger={null}
                collapsedWidth={isSmallScreen?0:80}
                collapsible
                defaultCollapsed={true}
                width={isSmallScreen?'100%':230}
                onCollapse={setCollapsed}
                onBreakpoint={(v)=>{

                setCollapsed(true)}}
                
                collapsed={collapsed}>
                <div className='logo'/>
                  <Sidebar  path={path} url={url} isSmallScreen={isSmallScreen} toggleCollapsed={toggleCollapsed} setCollapsed={setCollapsed} />
              </Sider>
              <Layout>
                <Layout.Content  className='container-fluid'  >
                <Switch>
                  <Route path={path} exact component={Home}></Route>
                  <Route exact path={`${path}/:page`} component={AdminRoutes}/>
                </Switch>
                </Layout.Content>
                
                </Layout>
            </Layout>
            

            
          </Layout>
      
    </div>
  );
}

export default Admin;
