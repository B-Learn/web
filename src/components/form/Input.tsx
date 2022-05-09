import React from "react";
import {InputWrapper} from "./styled/InputWrapper";

type InputProp = {
    labelName: string,
    id: string,
    type: string,
    placeholder?: string
}
export class Input extends React.Component<InputProp, any> {
    render() {
        return <React.Fragment>
            <InputWrapper>
                <label htmlFor={this.props.id}>{this.props.labelName}</label>
                <input placeholder={this.props.placeholder} type={this.props.type} id={this.props.id}/>
            </InputWrapper>
        </React.Fragment>
    }
}