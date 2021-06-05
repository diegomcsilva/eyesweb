import React, { Component } from 'react';
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


class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            originClass: 'origenDeactive',
            originClassDefault: 'originClassDefault'
        }

        this.activeClassOrigin = this.activeClassOrigin.bind(this);
    }
    
    activeClassOrigin() {
        this.state.originClass === 'originActive' ? this.setState({ originClass: 'origenDeactive', originClassDefault: '' }) : this.setState({ originClass: 'originActive', originClassDefault: 'originClassDefault' })
    }

    render() {
        return (
            <Navigator>
                <IconCircle default onClick={this.activeClassOrigin} className={this.state.originClassDefault}></IconCircle>
                <IconCircle hover primary className={this.state.originClass}>
                    <Link to="/About"><img src={iconMe} />About</Link>
                </IconCircle >
                <IconCircle hover second className={this.state.originClass}>
                    <Link to="/Portfolio"><img src={iconPortfolio} />Portfolio</Link>
                </IconCircle>
                <IconCircle hover third className={this.state.originClass}>
                    <Link to="/Contact"><img src={iconContact} />Contact</Link>
                </IconCircle>
            </Navigator>
        );
    }
}

export default Nav