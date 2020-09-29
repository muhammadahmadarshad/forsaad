const { default: GenericService } = require("./GenericService");

class ContractService extends GenericService {
  constructor(props) {
    super(props);
  }
  createContract = (data) => this.post("/api/contract",data);
  getContract = () => this.get("/api/contract");
  EditContract = (_id, data) => this.put("/api/contract/" + _id, data);
  deleteContract = (_id) => this.delete("/api/contract/" + _id);
}


let contractService= new ContractService() 

export default contractService