import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

export default class App extends React.Component {
  state = {
    ids:[1,2,3,4,5,6,7],
    id: '',
    inputId: 0,
    pokemon: {},
    picture:''
  }

  changeId = (event) => {
    this.setState({id: event.target.value})
    console.log(this.state.id)
  } 

  getEvolutions = (id) => {
    axios 
    .get(`https://pokeapi.co/api/v2/evolution-chain/${id}/`)
    .then((response) => {
      this.setState({pokemon: response.data})
    console.log({pokemon: response})
    })
    .catch ((error) => {
      alert(error.response)
    })
    
  }

  render(){

    const id = this.state.ids.map((id) => {
      return (
      <option key={id} value={id}>{id}</option>)
    })

    return (
      <div>
        <h1>Pokevolution</h1>
        <p>Digite um número de 0 a 200 e veja o Pokemon sorteado e sua evolução</p>
        <select value={this.state.id} onChange={this.changeId}>
          <option>Selecione um pokemon</option>
        {id}
        </select>
        {/* <input type="number" value={this.state.inputId} onChange={this.changeId} placeholder="Número escolhido"/> */}
        <button onClick={()=>this.getEvolutions(id)}>Conhecer evolução</button>
      </div>
    );
  }
}