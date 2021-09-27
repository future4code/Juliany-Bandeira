import React from 'react';
import axios from 'axios'
import styled from "styled-components"

const UserCard = styled.div`
padding:10px;
margin:10px;
border-bottom: 1px solid white;
text-align: center;
display: flex;
justify-content: space-between;
`

const UserList = styled.div`
    border-radius: 5px;
    text-align: center;
    padding: 20px;
    margin: 50px 400px;
    background-color: #C1E9C6;
    color: #404040;
    font-size: large;
    display: grid;

    @media (max-width: 1025px){
        margin: 5px;
    }
`

const ButtonDelet = styled.button`
    border: none;
    border-radius: 5px;
`

const ButtonDetails = styled.button`
    border: none;
    border-radius: 5px;
`

const BotaoNav = styled.button`
    margin: 20px;
`

const headers = {
    headers: {
      Authorization: "juliany-bandeira-maryam"
    }
  };

export default class TelaListaUsuarios extends React.Component{
    state = {
        usersList:[],
    };

    componentDidMount = () =>{
        this.getAllUsers()
    }

    getAllUsers = () => {
        axios
        .get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', headers)
        .then((response) => {
          this.setState({usersList: response.data})
          console.log(response)
        })
        .catch ((error) => {
          alert(error.response.data.message)
        })
    }

    deleteUser = (id) => {
        axios
        .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, headers)
        .then((response) => {
            alert("Tem certeza de que deseja deletar?")
            this.getAllUsers()
        })
        .catch((error) => {
            alert("Ocorreu um erro tente novamente!")
        })
    }

  



    render(){

         const nameList = this.state.usersList.map((user) => {
             const id = user.id
            return (
                <UserCard key={user.id}>
                    {user.name}
                    <ButtonDelet onClick={()=>this.deleteUser(user.id)}>Excluir</ButtonDelet>
                </UserCard>
                )
        })
        
        return(
            <div> 
                <BotaoNav onClick={this.props.changeRegistration}>Voltar</BotaoNav>
                <UserList>
                    <h2>Lista de Usuários</h2>
                    {nameList}
                </UserList>
            </div>
        )
    }
}