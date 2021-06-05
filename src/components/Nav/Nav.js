import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css }  from 'styled-components';

import iconContact from './images/icon-contact.png';
import iconMe from './images/icon-me.png';
import iconPortfolio from './images/icon-portfolio.png';

const Navigator = styled.nav`
    width: 125px;
    height: 125px;
`;

const IconCircle = styled.div`
    font-size: 0;
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #C4C4C4;
    position: absolute;
    z-index: 0;
    transition: ease all 0.8s;

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
    }

    ${props => props.hover && css` 
        &:hover {
            width: 100%;
            border-radius: 0;
            z-index: 1;
            transition: ease all 0.8s;

            a {
                position: absolute;
                right: 10px;
                color: black;
                font-size: 14px;
                transition: ease all 0.8s;
            }
        }
    `}

    ${props => props.default && css`
        background: #000000;
        right: 10px;
        bottom: 10px;
        z-index: 1;
        cursor: pointer;
        transition: ease all 0.5s;

        &::before {
            content: '';
            width: 13px;
            height: 2px;
            background: white;
            position: absolute;
            bottom: 24px;
            right: 16px;
            transition: ease all 0.8s;
        }

        &::after {
            content: '';
            width: 24px;
            height: 2px;
            background: white;
            position: absolute;
            bottom: 15px;
            right: 6px;
            transition: ease all 0.8s;
        }

        &:hover {
            transform: scale(1.2);
        }
    `}

    ${props => props.primary && css`
        top: 0;
        right: 10px;
        background-color: #F0CE9B;
    `}

    ${props => props.second && css`
        top: 38px;
        right: 40px;
        background-color: #9D81D9;
    `}

    ${props => props.third && css`
        top: 75px;
        right: 70px;
        background-color: #A6E092;
    `}
`;

const Nav = () => {
    const [buttonActive, setButtonActive] = useState(true);

    const activeClassOrigin = () => {
        setButtonActive(!buttonActive)
    }

    return (
        <Navigator data-active={buttonActive}>
            <IconCircle default onClick={activeClassOrigin} className="circleDefault"></IconCircle>
            <Navigator>
                <IconCircle hover primary className="circleButton">
                    <Link to="/About"><img src={iconMe} alt="About" />About</Link>
                </IconCircle >
                <IconCircle hover second className="circleButton">
                    <Link to="/Portfolio"><img src={iconPortfolio} alt="Portfolio" />Portfolio</Link>
                </IconCircle>
                <IconCircle hover third className="circleButton">
                    <Link to="/Contact"><img src={iconContact} alt="Contact"/>Contact</Link>
                </IconCircle>
            </Navigator>
        </Navigator>
    );
}

export default Nav