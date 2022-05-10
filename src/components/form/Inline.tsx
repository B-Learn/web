import React from "react";
import {InlineWrapper} from "./styled/InlineWrapper";

interface InlineProps {
    children?: any
}

export function Inline(props: InlineProps): JSX.Element {
    return <InlineWrapper>
        {props.children}
    </InlineWrapper>
}