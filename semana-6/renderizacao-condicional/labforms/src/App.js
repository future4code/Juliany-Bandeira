import React from 'react';
import Etapa1 from './components/Etapas/Etapa1';
import Etapa2 from './components/Etapas/Etapa2';
import Etapa3 from './components/Etapas/Etapa3';
import Final from './components/Etapas/Final';
import styled from 'styled-components'

const LayoutGeral = styled.div`
  text-align: center;
`

const Botao = styled.button`
  padding: 5px;
  margin: 50px;
  border-radius: 5px;
  cursor: pointer;
`


export default class App extends React.Component {
  state= {
    etapa: 1,
  }

  renderizaEtapa = () => {
    switch(this.state.etapa) {
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <Final />
    }
  }

  irParaProximaEtapa = () => {
    const etapaAtual = Number(this.state.etapa)  
    const proximaEtapa = etapaAtual + 1
    this.setState({etapa: proximaEtapa})
  }

  botao = () => {
    if(this.state.etapa<4){
      return <Botao onClick={this.irParaProximaEtapa}>Próxima etapa</Botao>
    }  
  }

  render () {
    return (
      <LayoutGeral>
        {this.renderizaEtapa()}
        {this.botao()}
      </LayoutGeral>
    );
  }
}
