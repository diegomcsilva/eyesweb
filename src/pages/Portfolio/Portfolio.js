import React, { Component } from 'react';

import styled from 'styled-components';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import imageScrollMob from './image/image-scroll-1.png';
import imageScrollDesk from './image/image-scroll-1-desk.png';

import bgFrameMobile from './image/frame-mobile.png';
import bgFrameDesktop from './image/bgDesktop.png';

const MobileFrame = styled.div`
    max-width: 208px;
    max-height: 411px;
    padding-top: 57px;
    padding-bottom: 80px;
    overflow: hidden;    
    background-size: 100% 458px;
    background-repeat: no-repeat;
    background-image: url(${bgFrameMobile});
`;

const DeskFrame = styled.div`
    max-width: 650px;
    max-height: 412px;
    padding-top: 42px;
    padding-bottom: 24px;
    overflow: hidden;
    background-size: 100% 422px;
    background-repeat: no-repeat;
    background-image: url(${bgFrameDesktop});
`;

const DivScroll = styled.div`
    max-width: calc(100% - 27px);
    overflow: auto;
    margin-left: 14px;
    position: relative;
    max-height: 340px;
`;

const DivScrollDesktop = styled.div`
    max-width: calc(100% - 30px);
    overflow: auto;
    margin-left: 15px;
    position: relative;
    max-height: 417px;
`;

const MainScroll = styled.main`
    display: flex;
    justify-content: space-around;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

const ItemFrame = styled.img`
    width: 100%;
`;

const NextItem = styled.div`
    position: fixed;
    top: 0;
    width: 25px;
    height: 100vh;
    background: #2d797f;
    right: 0;
    display: block;
`;

class Portfolio extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cases : []
        }
    }

    render() {
        return (
            <div className="eyes__main">
                <Header />
                
                <MainScroll>
                    
                    <MobileFrame>
                        <DivScroll>
                            <ItemFrame src={imageScrollMob} />
                        </DivScroll>
                    </MobileFrame>

                    <DeskFrame>
                        <DivScrollDesktop>
                            <ItemFrame src={imageScrollDesk} />
                        </DivScrollDesktop>
                    </DeskFrame>

                    <NextItem/>

                </MainScroll>

                <Footer />
            </div>
        );
    }
}

export default Portfolio