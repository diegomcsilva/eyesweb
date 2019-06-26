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

const BgDesktopTag = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 30px;
    width: 100%;
    height: 100%;
    max-width: 850px;
    margin: 0 auto;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${bgDesktop});

    @media (max-width: 768px) {
        top: 25%;
    }
`;

const BgMobileTag = styled.div`
    position: absolute;
    right: 160px;
    top: 10px;
    width: 100%;
    height: 100%;
    max-width: 400px;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${bgMobile});

    @media (max-width: 768px) {
        right: 0;
        top: 60px;
    }
`;


class About extends Component {
    render() {
        return (
            <BgDinamic>
                <BgDesktopTag className="bgDesktop" />
                <BgMobileTag className="bgMobile" />
            </BgDinamic>
        );
    }
}

export default About