import axios from 'axios';
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Playlists from './components/Playlists'

const GlobalStyle = createGlobalStyle`
body{
  margin: 0;
  padding: 0;
}`

const Header = styled.h1`
text-align: center;
  color: #66B2FF;
  padding: 50px;
  margin: 0;
  background-color: #5A1B5A;
  color: whitesmoke;
  width: 100vw;
`

export default class App extends React.Component {

  render (){
    return (
      <div>
        <GlobalStyle/>
        <Header>Labefy</Header>
        <Playlists/>
      </div>
    );
  }
}
