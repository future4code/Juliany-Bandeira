import React from 'react';
import styled from 'styled-components'

const Titulo2 = styled.h1`
  color: blueviolet;
  margin: 50px;
`

export default class Etapa2 extends React.Component {

  render () {
    return (
        <div>
            <Titulo2>ETAPA 2 - INFORMAÇÃO DO ENSINO SUPERIOR</Titulo2>
            
            <h2>5. Qual curso?</h2>
            <input />
            <h2>6. Qual a unidade de ensino?</h2>
            <input />
        </div>
    );
  };
}