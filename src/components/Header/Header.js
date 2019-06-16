import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderMain = styled.header`
    position: fixed;
    left: 15px;
    top: 20px;
`;

const ListLetters = styled.div`
    display: flex;
    width: 25px;
    flex-wrap: wrap;
    transition: ease-out all 1s;

    &:hover {
        width: 250px;
        transition: ease-in all 1.5s;
    }
`;

const Letters = styled.span`
    font-size: 24px;
    line-height: 30px;
    color: #000000;
`;

class Header extends Component {
    render() {
        return (
            <HeaderMain>
                <Link to="/">
                    <ListLetters>
                        <Letters>E</Letters>
                        <Letters>Y</Letters>
                        <Letters>E</Letters>
                        <Letters>S</Letters>
                        <Letters>W</Letters>
                        <Letters>E</Letters>
                        <Letters>B</Letters>
                    </ListLetters>
                </Link>
            </HeaderMain>
        );
    }
}

export default Header