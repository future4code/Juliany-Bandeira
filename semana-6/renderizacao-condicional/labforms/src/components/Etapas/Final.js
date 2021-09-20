import React from 'react';
import styled from 'styled-components'

const TituloFinal = styled.h1`
  color: red;
  margin: 50px
`

const Agradecimento = styled.h2`
  color: coral
`

export default class Final extends React.Component {

  render () {
    return (
        <div>
            <TituloFinal>O FORMULÁRIO ACABOU</TituloFinal>
            
            <Agradecimento>Muito obrigado por participar! Entraremos em contato!</Agradecimento>
        </div>
    );
  };
}