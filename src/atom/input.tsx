import {useState} from "react";

interface InputProps {
    value?: string
}

export function Input({value: initialValue}: InputProps) {
    const [value, setValue] = useState(initialValue);
    return <input type="text" value={value} onChange={(e) => {
        setValue(e.target.value);
    }}/>;
}