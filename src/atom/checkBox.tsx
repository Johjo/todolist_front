import {useState} from "react";
import React from "react";

interface CheckBoxProps {
    onChange: (isChecked: boolean) => void
}

export function CheckBox({onChange}: CheckBoxProps) {
    const [checked, setChecked] = useState<boolean>(false);
    return <input type="checkbox" checked={checked} onChange={(e) => {
        setChecked(e.target.checked)
        onChange(e.target.checked);
    }}/>;
}

