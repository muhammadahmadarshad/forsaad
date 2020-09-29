const { default: GenericService } = require("./GenericService");

class Ipservice extends GenericService {
  constructor(props) {
    super(props);
  }
  addNewIP = (data) => this.post("/api/ip/", data);
  editIp = (_id, data) => this.put("/api/ip/" + _id, data);
  getAllIPs = () => this.get("/api/ip/");
  deleteIp = (_id) => this.delete("/api/ip/" + _id);
}


let ipService= new Ipservice()

export default ipService
