import React from 'react';
import Playlists from './Playlists';
import PlaylistDetail from './PlaylistDetail'

export default class PagePlaylists extends React.Component {
  state={
    currentPage:"playlists",
    playlistId: "",
    namePlaylist: ""
  }

  changePage = (currentPage, playlistId, namePlaylist) =>{
    this.setState({
      currentPage: currentPage,
      playlistId: playlistId,
      namePlaylist: namePlaylist
    })
  }

  render (){
    const renderPage = () => {
    if (this.state.currentPage === 'playlists'){
      return <Playlists 
      changePage={this.changePage}/>
    }else if (this.state.currentPage === 'playlistdetail'){
      return <PlaylistDetail 
      key={this.state.playlistId}
      changePage={this.changePage}
      playlistId= {this.state.playlistId}
      namePlaylist = {this.state.namePlaylist}
      />
    }
  }
  
    return (
      <div>
        {renderPage()}
      </div>
    );
  }
}