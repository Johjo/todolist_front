"use client"
import React, {useEffect} from "react";
import {inject} from "@/injection.server";
import {PAGE_SOURCE} from "@/app/injectionKeys";

export interface PageSourcePort {
    getAllTasks(): Promise<string[]>;
}

export default function Page() {
    const [tasks, setTasks] = React.useState<string[]>([]);

    useEffect(() => {
        const pageSource = inject(PAGE_SOURCE)
        pageSource.getAllTasks().then(setTasks)
    }, []);

    return (
        <>
            {tasks.length === 0 && <div>Please, open a task a</div>}
            {tasks.map((task, index) => <div key={index}>{task}</div>)}
        </>);
}
