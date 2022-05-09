import React from "react";
import {ContainerWrapper} from "../container/styled/ContainerWrapper";
import {Indent} from "../indent/Indent";
import {Title} from "../title/Title";

export class Error404 extends React.Component<any, any> {
    render() {
        return <ContainerWrapper>
            <Indent/>
            <Title title="404"/>
            <Indent/>
        </ContainerWrapper>
    }
}