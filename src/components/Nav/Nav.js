import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled, { css }  from 'styled-components';

const Navigator = styled.nav`
    width: 100px;
    height: 100px;
`;

const IconCircle = styled.div`
    font-size: 0;
    display: block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #C4C4C4;
    position: absolute;

    ${props => props.hover && css` 
        &:hover {
            width: 200px;
            margin-left: -150px;
            background: transparent;
            transition: width ease 1s, background ease 1s,  margin-left ease 1s;

            a {
                position: absolute;
                right: 0;
                top: 8px;
                color: black;
                font-size: 14px;
            }
        }
    `}

    ${props => props.default && css`
        background: #000000;
        right: 10px;
        bottom: 10px;
    `}

    ${props => props.primary && css`
        top: 0;
        right: 10px;
    `}

    ${props => props.second && css`
        bottom: 50px;
        left: 20px;
    `}

    ${props => props.third && css`
        bottom: 10px;
        left: 0;
    `}
`;


class Nav extends Component {
    render() {
        return (
            <Navigator>
                <IconCircle default></IconCircle>
                <IconCircle hover primary>
                    <Link to="/About">About</Link>
                </IconCircle >
                <IconCircle hover second>
                    <Link to="/Portfolio">Portfolio</Link>
                </IconCircle>
                <IconCircle hover third>
                    <Link to="/Contact">Contact</Link>
                </IconCircle>
            </Navigator>
        );
    }
}

export default Nav