import React, { Component } from 'react';
import styled from 'styled-components';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Title = styled.h1`
    font-size: 48px;
    line-height: 59px;
    letter-spacing: 0.02em;
`

const Paragraph = styled.p`
    font-size: 24px;
    line-height: 28px;
    margin-top: 20px;
    font-family: 'Rubik', sans-serif;
`

class About extends Component {
    render() {
        return (
            <div className="eyes__main">
                <Header />
                
                <main>

                    <Title>ABOUT EYESWEB</Title>

                    <Paragraph>Prazer...
                    <br /> MEU NOME É <strong>DIEGO MARCELO</strong> e sou desenvolvedor front end e muito curioso...
                    <br />Atuo como desenvolvedor front-end, sou formado em administração de empresas e pós-graduado em engenharia de software.
                    <br />Estudo sempre e me atualizo com tecnologias que abordem conceitos voltados para uma melhor performasse e usabilidade.
                    <br />Desenvolver sites bem elaborados e organizados São a chave para um bom resultado.
                    <br />Aligidade é um conceito que deve ser visto como a mágica do negócio.</Paragraph>

                </main>

                <Footer />
            </div>
        );
    }
}

export default About