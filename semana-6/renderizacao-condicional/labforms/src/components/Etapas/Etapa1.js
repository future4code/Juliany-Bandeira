import React from 'react';


export default class Etapa1 extends React.Component {

  render () {
    return (
        <div>
            <h1>ETAPA 1 - DADOS GERAIS</h1>

            <h2>1. Qual o seu nome?</h2>
            <input />
            <h2>2. Qual sua idade?</h2>
            <input />
            <h2>3. Qual seu email?</h2>
            <input />
            <h2>4. Qual a sua escolaridade?</h2>
            <select type="text">
                <option value="medio-incompleto">Ensino médio incompleto</option>
                <option value="medio-completo">Ensino médio completo</option>
                <option value="superior-incompleto">Ensino superior incompleto</option>
                <option value="superior-completo">Ensino superior completo</option>
            </select>
      </div>
    );
  };
}