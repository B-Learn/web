import React, {SyntheticEvent} from "react";
import {LoginPage} from "./styled/LoginPage";
import {ContainerWrapper} from "../container/styled/ContainerWrapper";
import {Form} from "../form/Form";
import {Inline} from "../form/Inline";
import {Input} from "../form/Input";
import {Submit} from "../form/Submit";
import {SectionWrapper} from "../section/styled/SectionWrapper";
import {Indent} from "../indent/Indent";
import {Title} from "../title/Title";

export function Login(): JSX.Element {
    function onSubmit(event: SyntheticEvent) {
        event.preventDefault()
        alert('clicked')
    }

    return <LoginPage>
        <ContainerWrapper width="50">
            <Indent/>
            <Title title="Sign in"/>
            <Indent/>
            <SectionWrapper>
                <Form onSubmit={onSubmit}>
                    <Inline>
                        <Input placeholder="Login" type="email" labelName="Login" id="login"></Input>
                        <Input placeholder="******" type="password" labelName="Password" id="password"></Input>
                    </Inline>
                    <Inline>
                        <Submit value="Sign in"/>
                    </Inline>
                </Form>
            </SectionWrapper>
        </ContainerWrapper>
    </LoginPage>
}