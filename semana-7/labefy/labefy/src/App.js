import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import PlaylistsCreation from './components/PlaylistCreation';
import PagePlaylists from './components/PagePlaylists'

const GlobalStyle = createGlobalStyle`
body{
  margin: 0;
  padding: 0;
  background-color: #6E596E;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: white;
}`

const Header = styled.h1`
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #5C025C;
  margin: 0;
  background-color: #5A1B5A;
  width: 100vw;
  color: white;

  @media (max-width: 1025px){
        display: grid;
        padding-bottom: 20px;
    }
`

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #5C025C;
  padding: 10px;
  position: fixed;
  bottom: 0;
  left: 0;

`

const Nav = styled.nav`
  width: 300px;
  display: flex;
  justify-content: space-between;

  button{
    border-radius: 10px;
    padding: 5px;
  }
`

export default class App extends React.Component {
  state ={
    currentPage:"playlistCreation"
  }

  changePage = (currentPage) =>{
    this.setState({currentPage: currentPage})
  }

  render (){
    const renderPage = () =>{
      if (this.state.currentPage === 'playlistCreation'){
        return <PlaylistsCreation />
      }else if (this.state.currentPage === 'pagePlaylists'){
        return <PagePlaylists />
      }
    }

    return (
      <div>
        <GlobalStyle/>
        <Header>
          <h1>🎧 Labefy</h1>
          <Nav>
            <button onClick={() => this.changePage("playlistCreation")}>Criar Playlist</button>
            <button onClick={() => this.changePage("pagePlaylists")}>Gerenciar Playlists</button>
          </Nav>
        </Header>
        {renderPage()}
        <Footer>Feito por Juliany Bandeira 🤍</Footer>
      </div>
    );
  }
}
