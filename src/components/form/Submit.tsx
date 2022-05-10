import React from "react";
import {SubmitWrapper} from "./styled/SubmitWrapper";

interface SubmitProps {
    value: string
}

export function Submit(props: SubmitProps): JSX.Element {
    return <SubmitWrapper type="submit" value={props.value}/>
}