"use client"
import React, {useEffect} from "react";
import {PAGE_SOURCE} from "@/app/injectionKeys";
import {inject} from "@/injection.client";

export interface PageSourcePort {
    getAllTasks(todolistKey: string): Promise<string[]>;
}

export default function Page() {
    const [tasks, setTasks] = React.useState<string[]>([]);

    useEffect(() => {
        const pageSource = inject(PAGE_SOURCE)
        pageSource.getAllTasks(`64f0c646-b8c8-420c-acf9-a12cec18e74a`).then(setTasks)
    }, []);

    return (
        <>
            {tasks.length === 0 && <div>Please, open a task</div>}
            {tasks.map((task, index) => <div key={index}>{task}</div>)}
        </>);
}
