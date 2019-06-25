import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import styled from 'styled-components';

const BodyAbout = styled.div`
    display: flex;
    contain: ce;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    line-height: 38px;
`

class About extends Component {
    render() {
        return (
            <div className="eyes__main">
                <Header />
                
                <main>

                    <BodyAbout>
                        <p>Prazer...</p>
                        <p>MEU NOME É <strong>DIEGO MARCELO</strong> e sou desenvolvedor front end e muito curioso...</p>
                        <p>Atuo como desenvolvedor front-end, sou formado em administração de empresas e pós-graduado em engenharia de software.</p>
                        <p>Estudo sempre e me atualizo com tecnologias que abordem conceitos voltados para uma melhor performasse e usabilidade.</p> 
                        <p>Desenvolver sites bem elaborados e organizados São a chave para um bom resultado.</p>
                        <p>Aligidade é um conceito que deve ser visto como a mágica do negócio.</p>
                    </BodyAbout>

                </main>

                <Footer />
            </div>
        );
    }
}

export default About