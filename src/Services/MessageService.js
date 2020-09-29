const { default: GenericService } = require("./GenericService");
class MessageService extends GenericService {
    constructor(props) {
        super(props)
    
       
    
    }
    sendMessage = (_id, data) => this.post("/api/message/" + _id, data);
    getInbox = (_id, data) => this.get("/api/message/inbox" );
    getOutbox = (_id, data) => this.get("/api/message/sent");


}

