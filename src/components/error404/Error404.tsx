import React from "react";
import {ContainerWrapper} from "../container/styled/ContainerWrapper";
import {Indent} from "../indent/Indent";
import {Title} from "../title/Title";

export function Error404() : JSX.Element {
    return <ContainerWrapper>
        <Indent/>
        <Title title="404"/>
        <Indent/>
    </ContainerWrapper>
}