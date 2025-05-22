import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import {Button} from "@/atom/button";

describe('button', () => {
    it('should render button', () => {
        render(<Button onClick={() => {}}>label</Button>);
        screen.getByText('label')
    })

    it('should execute something when clicked', async () => {
        let clicked = false;
        render(<Button onClick={() => clicked = true}>test</Button>);

        await userEvent.click(screen.getByText('test'));

        expect(clicked).toBe(true);
    });
});
