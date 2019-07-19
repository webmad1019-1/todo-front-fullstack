import moment from "moment";
import {randomInt} from "./Utils"

export default class TaskElement {
    constructor(description) {
        this._id = randomInt(1000, 1000000000)
        this.description = description;
        this.timestamp = moment().format("DD/MM/Y hh:mm:ss")
        this.favourited = false;
        this.done = false;
    }
}