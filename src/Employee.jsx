import React, { useState } from "react";
import {useMediaPredicate} from 'react-media-hook'
import "./Styles/home.css";
import {Layout} from 'antd'
import "./Styles/home.css";
import SidebarEmployee from "./components/SidebarEmployee";
import { MenuFoldOutlined,MenuUnfoldOutlined } from "@ant-design/icons";
import AdminRoutes from "./AdminRoutes";
import './App.css'
import { Redirect, Route, Switch, useRouteMatch } from "react-router";

import EmployeeDashboard from "./Pages/EmployeeDashboard";
const {Header,Sider}=Layout
function Employee(props) {
  const isSmallScreen=useMediaPredicate("(max-width: 600px)")
  const [collapsed,setCollapsed]=useState(false)
  function toggleCollapsed(){
      setCollapsed(!collapsed)
  }
  let {path,url}=useRouteMatch()

  return (
    <div className='Admin'>            
            <Layout>
                <Header>
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger btn btn-sm btn-primary',
                onClick: toggleCollapsed,
                style:{fontSize:'10px'}
                })}
                </Header >

                <Layout style={{height:'100vh'}}  >
    

                <Sider theme={'dark'}  breakpoint='sm'  trigger={null}
                    collapsedWidth={isSmallScreen?0:80}
                    collapsible
                    defaultCollapsed={true}
                    width={isSmallScreen?'100%':230}
                    onCollapse={setCollapsed}
                    onBreakpoint={(v)=>{

                    setCollapsed(true)}}
                    style={{height:'100vh'}}
                    collapsed={collapsed}>
                    <div className='logo'/>
                    <SidebarEmployee  path={path} url={url} isSmallScreen={isSmallScreen} toggleCollapsed={toggleCollapsed} setCollapsed={setCollapsed} />
                </Sider>
                    <Layout.Content  className='container-fluid mt-2'>
                    <Switch>
                    <Route path={path} exact component={EmployeeDashboard}></Route>
                    <Route exact path={`${path}/:page`} component={AdminRoutes}/>
                    <Redirect to={path}/>
                    </Switch>
                    </Layout.Content>
                </Layout>
            </Layout>
        
    </div>
  );
}

export default Employee;
