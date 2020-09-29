const { default: GenericService } = require("./GenericService");

export default class AttendanceService extends GenericService {
  constructor(props) {
    super(props);
  }
  CheckIn = () => this.post("/api/attendance/checkin");
  CheckOut = () => this.post("/api/attendance/checkout");
  ManuallyMarkAttendance = (_id, data) =>
    this.put("/api/attendance/manually-mark" + _id, data);
  getTodaysAttendance = () => this.get("/api/attendance/today");
}
