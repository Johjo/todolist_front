import {PageSourcePort} from "@/app/page";
import axios from "axios";

type Task = {
    name: string
};

type Todolist = {
    tasks: Task[]
};
type Response = {
    todolist: Todolist

}

export class PageSource implements PageSourcePort {
    async getAllTasks(todolistKey: string): Promise<string[]> {
        const response = await axios.get<Response>(`https://app-c20a785e-9973-45bf-9b39-77069d692061.cleverapps.io/todolist/${todolistKey}/task`)
        const todolist = response.data.todolist;
        const tasks = todolist.tasks;
        return tasks.map((task: Task) => task.name)
    }
}