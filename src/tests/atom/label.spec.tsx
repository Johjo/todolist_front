import {render} from "@testing-library/react";
import React from "react";
import {Label} from "@/atom/label";

describe('label', () => {
    it('should render label', () => {
        const {getByText} = render(<Label value={"hello world"}/>);
        getByText('hello world')
    })

    it('should render label for an input', () => {
        const {getByText} = render(<Label value={"hello world"} for={"test"}/>);
        const label = getByText('hello world')
        expect(label.getAttribute('for')).toBe('test');
     })
});
