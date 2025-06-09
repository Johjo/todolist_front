import {PageSource} from "@/secondary/pageSource";

describe('pageSource', () => {
    it('should get tasks', async () => {
        const pageSource = new PageSource();
        const actual = await pageSource.getAllTasks(`64f0c646-b8c8-420c-acf9-a12cec18e74a`)
        const expected = ["task 1", "task 2"];

        expect(actual).toEqual(expected)

        // 64f0c646-b8c8-420c-acf9-a12cec18e74a
        // https://app-c20a785e-9973-45bf-9b39-77069d692061.cleverapps.io/todolist/64f0c646-b8c8-420c-acf9-a12cec18e74a/task
    })
})
