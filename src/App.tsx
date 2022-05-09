import React from 'react';
import {Footer} from "./components/footer/Footer";
import {GlobalStyles} from "./GlobalStyles";
import {Header} from "./components/header/Header";

export class App extends React.Component<any, any> {
    render() {
        return <React.Fragment>
            <GlobalStyles/>
            <Header/>
            <p>content</p>
            <Footer/>
        </React.Fragment>
    }
}