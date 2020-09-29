const { default: GenericService } = require("./GenericService");

 class EventService extends GenericService {
  constructor(props) {
    super(props);
  }
  CreateEvent = (data) => this.post("/api/event/", data);
  getEvents = () => this.get("/api/event/");
  editEvent = (_id,data) => this.put("/api/event/"+_id,data);
  deleteEvent = (_id) => this.delete("/api/event/" + _id);
}


let event= new EventService()

export default event
