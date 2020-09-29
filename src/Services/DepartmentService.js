const { default: GenericService } = require("./GenericService");

class DepartmentService extends GenericService {
  constructor(props) {
    super(props);
  }
  CreateDepartments = (data) => this.post("/api/department/", data);
  getDepartments = () => this.get("/api/department/");
  editDepartments = (_id,data) => this.put("/api/department/"+_id,data);
  deleteDepartments = (_id) => this.delete("/api/department/" + _id);
}


let departmentSevice= new DepartmentService()

export default departmentSevice


