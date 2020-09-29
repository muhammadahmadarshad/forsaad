import React, { useState } from "react";
import { Steps,Button } from "antd";
import Profile from "./Profile.jsx";
import Salary from "./MonthlySalary.jsx";
import Leaves from "./Leaves";
import EmpCard from "./EmployeeCard";
import { NavLink } from "react-router-dom";
const { Step } = Steps;

function ViewProfile() {
  const [current, setCurrent] = useState(0);
  return (
    <div className="container">
      <div>
        <Steps
          type="navigation"
          onChange={(current) => {
            setCurrent(current);
          }}
          size="default"
          current={current}
        >
          <Step title="Profile"></Step>
          <Step title="Monthly Salary"></Step>
          <Step title="Leaves"></Step>
          <Step title="Employee Card"></Step>
        </Steps>
      </div>

      {current === 0 && <Profile />}
      {current === 1 && <Salary />}
      {current === 2 && <Leaves />}
      {current === 3 && <EmpCard />}
      <NavLink to="/AddNewEmployee">
        <Button type="primary">Edit Profile</Button>
      </NavLink>
    </div>
  );
}

export default ViewProfile;
