import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import styled from "styled-components";
import axios from "axios";


const List = styled.div`
  padding: 8px;
`

function ListPage() {

  const[matchesList, setMatchesList] = useState([]) 

  const getMatchesList = () => {
    axios .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/juliany/matches')
    .then(response => {
      setMatchesList(response.data.matches)
    })
    .catch(error =>{
      console.log(error)
    })
  }

  useEffect(() =>{
    getMatchesList()
  }, [])

  return (
    <List>
      {matchesList.map((match) => {
        return <ItemList match={match}/>
      })}
    </List>
  );
}
export default ListPage;