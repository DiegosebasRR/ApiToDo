import { getTask, deleteTask,getTasks,postTask,updateTask } from "../services/task";
import {Request, Response} from "express";


const getTasksCtrl = async (req: Request, res: Response) => {
    try{
        const response = await getTasks();
        res.send(response);    

    }catch(e){
        console.log(e);
        
    }
}
const getTaskCtrl = async ({params}: Request, res: Response) => {
    try{
        const {id} = params;   
        const response = await getTask(id);
        const data = response ? response: "Not_found"
        res.send(data);

    }catch(e){
        console.log(e);
        
    }
}
const postTaskCtrl = async ({body}: Request, res: Response) => {
    try{
        const response = await postTask(body);
        res.send(response);
    }catch(e){
        console.log(e);
        
    }
}
const updateTaskCtrl = async ({body, params}: Request, res: Response) => {
    try{
        const {id} = params;
        const response = await updateTask(id, body);
        res.send(response); 

    }catch(e){
        console.log(e);
        
    }
}
const deleteTaskCtrl = async ({params}: Request, res: Response) => {
    try{
        const {id} = params;
        const response = await deleteTask(id);
        res.send(response);
    }catch(e){
        console.log(e);
        
    }
}
export {getTasksCtrl,getTaskCtrl,postTaskCtrl,updateTaskCtrl,deleteTaskCtrl}