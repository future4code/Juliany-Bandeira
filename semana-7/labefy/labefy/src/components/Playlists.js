import axios from 'axios';
import React from 'react';
import styled from 'styled-components';

const headers = {
    headers: {
      Authorization: "juliany-bandeira-maryam"
    }
  }

  const PlaylistContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;

  `

  const Button = styled.button `
    border-radius: 5px;
    border: none;
  `

  const CardList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  width: 100%;
  `

  const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  width: 12%;

  @media (max-width: 1025px){
    width: 50%;
    }
  `

export default class Playlists extends React.Component {
  state={
    allPlaylists:[],
    tracks:[]
  }

 getAllPlaylists = () => {
   axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', headers)
   .then((response) =>{
     this.setState({allPlaylists: response.data.result.list})
   })
    .catch((error) => {
      alert(error.response.data.message)
    })
 }

 componentDidMount = () =>{
  this.getAllPlaylists()
 }

 deletePlaylist = (id) => {
   axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`, headers)
   .then((response) => {
      alert("Playlist excluída com sucesso!")
      this.getAllPlaylists()
   }).catch((error) => {
     alert(error.response.data.message)
   })
 }

  render (){
    const renderLists = () => {
      const listaMapeada = this.state.allPlaylists.map((nameList) =>{
        const playlistId = nameList.id
        const namePlaylist = (nameList.name).toUpperCase()
       return (
         <CardList>
          <p>{namePlaylist}</p>
          <Nav>
            <Button onClick={() => this.props.changePage("playlistdetail", playlistId, namePlaylist)}>Detalhes</Button>
            <Button onClick={() => this.deletePlaylist(playlistId)}>Excluir</Button>
          </Nav>
         </CardList>
       )
      })
      return listaMapeada
    } 

    return (
      <PlaylistContainer>
        <h2>Playlists</h2>
        {renderLists()}
      </PlaylistContainer>
    );
  }
}