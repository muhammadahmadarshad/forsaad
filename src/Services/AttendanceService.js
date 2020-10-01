const { default: GenericService } = require("./GenericService");

 class AttendanceService extends GenericService {
  constructor(props) {
    super(props);
  }
  CheckIn = () => this.post("/api/attendance/checkin");
  CheckOut = () => this.post("/api/attendance/checkout");
  ManuallyMarkAttendance = (_id, data) =>
    this.post("/api/attendance/manually-mark/" + _id, data);
  getTodaysAttendance = () => this.get("/api/attendance/today");
  getAttendanceReportOfUser=(data)=>{

    let {fromDate,toDate,empID}=data
    return this.get(`/api/attendance/report/${empID}?fromDate=${fromDate}&toDate=${toDate}`)}
    getAttendanceReportofAllUser=(data)=>{

      let {fromDate,toDate}=data
      return this.get(`/api/attendance/report/?fromDate=${fromDate}&toDate=${toDate}`)}
}

let attendanceService= new AttendanceService()


export default attendanceService