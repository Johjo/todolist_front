"use client"
import React from "react";
import {useParams} from "next/navigation";
import {PageContent} from "@/app/todolist/[todolistKey]/pageContent";

export interface PageSourcePort {
    getAllTasks(todolistKey: string): Promise<string[]>;
}

type UrlParams = {
    todolistKey: string
}

export default function Page(): React.JSX.Element {
    const urlParams = useParams<UrlParams>();

    return <PageContent todolistKey={urlParams.todolistKey}/>;
}
