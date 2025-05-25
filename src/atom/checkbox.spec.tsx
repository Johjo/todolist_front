import {render} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {CheckBox} from "@/atom/checkBox";

describe('checkbox', () => {
    it('should render checkbox', () => {
        const {getByRole} = render(<CheckBox onChange={() => {
        }}/>);
        expect(getByRole('checkbox')).toBeInTheDocument();
    });

    it('should do something when changed', async () => {
        let hasBeenChecked = false;
        const {getByRole} = render(<CheckBox onChange={(isChecked) => {
            hasBeenChecked = isChecked
        }}/>);
        const input = getByRole('checkbox');

        await userEvent.click(input);

        expect(hasBeenChecked).toBe(true);
    });
});