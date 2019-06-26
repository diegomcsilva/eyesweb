import React, { Component } from 'react';
import styled from 'styled-components';

const TitleContent = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 80%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 1;
`;

const TitleH1 = styled.h1`
    font-size: 144px;
    line-height: 178px;
    letter-spacing: 0.02em;
    color: #000000;

    @media (max-width: 768px) {
        font-size: 45px;
    }
`;

const TitleSub = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
    font-family: 'Rubik', sans-serif;
`;

class Title extends Component {
    render() {
        return (
            <TitleContent>
                <TitleH1>EYESWEB</TitleH1>
                <TitleSub>Desenvolvimento web</TitleSub>
            </TitleContent>
        );
    }
}

export default Title