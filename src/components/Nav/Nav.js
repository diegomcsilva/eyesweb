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
    z-index: 0;
    transition: ease all 0.8s;

    ${props => props.hover && css` 
        &:hover {
            width: 200px;
            margin-left: -150px;
            background: transparent;
            transition: ease all 0.8s;

            a {
                position: absolute;
                right: 0;
                top: 8px;
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
            bottom: 18px;
            right: 8px;
            transition: ease all 0.8s;
        }

        &::after {
            content: '';
            width: 18px;
            height: 2px;
            background: white;
            position: absolute;
            bottom: 10px;
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
    `}

    ${props => props.second && css`
        top: 20px;
        right: 50px;
    `}

    ${props => props.third && css`
        top: 60px;
        right: 70px;
    `}
`;


class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            originClass: 'originActive',
            originClassDefault: ''
        }

        this.activeClassOrigin = this.activeClassOrigin.bind(this);
    }
    
    activeClassOrigin() {
        this.state.originClass === 'origenDeactive' ? this.setState({ originClass: 'originActive', originClassDefault: '' }) : this.setState({ originClass: 'origenDeactive', originClassDefault: 'originClassDefault' })
    }

    render() {
        return (
            <Navigator>
                <IconCircle default onClick={this.activeClassOrigin} className={this.state.originClassDefault}></IconCircle>
                <IconCircle hover primary className={this.state.originClass}>
                    <Link to="/About">About</Link>
                </IconCircle >
                <IconCircle hover second className={this.state.originClass}>
                    <Link to="/Portfolio">Portfolio</Link>
                </IconCircle>
                <IconCircle hover third className={this.state.originClass}>
                    <Link to="/Contact">Contact</Link>
                </IconCircle>
            </Navigator>
        );
    }
}

export default Nav