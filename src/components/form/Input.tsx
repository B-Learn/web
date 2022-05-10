import React from "react";
import {InputWrapper} from "./styled/InputWrapper";

interface InputProps {
    labelName: string,
    id: string,
    type: string,
    placeholder?: string
}
export function Input(props: InputProps): JSX.Element {
    return <InputWrapper>
        <label htmlFor={props.id}>{props.labelName}</label>
        <input placeholder={props.placeholder} type={props.type} id={props.id}/>
    </InputWrapper>
}
