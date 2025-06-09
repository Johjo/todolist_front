"use client"
import React, {useEffect} from "react";
import {PAGE_SOURCE} from "@/app/injectionKeys";
import {inject} from "@/injection.client";
import {useParams} from "next/navigation";

export interface PageSourcePort {
    getAllTasks(todolistKey: string): Promise<string[]>;
}

type UrlParams = {
    todolistKey: string
}

export default function Page(): React.JSX.Element {
    const [tasks, setTasks] = React.useState<string[]>([]);
    const urlParams = useParams<UrlParams>();

    useEffect(() => {
        const pageSource = inject(PAGE_SOURCE)
        pageSource.getAllTasks(urlParams.todolistKey).then(setTasks)
    }, [urlParams]);

    return (
        <>
            {tasks.length === 0 && <div>Please, open a task</div>}
            {tasks.map((task, index) => <div key={index}>{task}</div>)}
        </>);
}
