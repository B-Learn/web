import React from "react";
import {FooterWrapper} from "./styled/FooterWrapper";

export function Footer(): JSX.Element {
    return <FooterWrapper>
        <div className="wrap">
            <div className="content">
                <div className="footer_section">B-lear copyright &copy;</div>
                <div className="footer_section">Platform links</div>
                <div className="footer_section">Social medias links</div>
            </div>
        </div>
    </FooterWrapper>
}