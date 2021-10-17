import React from "react";
import styled from "styled-components";
import check from"../img/check.png";
import Voltar from"../img/Voltar.png";
import puzzle from"../img/puzzle.png"


const Bar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 10px;
  border-bottom: 1px solid purple;
`
const ButtonsBar = styled.img`
    width: 30px;

    :hover{
    cursor: pointer;
  }
`
const LogoA = styled.h1`
    display: inline;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 35px;
    color: #8AFF00;
`
const LogoM = styled.h1`
    display: inline;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 35px;
    color: #FE0472;
`

function Header(props) {

  return (
    <Bar>
      {props.selectPage === 'list-page' && <ButtonsBar src={Voltar} onClick={props.goProfilePage}/>}
      <div>
      <LogoA>Artro</LogoA><LogoM>Match</LogoM>
      <ButtonsBar src={puzzle} />
      </div>
      {props.selectPage === 'profile-page' && <ButtonsBar src={check} onClick={props.goListPage}/>}
    </Bar>
  )
}
export default Header;