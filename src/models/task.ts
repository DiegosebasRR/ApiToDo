import { Schema, model } from "mongoose";

const taskSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    expiration_date:{type: String, required: true},
    priority: {type: Number, required: true, default: 0},
    labels:{type: Array<String>, required: true}
})

const TaskModel = model("Task", taskSchema);
export default TaskModel;