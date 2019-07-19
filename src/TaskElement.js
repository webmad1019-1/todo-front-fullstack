import moment from "moment";

export default class TaskElement {
    constructor(_id, description, timestamp, favourited, done) {
        this._id = _id
        this.description = description;
        this.timestamp = moment(timestamp).format("DD/MM/Y hh:mm:ss")
        this.favourited = favourited;
        this.done = done;
    }
}