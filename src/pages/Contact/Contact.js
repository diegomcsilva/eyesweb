import React, { Component } from 'react';
import styled from 'styled-components';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Input from '../../components/Input/Input';

const Title = styled.h1`
    font-size: 48px;
    line-height: 59px;
    letter-spacing: 0.02em;
    margin-bottom: 20px;
`

const BodyForm = styled.div`
    font-size: 48px;
    line-height: 59px;
    letter-spacing: 0.02em;
`

const FieldTextarea = styled.textarea`
    width: 100%;
    height: 80px;
    border: 0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    font-size: 48px;
    line-height: 57px;
    color: #C4C4C4;
    text-indent: 45px;
    outline: none;
    margin-bottom: 20px;
`

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            titulo: '',
            nome: '',
            email: '',
            telefone: '',
            mensagem: ''
        };

        this.createMensage = this.createMensage.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let value = event.target.value;
        let item = event.target.name;

        switch (item) {
            case 'titulo':
                this.setState(
                    prevState => ({
                        titulo: value
                    })
                );
                break;
            case 'nome':
                this.setState(
                    prevState => ({
                        nome: value
                    })
                );
                break;
            case 'email':
                this.setState(
                    prevState => ({
                        email: value
                    })
                );
                break;
            case 'telefone':
                this.setState(
                    prevState => ({
                        telefone: value
                    })
                );
                break;
            case 'mensagem':
                this.setState(
                    prevState => ({
                        mensagem: value
                    })
                );
                break;
            default:
        }
    }

    createMensage() {
        console.log({
            "title": this.state.titulo,
            "mensage": this.state.mensagem,
            "email": this.state.email,
            "tel": this.state.telefone,
            "name": this.state.nome,
        })

        fetch('https://app-mensager.herokuapp.com/', {
            "async": true,
            "crossDomain": true,
            method: 'POST',
            headers : {
                "Content-Type": "application/x-www-form-urlencoded",
                "Cache-Control": "no-cache",
            },
            body: JSON.stringify({
                title: this.state.titulo,
                mensage: this.state.mensagem,
                email: this.state.email,
                tel: this.state.telefone,
                name: this.state.nome,
            })
        }).then((res) => res.json())
        .then((data) =>  console.log(data))
        .catch((err)=>console.log(err))
    }

    render() {
        return (
            <div className="eyes__main">
                <Header />
                
                <main>

                <Title>CONTACT US</Title>

                    <BodyForm>
                        <Input type={'text'}
                            title={'titulo'}
                            name={'titulo'}
                            required={'required'}
                            value={this.state.titulo}
                            placeholder={'Titulo'}
                            onChange={this.handleChange}
                        />
                        <Input type={'text'}
                            title={'Nome'}
                            name={'nome'}
                            required={'required'}
                            value={this.state.nome}
                            placeholder={'Nome'}
                            onChange={this.handleChange}
                        />
                        <Input type={'email'}
                            title={'email'}
                            name={'email'}
                            required={'required'}
                            value={this.state.email}
                            placeholder={'E-mail'}
                            onChange={this.handleChange}
                        />
                        <Input type={'tel'}
                            title={'Telefone'}
                            name={'telefone'}
                            required={'required'}
                            value={this.state.telefone}
                            placeholder={'Telefone'}
                            onChange={this.handleChange}
                        />
                        <FieldTextarea name="mensagem" id="mensage" placeholder="Mensagem" value={this.state.mensagem}  onChange={this.handleChange}></FieldTextarea>
                        <Input type={'submit'}
                            title={'Enviar'}
                            value={'Enviar'}
                            onClick={this.createMensage}
                        />
                    </BodyForm>
  
                </main>

                <Footer />
            </div>
        );
    }
}

export default Contact