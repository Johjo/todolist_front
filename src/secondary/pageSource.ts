import {PageSourcePort} from "@/app/page";
import axios from "axios";

export class PageSource implements PageSourcePort {
    async getAllTasks(): Promise<string[]> {
        const response = await axios.get("https://app-c20a785e-9973-45bf-9b39-77069d692061.cleverapps.io/todolist/64f0c646-b8c8-420c-acf9-a12cec18e74a/task")
        return response.data
    }
}