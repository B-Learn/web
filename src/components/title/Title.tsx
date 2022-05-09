import React from "react";
import {TitleWrapper} from "./styled/TitleWrapper";

type TitleType = {
    title: string
}

export class Title extends React.Component<TitleType, any> {
    render() {
        return <TitleWrapper>{this.props.title}</TitleWrapper>
    }
}