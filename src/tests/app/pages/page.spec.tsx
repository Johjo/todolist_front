import {render, waitFor} from "@testing-library/react";
import Page, {PageSourcePort} from "@/app/page";
import React from "react";
import {PAGE_SOURCE} from "@/app/injectionKeys";
import {provide} from "@/injection.client";

const EMPTY_STATE_TEXT = 'Please, open a task';

class PageSourceForTest implements PageSourcePort {
    private tasks: string[] = [];

    feed(tasks: string[]) {
        this.tasks = tasks;
    }


    async getAllTasks(): Promise<string[]> {
        return this.tasks
    }


}

describe('when render todolist', () => {
    describe('given no task', () => {
        it('then render empty state', async () => {
            provide(PAGE_SOURCE, new PageSourceForTest())
            const {findByText} = render(<Page/>);
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
            pageSource.feed(['buy the milk'])
            const {queryByText} = render(<Page/>);
            const emptyState = queryByText(EMPTY_STATE_TEXT)
            await waitFor(() => expect(emptyState).not.toBeInTheDocument());
        })

        it.each(['buy the milk', 'buy the water'])('then render task with \'%s\'', async (taskTitle: string) => {
            pageSource.feed([taskTitle])
            const {findByText} = render(<Page/>);
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
            pageSource.feed(["buy the milk", "buy the water"])
            const {findByText} = render(<Page/>);
            expect(await findByText("buy the milk")).toBeInTheDocument();
            expect(await findByText("buy the water")).toBeInTheDocument();

        })
    })
})