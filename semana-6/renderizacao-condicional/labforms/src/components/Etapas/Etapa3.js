import React from 'react';

export default class Etapa3 extends React.Component {

  render () {
    return (
        <div>
            <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
            
            <h2>5. Por que você não terminou um curso de graduação?</h2>
            <input />
            <h2>6. Você fez algum curso complementar?</h2>
            <select type="text">
            <option value="nenhum">Nenhum</option>
            <option value="tecnico">Curso ténico</option>
            <option value="ingles">Curso de inglês</option>
            </select>
        </div>
    );
  };
}