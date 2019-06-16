import React, { Component } from 'react';
import styled from 'styled-components';

import bgDesktop from './image/bgDesktop.png';
import bgMobile from './image/bgMobile.png';

const BgDinamic = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 80%;
    margin: 0 auto;
`;

const BgDesktopTag = styled.img`
    position: absolute;
    left: 0;
    right: 0;
    top: 30px;
    width: 100%;
    max-width: 850px;
    margin: 0 auto;
`;

const BgMobileTag = styled.img`
    position: absolute;
    right: 160px;
    top: 10px;
    width: 100%;
    max-width: 400px;
`;


class About extends Component {
    render() {
        return (
            <BgDinamic>
                <BgDesktopTag src={bgDesktop} alt="bgDesktop" />
                <BgMobileTag src={bgMobile} alt="bgMobile" />
            </BgDinamic>
        );
    }
}

export default About