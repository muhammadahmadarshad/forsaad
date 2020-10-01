import React from "react";
import { forwardRef } from "react";
import MaterialTable from "material-table";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import DepartmentService from '../Services/DepartmentService'
import Loading from "./Loading";
const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

function Departments() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Department Name', field: 'name', initialEditValue: '' },
      {
        title: 'Status',
        field: 'status',
        lookup: { 'active': <span className='text-success'>Active</span>, 'inactive': <span className='text-danger'>Inactive</span> },
      },
    ],
    data:[],
  });

  const [loading,setLoading]=React.useState(true)
  const [err,setErr]=React.useState(false)


  React.useEffect(()=>{

    DepartmentService.getDepartments()
    .then((res)=>{
      console.log(res.data)
      setState({...state,data:res.data?res.data:[]})
      setLoading(false)
      setErr(false)
    })
    .catch(err=>{

      setErr(true)
      setLoading(false)
    })

    
  },[])

  if (loading){
    return <Loading/>
  }

  else if (err){
    return <h1 className='text-danger text-center'>Request Failed</h1>
  }


  return (
    <div>
      <MaterialTable
        title="Departments"
        options={{
          headerStyle: {
            zIndex: 0,
          },
        }}
        columns={state.columns}
        icons={tableIcons}
        data={state.data}
        editable={{
          onRowAdd: (newData) =>new Promise((resolve)=>{
            let {name,status}=newData
            DepartmentService.CreateDepartments({name,status})
            .then(res=>{
                
              setState({...state,data:[...state.data,res.data]})
              resolve()
            })
            .catch(err=>{
              console.log(err.response)
              alert('Post Request Failed')
              resolve()
            })

            }),
          onRowUpdate: (newData, oldData) =>

            new Promise((resolve) => {
              let {_id,name,status}=newData
              DepartmentService.editDepartments(_id,{name,status})
              .then(res=>{
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = res.data;
                  return { ...prevState, data };
                });
                resolve()
              })
              .catch(err=>{
                alert('Update Failed')
                resolve()

              })
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve) => {

              let {_id}= oldData
              DepartmentService.deleteDepartments(_id)
              .then(res=>{
                setState((prevState) => {
                  const data = [...prevState.data];
                  data.splice(data.indexOf(oldData), 1);
                  return { ...prevState, data };});
                resolve()
              })
              .catch(err=>{
                alert('Delete Failed')
                resolve()

              })
            }),
        }}
      />
    </div>
  );
}

export default Departments;
