import React from "react";
import {InlineWrapper} from "./styled/InlineWrapper";

export class Inline extends React.Component<any, any> {
    render() {
        return <InlineWrapper>
            {this.props.children}
        </InlineWrapper>
    }
}