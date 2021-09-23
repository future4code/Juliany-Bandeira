import React from 'react';
import TelaCadastro from './components/TelaCadastro';
import TelaListaUsuarios from './components/TelaListaUsuarios';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 0;
    padding: 0;
    background-color: aliceblue;
  }
`

const Header = styled.h1`
  text-align: center;
  color: #66B2FF;
  padding: 50px;
  margin: 0;
  background-color: gray;
  width: 100vw;
`
const Footer = styled.div`
  text-align: center;
  font-size: large;
  color: pink;
  background-color: gray;
  bottom: 0;
  width: 100vw;
  padding: 10px;
  position: fixed;
  bottom: 0;
  left: 0;
`

export default class App extends React.Component {
  state = {
    currentScreen: "registration",
  };

  chooseScreen = () => {
    switch (this.state.currentScreen){
      case "registration":
        return <TelaCadastro changeList={this.changeList}/>
      case "list":
        return <TelaListaUsuarios changeRegistration={this.changeRegistration}/>
      default:
        return <div>ERRO! Página não encontrada</div>
    }
  }

  changeRegistration = () => {
    this.setState({currentScreen: "registration"})
  }

  changeList = () => {
    this.setState({currentScreen: "list"})
  }

  render () {
    return (
        <div>
        <GlobalStyle/>
        <Header>LABENUSERS 🚀</Header>
        {this.chooseScreen()}
        <Footer>Feito com ♡ por Juliany</Footer>
      </div>
    );
  }
}
