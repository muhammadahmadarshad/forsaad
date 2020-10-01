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
import moment from 'moment'
import Loading from "../Pages/Loading";
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
function LastLeaveRequest({data,DeleteData  }) {
  let columns=[
    { title: 'From Date', field: 'requestDate', render:({fromDate})=> moment(fromDate).format('DD-MM-YY') },
    { title: 'To Date', field: 'requestDate', render:({toDate})=> moment(toDate).format('DD-MM-YY') },
    {
      title: 'Leave Days',
      field: 'numberOfDays',
    },

    {
      title: 'Leave Type',
      field: 'leaveType',
    },
    {
      title: 'Reason of Leave',
      field: 'reasonOfLeave',
    },
    {
      title: 'Approval Status',
      field: 'approvalStatus',
    },
    {
      title: 'Decision Date',
       render:({decisionDate})=>decisionDate? moment(decisionDate).calendar():'N/A',
    },
  ]

  return (
    <div className='mt-5'>
      <MaterialTable
        title="Previous Leave Requests"
        options={{
          headerStyle: {
            zIndex: 0,
          },
        }}
        columns={columns}
        icons={tableIcons}
        data={data}
        editable={{

          onRowDelete: DeleteData,
        }}
      />
    </div>
  );
}

export default LastLeaveRequest;
