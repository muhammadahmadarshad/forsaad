import React,{useEffect,useState} from "react";
import {
  MDBIcon,
  MDBBtn,
} from "mdbreact";
import { NavLink} from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import UserService from '../Services/UserService'
import EmployeeTable from "../components/EmployeeTable.jsx";
import Loading from "./Loading";

function EmployeeManagement(props) {
  let [loading,setLoading]=useState(true)
  let [err,setError]=useState(false)
  let [data,setData]=useState( {
    columns: [
      {
        title: "Employee ID",
        field: "empId",
        sort: "asc",
        width: 100,
        render: (rows) => {
          return <NavLink to={`/admin/ViewProfile/${rows._id}`}>{rows.empId}</NavLink>;
        },
      }
      
      ,
      {
        title: "Full Name",
        field: "name",
        sort: "asc",
        width: 200,
        render: (rows) => {
          return rows.firstName+" "+rows.lastName;
        },
      },
      {
        title: "Email Address",
        field: "email",
        sort: "asc",
        width: 270,
      },
      {
        title: "Gender",
        field: "gender",
        sort: "asc",
        width: 100,
      },
      {
        title: "Department Name",
        field: "department",
        sort: "asc",
        width: 200,
        render:(row)=>'department'
      },
    ],
    rows: [

    ],
  })

  useEffect(()=>{
    UserService.getAllUsers()
    .then(res=>{
      console.log(res.data)
      setData({...data,rows:res.data})
      setLoading(false)
      setError(false)
    })
    .catch(err=>{
      setError(true)
      setLoading(false)
    })
  },[])
  

  if (loading)
    return <Loading/>
  else if (err)
    return <h1 className='text-center text-danger mt-5'>HTTP Request Failed</h1>

  else
  return (
    <div className="p-1">
      <NavLink
        to="/admin/AddNewEmployee"
        style={{ textDecoration: "none", color: "#999" }}
      >
        <MDBBtn className="btn btn-outline-red" type="submit">
          <MDBIcon icon="plus-circle" className="ml-2" />
          Add New Employee
        </MDBBtn>
      </NavLink>
      <EmployeeTable   title ="Employee Management" data={data} />
    </div>
  );
}

export default EmployeeManagement;
