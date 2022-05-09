import React from "react";
import {FormWrapper} from "./styled/FormWrapper";

export class Form extends React.Component<any, any> {
    render() {
        return <FormWrapper>
            {this.props.children}
        </FormWrapper>;
    }
}