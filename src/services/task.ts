import TaskModel from "../models/task";
import { Task } from "../interfaces/task.interface";

const getTasks = async () => {
    const tasks = await TaskModel.find({});
    return tasks;
}
const getTask = async (id: string) => {
    const task = await TaskModel.findOne({_id:id});
    return task;
}
const postTask = async (data: Task) => {
    const task = await TaskModel.create(data);
    return task;
}
const updateTask = async (id: string, data: Task ) => {
    const task = await TaskModel.findOneAndUpdate({_id:id}, data,{
        new: true
    });
    return task;
}
const deleteTask = async (id:string) => {
    const task = await TaskModel.deleteOne({_id:id});
    return task;    
}

export {getTasks, getTask, postTask, updateTask, deleteTask};