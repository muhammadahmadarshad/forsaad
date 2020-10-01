const { default: GenericService } = require("./GenericService");
class MessageService extends GenericService {
  constructor(props) {
    super(props);
  }
  sendMessage = (data) => this.post("/api/message/", data);
  getInbox = () => this.get("/api/message/inbox");
  getOutbox = (_id, data) => this.get("/api/message/sent");
}
let messageService = new MessageService();
export default messageService;
