import React, { useState } from "react";
import { Card } from "antd";
import { Row, Col, Divider } from "antd";
import { Input } from "antd";
import {useAuth} from '../Context/auth'
import salaryService from "../Services/Salary";
function SalarySlip(props) {

  let [data,setData]=useState({otherDeduction:'0',otherAllowances:"0",reasonOfOtherAllowances:"",reasonOfOtherDeductions:""})
  let {state}=useAuth()

  let onChangeData=({target})=>{

      setData((prev)=>{

        return {...prev,[target.name]:target.value}
      })
  }
  
  if(!state.salaryData){

    props.history.goBack()

    return <div></div>
  }


  let {basicSalary,_id,
    contract,
    daysWorked,
    deduction,
    department,
    email,
    empId,
    employeeRole,
    employeeStatus,
    extraDay,
    firstName,
    gender,
    houseRent,
    idCardNumber,
    isAdmin,
    joiningDate,
    landlineNumber,
    lastName,
    mailingAddress,
    maritalStatus,
    medicalAllowance,
    mobileNumber,
    noOfWorkDays,
    payAble,
    permanentAddress,
    providentFund,
    salaryMonth,
    travelAllowance,}=state.salaryData


    let onSubmit=()=>{
      let {otherAllowances,otherDeduction,reasonOfOtherAllowances,reasonOfOtherDeductions}=data
      let processData={basicSalary,
      houseRent,
      medicalAllowance,
      providentFund,
      travelAllowance,
      extraDays:extraDay,
      netPayable:payAble,
      date:salaryMonth.format('YYYY-MM'),
      daysWorked,userId:_id,
      deduction,"otherAllowances":otherAllowances,otherDeductions:otherDeduction,
      reasonOfOtherAllowances:!reasonOfOtherAllowances?"N/A":reasonOfOtherAllowances
      
      
      
      ,reasonOfOtherDeductions:!reasonOfOtherDeductions?"N/A":reasonOfOtherDeductions}
      salaryService.processSalary(processData)
      .then(res=>{

        props.history.push(`/admin/EmployeeSalary${salaryMonth.format('YYYY-MM')}`)
      })
      .catch(err=>{
        console.log(err.response)
      })

    }
  return (
    <div className='p-5'>
      <Card title={"Salary Month Of  " + salaryMonth.format('MMMM-YYYY')}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" xs={{ span: 11 }} lg={{ span: 6 }}>
            <div style={{ marginTop: "8%" }}>
              <strong>Employee ID : </strong>
            </div>
            <div style={{ marginTop: "8%" }}>
              <strong>Department Name : </strong>
            </div>
            <div style={{ marginTop: "8%" }}>
              <strong>Total Working Days </strong>
            </div>
          </Col>
          <Col className="gutter-row" xs={{ span: 13 }} lg={{ span: 6 }}>
          <div style={{ marginTop: "8%" }}>{empId}</div>
          <div style={{ marginTop: "8%" }}>{department.name}</div>
          <div style={{ marginTop: "8%" }}>{noOfWorkDays}</div>
          </Col>
          <Col className="gutter-row" xs={{ span: 11 }} lg={{ span: 6 }}>
            <div style={{ marginTop: "8%" }}>
              <strong>Full Name </strong>
            </div>
            <div style={{ marginTop: "8%" }}>
              <strong>Total Days Worked </strong>
            </div>
          </Col>
          <Col className="gutter-row" xs={{ span: 1 }} lg={{ span: 6 }}>
            <div style={{ marginTop: "8%" }}>
            <p>{`${firstName} ${lastName}`}</p>
            </div>
            <div style={{ marginTop: "8%" }}>
            <p>{daysWorked}</p>
            </div>
          </Col>
        </Row>
        <Divider></Divider>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" xs={{ span: 24 }} lg={{ span: 12 }}>
            <div style={{ marginTop: "8%" }}>
              <strong>
                <h4>Earnings </h4>
              </strong>
            </div>
            <Divider></Divider>
            <Card>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={12}>
                  <div className="earnings-cnt">
                    <strong>Descriptions</strong>
                    <Divider></Divider>
                    <p>Basic Salary</p>
                    <Divider></Divider>
                    <p>House Rent</p>
                    <Divider></Divider>
                    <p>Travel Allowance</p>
                    <Divider></Divider>
                    <p>Medical Allowance</p>
                    <Divider></Divider>
                    <p>Extra Day(s)</p>
                    <Divider></Divider>
                    <p>Other Allowance</p>
                  </div>
                </Col>
                <Col className="gutter-row" span={12}>
                  <div style={{ float: "right" }} className="earnings-cnt">
                    <strong>Amount</strong>
                    <Divider></Divider>
                    <p>{basicSalary}</p>
                    <Divider></Divider>
                    <p>{houseRent}</p>
                    <Divider></Divider>
                    <p>{travelAllowance}</p>
                    <Divider></Divider>
                    <p>{medicalAllowance}</p>
                    <Divider></Divider>
                    <p>{extraDay}</p>
                    <Divider></Divider>
                  </div>
                  <Input type='number' name={'otherAllowances'} onChange={onChangeData} value={data.otherAllowances}></Input>
                  <Input required type='text' name={'reasonOfOtherAllowances'} onChange={onChangeData} value={data.reasonOfOtherAllowances}></Input>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col className="gutter-row" xs={{ span: 24 }} lg={{ span: 12 }}>
            <div style={{ marginTop: "8%" }}>
              <strong>
                <h4>Deductions </h4>
              </strong>
            </div>
            <Divider></Divider>
            <Card>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={12}>
                  <div style={{ float: "left" }} className="earnings-cnt">
                    <strong>Descriptions</strong>
                    <Divider></Divider>
                    <p>Provident Fund</p>
  
                    <Divider></Divider>
                    <p style={{ height: "23px" }}></p>
                    <Divider></Divider>
                    <p style={{ height: "23px" }}></p>
                    <Divider></Divider>
                    <p></p>

                    <Divider></Divider>
                    <p>Other Deduction</p>
                  </div>
                </Col>
                <Col className="gutter-row" span={12}>
                  <div style={{ float: "right" }} className="earnings-cnt">
                    <strong>Amount</strong>
                    <Divider></Divider>
                    <p>{providentFund}</p>
                    <Divider></Divider>
                    <p></p>
                    <Divider></Divider>
                    <p style={{ height: "23px" }}></p>
                    <Divider></Divider>
                    <p style={{ height: "23px" }}></p>
                    <Divider></Divider>
                  </div>
                  <Input type='number' name='otherDeduction' onChange={onChangeData} value={data.otherDeduction}></Input>
                  <Input type='text' name={'reasonOfOtherDeductions'} onChange={onChangeData} value={data.reasonOfOtherDeductions}></Input>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>

        <Divider></Divider>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" xs={{ span: 24 }} lg={{ span: 12 }}>
            <Card>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={12}>
                  <strong>Total Earnings</strong>
                </Col>
                <Col className="gutter-row" span={12}>
                  {" "}
              <strong style={{ float: "right" }}>{payAble+parseInt(data.otherAllowances)}</strong>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col className="gutter-row" xs={{ span: 24 }} lg={{ span: 12 }}>
            <Card>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={12}>
                  <strong>Total Deductions</strong>
                </Col>
                <Col className="gutter-row" span={12}>
                  {" "}
                <strong style={{ float: "right" }}>{deduction+parseInt(data.otherDeduction)}</strong>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>

        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" xs={{ span: 24 }} lg={{ span: 12 }}>
            <button onClick={onSubmit} className="btn btn-primary" role="button">
              Pay Now
            </button>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default SalarySlip;
