import React from "react";
import {HomePage} from "./styled/HomePage";
import {ContainerWrapper} from "../container/styled/ContainerWrapper";
import {Title} from "../title/Title";
import {Indent} from "../indent/Indent";

export function Home(): JSX.Element {
    return <HomePage>
        <ContainerWrapper>
            <Indent/>
            <Title title="About platform"/>
            <Indent/>
        </ContainerWrapper>
    </HomePage>
}