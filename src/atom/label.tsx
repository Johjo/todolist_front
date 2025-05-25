import React from "react";

export function Label(props: { value: string, for?: string }) {
    if (props.for) {
        return <label htmlFor={props.for}>{props.value}</label>;
    }
    return <label>{props.value}</label>;
}