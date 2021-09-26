import axios from 'axios';
import React from 'react';
import styled from 'styled-components';

const headers = {
    headers: {
      Authorization: "juliany-bandeira-maryam"
    }
}

const CreateContainer = styled.div`
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding-top: 50px;

    button{
      border-radius: 16px;
      padding: 6px;
    }

    input{
      width: 200px;
      height: 30px;
      border-radius: 5px;
    }
    
`

export default class PlaylistsCreation extends React.Component {
    state={
        playlist:""
    }

  changePlaylist = (event) => {
    this.setState({playlist:event.target.value})
  }

  createPlaylist = () => {
    const body = {
      name: this.state.playlist,
      }

      axios
      .post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', body, headers)
      .then((response) =>{
        alert("Playlist criada com sucesso!")
        this.setState({playlist:""})
      })
      .catch((error) => {
        alert(error.response.data.message)
      })
  }

  render (){
 
    return (
      <CreateContainer>
        <h2>Criar Playlist</h2>
        <input placeholder="Nome da lista" value={this.state.playlist} onChange={this.changePlaylist}/>
        <button type="submit" onClick={this.createPlaylist}>Cadastrar Playlist</button>
      </CreateContainer>
    );
  }
}