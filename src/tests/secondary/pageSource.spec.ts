import {PageSource} from "@/secondary/pageSource";

describe('pageSource', () => {
    it('should get tasks', async () => {
        const pageSource = new PageSource();
        const actual = await pageSource.getAllTasks()

        expect(actual).toEqual({todolist : {key: "64f0c646-b8c8-420c-acf9-a12cec18e74a", tasks: [{key: "67666c57-f4f9-4bb2-bb2f-aa2011b88ba1", name: "task 1", is_opened: true}, {key: "c41971af-baec-4cd6-80d0-6727188a3dd3", name: "task 2", is_opened: true}]}})

        // 64f0c646-b8c8-420c-acf9-a12cec18e74a
        // https://app-c20a785e-9973-45bf-9b39-77069d692061.cleverapps.io/todolist/64f0c646-b8c8-420c-acf9-a12cec18e74a/task
    })
})
