import React from 'react'
import {Menu} from 'antd';
import {NavLink} from 'react-router-dom'
import {
  MessageOutlined,
  DollarOutlined
  ,DashboardOutlined,
  MoneyCollectOutlined,
  AreaChartOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;
export default function SidebarEmployee(props) {
  let {isSmallScreen,url,setCollapsed,toggleCollapsed}=props
    function ClickCollapsed(){
      setCollapsed(true)
    }
    return (
     

        <Menu  style={{height:'inherit',width:'inherit'}}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['nav1']}
          mode="inline"
          theme='dark'
          onClick={ClickCollapsed}>
            <Menu.Item onClick={ClickCollapsed} key="1" icon={<DashboardOutlined />}>
              <NavLink style={{textDecoration:'none'}} to={`${url}`}>Dashboard</NavLink>
            </Menu.Item>

            <Menu.Item onClick={ClickCollapsed} key="11" icon={<MessageOutlined />}>
            <NavLink style={{textDecoration:'none'}} to={`${url}/PrivateMessage`}>Private Message</NavLink>
            </Menu.Item>

            <SubMenu key="sub2" icon={<AreaChartOutlined />} title="Leaves">
              <Menu.Item onClick={ClickCollapsed} key="12"><NavLink style={{textDecoration:'none'}} to={`${url}/SendLeave`}>Send Leave Request</NavLink></Menu.Item>
              <Menu.Item onClick={ClickCollapsed} key="13"><NavLink style={{textDecoration:'none'}} to={`${url}/PendingLeave`}>Pending Leave Request</NavLink></Menu.Item>
            </SubMenu>

            <SubMenu key="sub3" icon={<DollarOutlined />} title="Loan">
              <Menu.Item onClick={ClickCollapsed} key="14"><NavLink style={{textDecoration:'none'}} to={`${url}/ApplyLoan`}>Apply for Loan</NavLink></Menu.Item>
              <Menu.Item onClick={ClickCollapsed} key="15"><NavLink style={{textDecoration:'none'}} to={`${url}/PendingLoan`}>Pending Loan Request</NavLink></Menu.Item>
              
            </SubMenu>
            
            <Menu.Item key="16" icon={<MoneyCollectOutlined />}><NavLink style={{textDecoration:'none'}} to={`${url}/EmployeeSalary`}>Employee Salary</NavLink></Menu.Item>
            
            <SubMenu key="sub4" title="Reports" icon={<AreaChartOutlined/>}>
                <Menu.Item key="17"><NavLink style={{textDecoration:'none'}} to={`${url}/AttendanceReport`}>Attendance report</NavLink></Menu.Item>
                <Menu.Item key="18"><NavLink style={{textDecoration:'none'}} to={`${url}/LeaveReport`}>Leave report</NavLink></Menu.Item>
                <Menu.Item key="19"><NavLink style={{textDecoration:'none'}} to={`${url}/LoanReport`}>Loan report</NavLink></Menu.Item>
                <Menu.Item key="20"><NavLink style={{textDecoration:'none'}} to={`${url}/AttendanceSheet`}>Attendance Sheet</NavLink></Menu.Item>
                
              </SubMenu>
        </Menu>
    
    )
}
