import React, { Component } from 'react';
import styled from 'styled-components';

import Nav from '../Nav/Nav'

const NavFooter = styled.footer`
    position: fixed;
    right: 0;
    bottom: 0;
`;

class Footer extends Component {
    render() {
        return (
            <NavFooter>
                <Nav />
            </NavFooter>
        );
    }
}

export default Footer