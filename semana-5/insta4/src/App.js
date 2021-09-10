import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const InputPost = styled.input`
margin: 5px;
width: 18%;

`
const EnviarPost = styled.button`
background-color: lightcyan;
border-radius: 5px;
margin-bottom: 5px; 
cursor: pointer
`

class App extends React.Component {
  state = {
    dadosUsuarios: [
      {
        nome: "paulinha",
        foto: "https://picsum.photos/50/50",
        post: "https://picsum.photos/200/150"
      },
      {
        nome: "fernando",
        foto: "https://picsum.photos/45/50",
        post: "https://picsum.photos/250/150"
      },
      {
        nome: "camila",
        foto: "https://picsum.photos/55/50",
        post: "https://picsum.photos/230/150"
      }
    ],
    inputNome:"",
    inputFoto:"",
    inputPost:""
  };

  adicionaPost = () => {
    const novoPost = {
      nome: this.state.inputNome,
      foto: this.state.inputFoto,
      post: this.state.inputPost
    };

    const postNovo = [...this.state.dadosUsuarios, novoPost];

    this.setState({
      dadosUsuarios: postNovo, 
      inputNome:"",
      inputFoto:"",
      inputPost:""
    });
  };

  onChangeInputNome = (event) => {
    this.setState({inputNome: event.target.value});
  };

  onChangeInputFoto = (event) => {
    this.setState({inputFoto: event.target.value});
  };

  onChangeInputPost = (event) => {
    this.setState({inputPost: event.target.value});
  };


  render() {
    const listaComponentes = this.state.dadosUsuarios.map((dado) => {
      return (
        <Post
          nomeUsuario= {dado.nome}
          fotoUsuario= {dado.foto}
          fotoPost= {dado.foto}
        />
      )
    });

    return (
      <MainContainer>
        <InputPost 
        value={this.state.inputNome} 
        onChange={this.onChangeInputNome} 
        placeholder={"Nome do usuário"}
        />
        <InputPost 
        value={this.state.inputFoto} 
        onChange={this.onChangeInputFoto} 
        placeholder={"Foto"}
        />
        <InputPost 
        value={this.state.inputPost} 
        onChange={this.onChangeInputPost} 
        placeholder={"Post"}
        />
        <EnviarPost onClick ={this.adicionaPost}>Novo Post</EnviarPost>
        {listaComponentes}
      </MainContainer>
    );
  }
}

export default App;
