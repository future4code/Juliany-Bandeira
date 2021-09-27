import React from 'react';
import styled from 'styled-components';
import axios from 'axios'

const Cadastro = styled.div`
    background-color: lightgray;
    border-radius: 5px;
    text-align: center;
    padding: 50px;
    margin: 50px 400px;

    @media (max-width: 1025px){
        margin: 5px;
    }
`
const BotaoNav = styled.button`
    margin: 20px
`

const headers = {
    headers: {
        Authorization: "juliany-bandeira-maryam"
    }
};


export default class TelaCadastro extends React.Component {
    state = {
        userName:"",
        userEmail:""
      };

    changeUserName = (event) =>{
        this.setState({userName: event.target.value})
    };

    changeUserEmail = (event) =>{
        this.setState({userEmail: event.target.value})
    };

    createUser = () => {
        const body = {
        name: this.state.userName,
        email: this.state.userEmail
        }

        axios
        .post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, headers)
        .then((response) => {
            alert("Usuário cadastrado com sucesso!")
            this.setState({userName:"", userEmail:""})
        })
        .catch((error) => {
          alert(error.response.data.message)
          })
    }

    render(){
        return(
        <div>
            <BotaoNav onClick={this.props.changeList}>Ir para lista de usuários</BotaoNav>
            <Cadastro>
            <form>
                <label>Nome: </label>
                <input 
                value={this.state.userName}
                onChange={this.changeUserName}
                />
            </form>
            <br/>
            <form>
                <label>E-mail: </label>
                <input 
                value={this.state.userEmail}
                onChange={this.changeUserEmail}
                />
            </form>
            <br/>
            <button onClick={this.createUser}>Cadastrar</button>
            </Cadastro>
        </div>    
        )
    }
}