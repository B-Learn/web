import React, {SyntheticEvent} from "react";
import {FormWrapper} from "./styled/FormWrapper";

interface FormProps {
    onSubmit: (event: SyntheticEvent) => void
    children?: React.ReactNode
}

export function Form(props: FormProps): JSX.Element {
    return <FormWrapper onSubmit={props.onSubmit}>
        {props.children}
    </FormWrapper>
}