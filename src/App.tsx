import React from 'react';
import {Footer} from "./components/footer/Footer";
import {GlobalStyles} from "./GlobalStyles";
import {Header} from "./components/header/Header";
import {Home} from "./components/home/Home";
import {Routes, Route} from "react-router-dom";
import {Error404} from "./components/error404/Error404";

export class App extends React.Component<any, any> {
    render() {
        return <React.Fragment>
            <GlobalStyles/>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
            <Footer/>
        </React.Fragment>
    }
}