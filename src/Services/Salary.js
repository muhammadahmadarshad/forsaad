const { default: GenericService } = require("./GenericService");
class SalaryService extends GenericService {
  constructor(props) {
    super(props);
  }
  calculateSalary=(date)=>this.get(`/api/user/calculate-salary?date=${date}`)
}
let salaryService = new SalaryService();
export default salaryService;
