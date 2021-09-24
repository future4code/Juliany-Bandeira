import axios from 'axios';
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const headers = {
    headers: {
      Authorization: "juliany-bandeira-maryam"
    }
  }

export default class Playlists extends React.Component {
  state={
    playlist:"",
    allPlaylists:[],
    tracks:[]
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
        console.log(response.data)
        console.log(this.state.playlist)
      })
      .catch((error) => {
        console.log(error.response.data.message)
      })
  }

 getAllPlaylists = () => {
   axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', headers)
   .then((response) =>{
     this.setState({allPlaylists: response.data.result.list})
    console.log(response.data)
   })
    .catch((error) => {
      console.log(error.response.data.message)
    })
 }

 componentDidMount = () =>{
  this.getAllPlaylists()
 }

//  componentDidUpdate = () =>{
//   this.getAllPlaylists()
//  }

 renderLists = () => {
   const listaMapeada = this.state.allPlaylists.map((nameList) =>{
    return (
      <div>
        <p>{nameList.name}</p>
        <button onClick={() => this.getPlaylistTracks(nameList.id)}>Detalhes</button>
        <button onClick={() => this.deletePlaylist(nameList.id)}>Excluir</button>
      </div>
    )
   })
   return listaMapeada
 } 

 deletePlaylist = (id) => {
   axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`, headers)
   .then((response) => {
      alert("Playlist excluída com sucesso!")
   }).catch((error) => {
     alert(error.response.data.message)
   })
 }

 getPlaylistTracks = (id) => {
   
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, headers)
    .then((response)=> {
        this.setState({tracks: response.data.result.tracks})
        console.log(this.state.tracks)
    })
    .catch((error) =>{
        alert((error.response.data.message))
    })
 }

//  renderTracks = (tracks) => {
//      const listaMapeada = this.state.tracks.map((track) => {
//          return
//             <p>{track.name}</p>
//      })
//  }

  render (){
    const MusicList = this.state.tracks.map((track) => {
        const id = track.id
            return(
                <div key={id}>
                    <iframe src={this.state.track.name} width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                    {/* {track.name} - 
                    {track.artist} */}
                </div>
            )
    })

    return (
      <div>
        <input placeholder="Nome da lista" value={this.state.playlist} onChange={this.changePlaylist}/>
        <button onClick={this.createPlaylist}>Criar playlist</button>
        {this.renderLists()}
        {MusicList}
      </div>
    );
  }
}