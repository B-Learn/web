import React from 'react';
import {Footer} from "./components/footer/Footer";
import {GlobalStyles} from "./GlobalStyles";
import {Home} from "./components/home/Home";
import {Error404} from "./components/error404/Error404";
import {Login} from "./components/login/Login";
import {Routes} from "react-router";
import {Route} from "react-router-dom";
import {Header} from "./components/header/Header";

export class App extends React.Component<any, any> {
    render() {
        return <React.Fragment>
            <GlobalStyles/>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="*" element={<Error404/>} />
            </Routes>
            <Footer/>
        </React.Fragment>
    }
}