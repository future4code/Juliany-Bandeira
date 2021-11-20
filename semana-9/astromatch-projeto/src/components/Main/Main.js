import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import ListPage from "../ListPage/ListPage";
import ProfilePage from "../PerfilPage/ProfilePage";
import Header from "./Header";

const Container = styled.div`
  background-color: #42124C;
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 600px;
`
const ButtonDelet = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
`

function Main() {
  const [selectPage, setSelectPage] = useState('profile-page')

  const currentPage = () => {
    switch(selectPage){
      case 'profile-page':
        return <ProfilePage/>
      case 'list-page':
        return <ListPage/>
      default:
        return <ProfilePage/>
    }
  }

  const goProfilePage = () => {
    setSelectPage('profile-page')
  }

  const goListPage = () => {
    setSelectPage('list-page')
  }

  const onClickDelet = () => {
    axios .put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/juliany/clear')
  } 

  return (
    <div>
      <Container>
        <Header 
        selectPage={selectPage}
        goProfilePage={goProfilePage}
        goListPage={goListPage}
        />
        {currentPage()}
      </Container>
      <ButtonDelet onClick={onClickDelet}>Deletar Matches</ButtonDelet>
    </div>
  );
}
export default Main;