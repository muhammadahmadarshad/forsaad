const { default: GenericService } = require("./GenericService");
class LeaveService extends GenericService {
  constructor(props) {
    super(props);
  }
  applyleave = (data) => this.post("/api/leave/", data);
  verifyleave = (_id, data) => this.put("/api/leave/verify/" + _id, data);
  getPendingleaves = () => this.get("/api/leave/pending");
  getMyleavesRequest = () => this.get("/api/leave/allMyLeaves");
  getLeaveReportofAllUser=(data)=>{

    let {fromDate,toDate}=data
    return this.get(`/api/leave/report?fromDate=${fromDate}&toDate=${toDate}`)}


getLeaveReportUser=({fromDate,toDate,empID})=>{

  return this.get(`/api/leave/report/${empID}?fromDate=${fromDate}&toDate=${toDate}`)}

deleteLeave=(id)=> this.delete(`/api/leave/${id}`)
getReportOneUser = (_id, fromDate, toDate) =>
this.get(
  "api/leave/report/" + _id + "?fromDate=" + fromDate + "&toDate=" + toDate
);
}

export default new LeaveService()
