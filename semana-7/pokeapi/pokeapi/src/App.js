import React from "react";
import axios from "axios";

export default class App extends React.Component {
  state = {
    idPoke: 0,
    pokemonName: [],
    urlpoke:'',
    evolucaoName: [],
    picture: ""
  };

  changeId = (event) => {
    this.setState({ idPoke: Number(event.target.value) });
  };

  getEvolutions = async () => {
    const id = this.state.idPoke;
    console.log({ id });

    const response = await axios.get(
      `https://pokeapi.co/api/v2/evolution-chain/${id}/`
    );
    this.setState({ pokemonName: response.data.chain.species.name, urlpoke:response.data.chain.species.url, evolucaoName:response.data.chain.evolves_to});
    console.log({urlpoke:response.data});


      const url = this.state.urlpoke
      const res = await axios.get (`${url}`);
      console.log("Array", res)

  };

  // getPokemonPicture = async (event) => {
  //   console.log(event.target.value);
  //   const url = this.state.urlpoke

  //   const response = await axios.get (`${url}`);
  //   console.log("Array", response.data)
    // this.setState({picture: response.data.sprites.front_default})
  //} 

  render() {
    return (
      <div>
        <h1>Pokevolution</h1>
        <p>Digite um número de 0 a 200 e veja o Pokemon sorteado e sua evolução</p>
        <input
          value={this.state.idPoke}
          onChange={this.changeId}
          placeholder="Número escolhido"/>
        <button onClick={this.getEvolutions}>Conhecer evolução</button>
        <div>
          {this.state.pokemonName}
        </div>
      </div>
    );
  }
}