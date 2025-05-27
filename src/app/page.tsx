import React from "react";
import {inject} from "@/injection.server";
import {PAGE_SOURCE} from "@/app/injectionKeys";

export interface PageSource {
    taskTitle: string;
}

export default function Page() {
    const pageSource = inject(PAGE_SOURCE)

    return <><div>Please, open a task</div><div>{pageSource.taskTitle}</div></>;
}
