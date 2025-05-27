import {render} from "@testing-library/react";
import Page, {PageSource} from "@/app/page";
import React from "react";
import {provide} from "@/injection.server";
import {PAGE_SOURCE} from "@/app/injectionKeys";

const EMPTY_STATE_TEXT = 'Please, open a task';

class PageSourceForTest implements PageSource {
    public taskTitle: string = "";


    feed(taskTitle: string) {
        this.taskTitle = taskTitle;
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
        it.skip('then no render empty state', async () => {
            const {findByText} = render(<Page/>);
            const emptyState = await findByText(EMPTY_STATE_TEXT)
            expect(emptyState).not.toBeInTheDocument();
        })

        it.each(['buy the milk', 'buy the water'])('then render task with \'%s\'', async (taskTitle: string) => {
            const pageSource = new PageSourceForTest();
            pageSource.feed(taskTitle)
            provide(PAGE_SOURCE, pageSource)
            const {findByText} = render(<Page/>);
            const task = await findByText(taskTitle)
            expect(task).toBeInTheDocument();
        })


    })
})