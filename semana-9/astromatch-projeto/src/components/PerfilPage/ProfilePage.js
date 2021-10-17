import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import No from "../img/no.png";
import Heart from "../img/heart.png"
import styled from "styled-components";
import axios from "axios";
import carregando from "../img/carregando.png"

const ButtonsMatch = styled.div`
  position: absolute;
  bottom: 10px;
  border: none;
  border-radius: 5px;
  width: 100%;
  background-color: #42124C;
  display: flex;
  justify-content: space-around;
  padding-bottom: 4px;

  :hover{
    cursor: pointer;
  }
`
const Img = styled.img`
  margin: 200px 140px;
  width: 100px;
`

function ProfilePage() {

  const[profileSelect, setprofileSelect] = useState({undefined})

  const getProfile = () => {
    axios .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/juliany/person')
    .then(response => {
      setprofileSelect(response.data.profile)
    })
    .catch(error =>{
      alert("Delete sua lista de Matches!")
    })
  }

  useEffect(() =>{
    getProfile()
  }, [])

  const choose = (choice) => {
    const body = {
      id: profileSelect.id,
      choice: choice
  }
  setprofileSelect(undefined)

    axios .post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/juliany/choose-person', body)
    .then(response => {
      getProfile()
    })
    .catch(error => {
      alert("Delete sua lista de Matches!")
    })
}

  const onClickNo =() =>{
    choose(false)
  }

  const onClickYes =() =>{
    choose(true)
  }

  return (
    <div>
      { profileSelect ?
        (<>
        <ProfileCard profile={profileSelect}/>
        <ButtonsMatch>
          <img src={No} onClick={onClickNo}/>
          <img src={Heart} onClick={onClickYes}/>
        </ButtonsMatch>
        </>) : <Img src= {carregando}/>
      }
    </div>
  );
}
export default ProfilePage;