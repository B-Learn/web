import React from "react";
import {TitleWrapper} from "./styled/TitleWrapper";

interface TitleProps {
    title: string
}

export function Title(props: TitleProps): JSX.Element {
    return <TitleWrapper>{props.title}</TitleWrapper>
}