const { default: GenericService } = require("./GenericService");
class LeaveService extends GenericService {
  constructor(props) {
    super(props);
  }
  applyleave = (data) => this.post("/api/leave/", data);
  verifyleave = (_id, data) => this.put("/api/leave/verify" + _id, data);
  getPendingleaves = () => this.get("/api/leave/pending");
  getMyleavesRequest = () => this.get("/api/leave/me");
}

export default new LeaveService()
