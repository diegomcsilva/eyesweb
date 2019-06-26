import React, { Component } from 'react';
import styled from 'styled-components';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import imageScrollMob from './image/image-scroll-1.png';
import imageScrollDesk from './image/image-scroll-1-desk.png';
import imageScrollMob2 from './image/image-scroll-2.png';
import imageScrollDesk2 from './image/image-scroll-2-desk.png';
import imageScrollMob3 from './image/image-scroll-3.png';
import imageScrollDesk3 from './image/image-scroll-3-desk.png';
import imageScrollMob4 from './image/image-scroll-4.png';
import imageScrollDesk4 from './image/image-scroll-4-desk.png';

import bgFrameMobile from './image/frame-mobile.png';
import bgFrameDesktop from './image/bgDesktop.png';

const link = 'https://www.kenner.com.br/';

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

    @media (max-width: 768px) {
        max-height: 360px;
        padding-top: 31px;
        padding-bottom: 18px;
        background-size: 100% 315px;
    }
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

    @media (max-width: 768px) {
        max-width: calc(100% - 16px);
        margin-left: 8px;
        max-height: 265px;
    }
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

const PrevItem = styled.div`
    font-family: 'Rubik', sans-serif;
    font-weight: bold;
    position: fixed;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    top: 50vh;
    left: 30px;
    font-size: 12px;
    background: #2d797f;
    font-size: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: ease all 0.5s;

    &::before {
        content: attr(title);
    }

    &:hover {
        font-size: 18px;
    }
`;

const NextItem = styled.div`
    font-family: 'Rubik', sans-serif;
    font-weight: bold;
    position: fixed;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    top: 50vh;
    right: 30px;
    font-size: 12px;
    position: fixed;
    background: #ff7333;
    font-size: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: ease all 0.5s;

    &::before {
        content: attr(title);
    }

    &:hover {
        font-size: 18px;
    }
`;

class Portfolio extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cases : [
                {imageMob: imageScrollMob, imageDesk: imageScrollDesk, link: 'https://www.kenner.com.br/'},
                {imageMob: imageScrollMob2, imageDesk: imageScrollDesk2, link: 'https://www.parceiropet.com.br/'},
                {imageMob: imageScrollMob3, imageDesk: imageScrollDesk3, link: 'http://www.pixelm2.com.br/'},
                {imageMob: imageScrollMob4, imageDesk: imageScrollDesk4, link: 'https://www.mahogany.com.br/'}
            ],
            caseDefaultMob : imageScrollMob,
            caseDefaultDesk : imageScrollDesk,
            linkDefault: link,
            index : 0,
        }

        this.mouseEventIndexPrev = this.mouseEventIndexPrev.bind(this);
        this.mouseEventIndexNext = this.mouseEventIndexNext.bind(this);
    }
    
    mouseEventIndexPrev() {
        if (this.state.index > 0) {
            this.setState({ 
                index: this.state.index - 1, 
                caseDefaultMob: this.state.cases[this.state.index - 1].imageMob,
                caseDefaultDesk: this.state.cases[this.state.index - 1].imageDesk 
            });
        } 
    }

    mouseEventIndexNext() {
        console.log(this.state.index, (this.state.cases.length - 1))

        if (this.state.index < (this.state.cases.length - 1)) {
            this.setState({ 
                index: this.state.index + 1, 

                caseDefaultMob: this.state.cases[this.state.index + 1].imageMob,
                caseDefaultDesk: this.state.cases[this.state.index + 1].imageDesk 
            });
        }

        console.log(this.state.index, (this.state.cases.length - 1))

    }
    
    render() {
        
        return (

            <div className="eyes__main">
                <Header />
                
                <MainScroll>
                    
                    <MobileFrame>
                        <DivScroll>
                            <a href={this.state.linkDefault} target="_blank">
                                <ItemFrame src={this.state.caseDefaultMob} />
                            </a>
                        </DivScroll>
                    </MobileFrame>

                    <DeskFrame>
                        <DivScrollDesktop>
                            <a href={this.state.linkDefault} target="_blank">
                                <ItemFrame src={this.state.caseDefaultDesk} />
                            </a>
                        </DivScrollDesktop>
                    </DeskFrame>

                    <PrevItem onClick={this.mouseEventIndexPrev} data-index={this.state.index} title="Prev"/>
                    <NextItem onClick={this.mouseEventIndexNext} data-index={this.state.index} title="Next"/>

                </MainScroll>

                <Footer />
            </div>
        );
    }
}

export default Portfolio