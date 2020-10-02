const { default: GenericService } = require("./GenericService");
class SalaryService extends GenericService {
  constructor(props) {
    super(props);
  }
  calculateSalary=(date)=>this.get(`/api/user/calculate-salary?date=${date}`)
  processSalary=(data)=>this.post('/api/user/process-salary',data)
}
let salaryService = new SalaryService();
export default salaryService;
