import React from "react";
import {SubmitWrapper} from "./styled/SubmitWrapper";

type SubmitProp = {
    value: string
}

export class Submit extends React.Component<SubmitProp, any> {
    render() {
        return <SubmitWrapper type="submit" value={this.props.value}/>
    }
}