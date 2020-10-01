const { default: GenericService } = require("./GenericService");
class LoanService extends GenericService {
  constructor(props) {
    super(props);
  }
  applyLoan = (data) => this.post("/api/loan/", data);
  verffyLoan = (_id, data) => this.put("/api/loan/" + _id, data);
  getPendingLoans = () => this.get("/api/loan/pending");
  getMyLoansRequest = () => this.get("/api/loan/me");
  deleteLoanRequest=(id)=> this.delete(`/api/loan/${id}`)
  getLoanReportOfUser=(data)=>{

    let {fromDate,toDate,empID}=data
    return this.get(`/api/loan/report/${empID}?fromDate=${fromDate}&toDate=${toDate}`)}
    getLoanReportofAllUser=(data)=>{

      let {fromDate,toDate}=data
      return this.get(`/api/loan/report?fromDate=${fromDate}&toDate=${toDate}`)}
}





export default new LoanService()
