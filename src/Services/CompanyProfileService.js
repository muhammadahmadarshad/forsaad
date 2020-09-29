const { default: GenericService } = require("./GenericService");

class CompanyProfileService extends GenericService {
  constructor(props) {
    super(props);
  }
  CreateCompanyProfile = (data) => this.post("/api/company-profile/", data);
  getCompanyProfile = () => this.get("/api/company-profile/");
  editCompanyProfile = (_id,data) => this.put("/api/company-profile/"+_id,data);
}

let instance= new CompanyProfileService()


export default instance
