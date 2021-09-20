import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'fernando'}
          fotoUsuario={'https://picsum.photos/45/50'}
          fotoPost={'https://picsum.photos/250/150'}
        />
        <Post
          nomeUsuario={'camila'}
          fotoUsuario={'https://picsum.photos/55/50'}
          fotoPost={'https://picsum.photos/230/150'}
        />
      </MainContainer>
    );
  }
}

export default App;
