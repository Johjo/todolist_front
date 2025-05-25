import {act, render} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {Input} from "@/atom/input";

describe('input', () => {
    it('should render input', () => {
        const {getByRole} = render(<Input value={''}/>);
        expect(getByRole('textbox')).toBeInTheDocument();
    });

    it('should get text value', () => {
        const {getByRole} = render(<Input value={'test'}/>);
        expect(getByRole('textbox')).toHaveValue('test');
    });

    it('should update value when user type something', async () => {
        const {getByRole} = render(<Input value={''}/>);
        const input = getByRole('textbox');

        await userEvent.type(input, 'test');

        expect(getByRole('textbox')).toHaveValue('test');
    });

});