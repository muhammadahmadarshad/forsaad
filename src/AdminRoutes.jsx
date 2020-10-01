import React from 'react'
import SendLeaveRequest from "./Pages/SendLeaveRequest.js";
import EmployeeSalary from './Pages/EmployeeSalary'
import ApplyforLoan from "./Pages/ApplyforLoan.js";
import AddNewEmployee from "./Pages/AddNewEmployee.js";
import AttendanceReport from "./Pages/AttendanceReport.js";
import CompanyProfile from "./Pages/CompanyProfile.js";
import Contracts from "./Pages/Contracts.js";
import Departments from "./Pages/Departments.js";
import EmployeeManagement from "./Pages/EmployeeManagement.js";
import IpConfiguration from "./Pages/IpConfiguration.js";
import LeaveReport from "./Pages/LeaveReport.js";
import LeavesManagement from "./Pages/LeavesManagement.js";
import ManuallymarkAttendance from "./Pages/ManuallymarkAttendance.js";
import PendingLoanRequest from "./Pages/PendingLoanRequest.js";
import PostEvent from "./Pages/PostEvent.js";
import PendingLeave from './Pages/PendingLeave.js';
import PrivateMessage from './Pages/PrivateMessage.js';
import AttendanceSheet from './Pages/Attendance'
import LoanReport from './Pages/LoanReport'
import SalaryReport from './Pages/EmployeeSalary'
import { useParams,Route } from 'react-router';
import ViewProfile from './Pages/ViewProfile.js';

export default function AdminRoutes(props) {

  let {page}=useParams()
      if(page==='EmployeeManagement')
          return <Route component={EmployeeManagement }  to='/admin/EmployeeManagement/:id'/>
      else if (page==='AddNewEmployee'){
          return <Route to='/admin/AddNewEmployee' component={AddNewEmployee} />
      }

      else if (page==='CompanyProfile'){
        return <Route  component={CompanyProfile} to={'/admin/CompanyProfile'}/>
      }
      else if (page==='ipconfiguration'){
        return <Route component={IpConfiguration} to='/admin/ipconfiguration'/>
      }
      else if (page==='contracts'){
        return <Route component={Contracts} to={'/admin/contracts'}/>
      }

      else if (page==='Departments'){
        return <Route component={Departments} to='/admin/Departments'/>
      }
      
      else if (page==='ManuallymarkAttendance'){
        return <Route component={ManuallymarkAttendance} to='/admin/ManuallymarkAttendance'/>
      }

      else if (page==='PostEvents'){
        return <Route component={PostEvent} to='/admin/PostEvents' />
      }

      else if (page==='LeaveManagement'){
        return <Route component={LeavesManagement} to='/admin/LeaveManagement'/>
      }

      else if (page==='PrivateMessage'){
        return <Route component={PrivateMessage} to='/admin/PrivateMessage'/>
      }

      else if (page==='SendLeave'){
        return <Route  component={SendLeaveRequest} to='/admin/SendLeave'/>
      }

      else if (page==='PendingLeave'){
        return <Route component={PendingLeave} to='/admin/PendingLeave'/>
      }

      else if (page==='ApplyLoan'){
        return <Route component={ApplyforLoan} to='/admin/ApplyLoan'/>
      }

      else if (page==='PendingLoan'){
        return <Route component={PendingLoanRequest} to='/admin/PendingLoan'/>
      }

      else if(page==='EmployeeSalary'){
        return <Route to='/admin/EmployeeSalary' component={EmployeeSalary} />
      }

      else if(page==='LeaveReport'){
        return <Route to='/admin/LeaveReport' component={LeaveReport} />
      }
      else if(page==='AttendanceReport'){
        return <Route to='/admin/AttendanceReport' component={AttendanceReport} />
      }
      else if(page==='LoanReport'){
        return <Route to='/admin/LoanReport' component={LoanReport} />
      }
      else if(page==='AttendanceSheet'){
        return <Route to='/admin/AttendanceSheet' component={AttendanceSheet} />
      }
      else if(page==='LoanReport'){
        return <Route to='/admin/SalaryReport' component={SalaryReport} />
      }

      else if(page==='ViewProfile'){
        return <Route to='/admin/ViewProfile/:id' component={ViewProfile} />
      }
      else {
        return (<div>

        </div>)
      }
}
