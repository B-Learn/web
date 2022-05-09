import React from "react";
import {HeaderWrapper} from "./styled/HeaderWrapper";

export class Header extends React.Component<{}, {}> {
    render() {
        return <HeaderWrapper>
            <div className="wrap">
                <div className="content">
                    <div className="logo">
                        <h2><a href="#">B-Learn</a></h2>
                    </div>
                    <div className="search">
                        <div className="search_content">
                            <div className="search_input_wrap">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
                                <input type="text" placeholder="Search article..." aria-label="Search" className="css-16pntcr"/>
                            </div>
                        </div>
                    </div>
                    <div className="menu">
                        <div className="menu_content">
                            <div className="links">
                                <a href="#">Login</a>
                                <a href="#">Register</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </HeaderWrapper>
    }
}