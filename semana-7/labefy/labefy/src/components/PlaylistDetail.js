import axios from 'axios';
import React from 'react';
import styled from 'styled-components';

const headers = {
    headers: {
      Authorization: "juliany-bandeira-maryam"
    }
  }

  const Button = styled.button `
  border-radius: 5px;
  border: none;
`

const TrackCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 50px;
    height: 200px;
    justify-content: space-around;
`

const NewTrack = styled.form`
    width: 100vw;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-bottom: 50px;
    
    div{
        display: flex;
        flex-direction: column;
    }

    input{
        border-radius: 4px;
        width: 200px;
        height: 25px;
    }

    button{
        border-radius: 10px;
    }

    @media (max-width: 1025px){
        flex-direction: column;
        height: 200px;
    }
`

const BotaoVoltar = styled.button`
    margin: 20px;
    padding-top: 5px;
    border-radius: 8px;
`

const NameArtist = styled.div`
    margin: 10px;
`

const TituloPlaylis = styled.h2`
    text-align: center;
`

export default class Playlists extends React.Component {
  state={
    tracks:[],
    namePlaylist: "",
    trackName: "",
    artist: "",
    url: ""
  }

 
  getPlaylistTracks = () => {
   
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}/tracks`, headers)
    .then((response)=> {
        this.setState({tracks: response.data.result.tracks})
        this.setState({namePlaylist: this.props.namePlaylist})
        this.getPlaylistTracks()
        })
    .catch((error) =>{
        alert((error.response.data.message))
    })
 }

 removeTrackFromPlaylist = (id) => {
    axios
    .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}/tracks/${id}`, headers)
    .then((response) => {
        alert("Música excluída com sucesso")
    }).catch((error) => {
        alert((error.response.data.message))
    })
 }

    componentDidMount = () =>{
        this.getPlaylistTracks()
    }

    changeInputValues = (event) =>{
        this.setState({[event.target.name]: event.target.value})
    }

    addTrackToPlaylist = (event) => {
        event.preventDefault()

        const body = {
            name: this.state.trackName,
            artist: this.state.artist,
            url: this.state.url
        }
        axios
        .post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}/tracks`, body, headers)
        .then((response) =>{
            alert("Música incluída com sucesso")
            this.getPlaylistTracks()
            this.setState({trackName: "", artist: "", url: ""})
        })
        .catch((error) =>{
            alert((error.response.data.message))
        })
    }


  render (){
    const MusicList = this.state.tracks.map((track) => {
            const id = track.id
            return(
                <TrackCard>
                    <div key={id}>
                        <h3>{track.name}</h3>
                        <NameArtist>{track.artist}</NameArtist> 
                        <Button onClick={() => this.removeTrackFromPlaylist(id)}>Excluir</Button>
                    </div>
                    <audio controls="controls">
                        <source src={track.url} type="audio/ogg" />
                    </audio>
                </TrackCard>
            )
    })

    return (
      <div>
        <BotaoVoltar onClick={()=> this.props.changePage("playlists", "")}>Voltar</BotaoVoltar>
        <NewTrack onSubmit={this.addTrackToPlaylist}>
            <div>
                <label>Nome da Música</label>
                <input 
                    placeholder="Nome da Música"
                    name="trackName"
                    value={this.state.trackName}
                    onChange={this.changeInputValues}
                />
            </div> 
            <div>
                <label>Artista</label>
                <input 
                    placeholder="Nome do Artista"
                    name="artist"
                    value={this.state.artist}
                    onChange={this.changeInputValues}
                />
            </div> 
            <div>
                <label>URL da música</label>
                <input 
                    placeholder="URL da música"
                    name="url"
                    value={this.state.url}
                    onChange={this.changeInputValues}
                />
            </div> 
            <button type="submit">Adicionar a Playlist</button>
        </NewTrack>
        <TituloPlaylis>{this.state.namePlaylist}</TituloPlaylis>
        {MusicList}      
        </div>
    );
  }
}