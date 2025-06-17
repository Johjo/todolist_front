import {render, waitFor} from "@testing-library/react";
import {PageSourcePort} from "@/app/todolist/[todolistKey]/page";
import React from "react";
import {PAGE_SOURCE} from "@/app/injectionKeys";
import {provide} from "@/injection.client";
import {randomUUID} from "node:crypto";
import {PageContent} from "@/app/todolist/[todolistKey]/pageContent";

const EMPTY_STATE_TEXT = 'Please, open a task';

class PageSourceForTest implements PageSourcePort {
    private tasks: Map<string, string[]> = new Map();

    feed(todolistKey: string, tasks: string[]) {
        this.tasks.set(todolistKey, tasks);
    }

    async getAllTasks(todolistKey: string): Promise<string[]> {
        return this.tasks.get(todolistKey) || []
    }
}

describe('when render todolist', () => {
    describe('given no task', () => {
        it('then render empty state', async () => {
            provide(PAGE_SOURCE, new PageSourceForTest())
            const {findByText} = render(<PageContent todolistKey={randomUUID()}/>);
            const emptyState = await findByText(EMPTY_STATE_TEXT)
            expect(emptyState).toBeInTheDocument();
        })
    })

    describe('given one task', () => {
        let pageSource: PageSourceForTest;
        beforeEach(() => {
            pageSource = new PageSourceForTest();
            provide(PAGE_SOURCE, pageSource)
        })
        it('then no render empty state', async () => {
            const todolistKey = randomUUID();
            pageSource.feed(todolistKey, ['buy the milk'])
            const {queryByText} = render(<PageContent todolistKey={todolistKey}/>);
            const emptyState = queryByText(EMPTY_STATE_TEXT)
            await waitFor(() => expect(emptyState).not.toBeInTheDocument());
        })

        it.each(['buy the milk', 'buy the water'])('then render task with \'%s\'', async (taskTitle: string) => {
            const todolistKey = randomUUID();
            pageSource.feed(todolistKey, [taskTitle])
            const {findByText} = render(<PageContent todolistKey={todolistKey}/>);
            const task = await findByText(taskTitle)
            expect(task).toBeInTheDocument();
        })
    })

    describe('given many tasks', () => {
        let pageSource: PageSourceForTest;
        beforeEach(() => {
            pageSource = new PageSourceForTest();
            provide(PAGE_SOURCE, pageSource)
        })

        it('then render many task', async () => {
            const todolistKey = randomUUID();
            pageSource.feed(todolistKey, ["buy the milk", "buy the water"])
            const {findByText} = render(<PageContent todolistKey={todolistKey}/>);
            expect(await findByText("buy the milk")).toBeInTheDocument();
            expect(await findByText("buy the water")).toBeInTheDocument();

        })
    })
})