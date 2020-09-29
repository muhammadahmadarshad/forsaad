import jwtDecode from "jwt-decode";
const { default: GenericService } = require("./GenericService");
class UserSerice extends GenericService {
  constructor() {
    super();
  }
  login = ({email, password}) => this.post("api/user/login", { email, password });
  editUser = (_id, data) => this.put("/api/user/" + _id, data);
  deleteUser = (_id) => this.put("/api/user/" + _id);
  getSingleUser = (_id) => this.get("api/user/" + _id);
  getAllUsers = () => this.get("api/user");
  addUserSalary = (_id, data) => this.post("api/user/add-salary/" + _id, data);
  editLeaves = (_id, data) => this.put("api/user/leaves/" + _id, data);
  register = (data) => {
    console.log(data)
    return this.post("api/user", data)};

  logout = () => {
    localStorage.removeItem("token");
  };
  isLoggedIn = () => {
    return localStorage.getItem("token") ? true : false;
  };
  getLoggedInUser = () => {
    try {
      const jwt = localStorage.getItem("token");
      return jwtDecode(jwt);
    } catch (ex) {
      return null;
    }
  };
  isAdmin = () => {
    if (this.isLoggedIn()) {
      if (this.getLoggedInUser().role == "admin") {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };
}
let userService = new UserSerice();
export default userService;
