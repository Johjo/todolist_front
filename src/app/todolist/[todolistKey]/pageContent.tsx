import React, {useEffect} from "react";
import {inject} from "@/injection.client";
import {PAGE_SOURCE} from "@/app/injectionKeys";

interface PageContentProps {
    todolistKey: string
}

export function PageContent({todolistKey}: PageContentProps) {
    const [tasks, setTasks] = React.useState<string[]>([]);

    useEffect(() => {
        const pageSource = inject(PAGE_SOURCE)
        pageSource.getAllTasks(todolistKey).then(setTasks)
    }, [todolistKey]);

    return (
        <>
            {tasks.length === 0 && <div>Please, open a task</div>}
            {tasks.map((task, index) => <div key={index}>{task}</div>)}
        </>);

}