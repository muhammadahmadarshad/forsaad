import React,{useState,useEffect} from "react";
import {Steps} from 'antd'
import EmployeeInfo from './AddEmployeeInfo'
import AddSalary from "./AddSalary";
import DepartmentService from '../Services/DepartmentService'
import ContractService from '../Services/ContractService'
import Loading from "./Loading";
const {Step}= Steps




function AddNewEmployee(props) {;
  const [current, setCurrent] = useState(0);
  const [credentials,setCredentioals]= useState({ departments:[],contracts:[]})
  const [employeeID,setEmployeeID]=useState('')
  const [loading,setLoading]= useState(true)
  const [err,setError]= useState(false)
  useEffect(()=>{
    DepartmentService.getDepartments()
    .then((res)=>{
      let departments= res.data
      ContractService.getContract()
      .then((res)=>{
        setCredentioals({...credentials,contracts:res.data,departments})
        setError(false)
        setLoading(false)
        
      })
      .catch(()=>{
        setError(true)
        setLoading(false)
      })
    })
    .catch((err)=>{
      setError(true)
      setLoading(false)
    })
  },[])

  if(loading===true){
    return <Loading/>
  }

  else if (err){
    return <h1 className='text-center mt-5 text-danger'>Http Request Failed</h1>
  }

  else
    return (
        <div className='container'>
          <div>         
          <Steps type='navigation'  size='default' current={current}>
              <Step title='Employee Info' description='Enter Employee Info'>

              </Step>
              <Step title='Add Salary'></Step>
          </Steps>
          </div>



          {current===0&&<EmployeeInfo departments={credentials.departments} 
          
          contracts={credentials.contracts}
              setEmployeeID={setEmployeeID}
               setCurrent={setCurrent} />}
          {current===1&&<AddSalary {...props} employeeID={employeeID}/>}

        </div>
    );
}

export default AddNewEmployee;
