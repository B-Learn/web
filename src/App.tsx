import React from 'react';
import {Footer} from "./components/footer/Footer";
import {GlobalStyles} from "./GlobalStyles";
import {Header} from "./components/header/Header";
import {Home} from "./components/home/Home";

export class App extends React.Component<any, any> {
    render() {
        return <React.Fragment>
            <GlobalStyles/>
            <Header/>
            <Home/>
            <Footer/>
        </React.Fragment>
    }
}