import React from "react";
import {HomePage} from "./styled/HomePage";
import {ContainerWrapper} from "../container/styled/ContainerWrapper";
import {Title} from "../title/Title";
import {Indent} from "../indent/Indent";

export class Home extends React.Component<any, any> {
    render() {
        return <HomePage>
            <ContainerWrapper>
                <Indent/>
                <Title title="About platform"/>
                <Indent/>
            </ContainerWrapper>
        </HomePage>
    }
}