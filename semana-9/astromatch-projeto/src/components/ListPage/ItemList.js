import React from "react";
import styled from "styled-components";

const Item = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 4px;
  border-bottom: 1px solid #6B256F;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: white;
`

const PhotoItem = styled.img`
    border-radius: 50%;
    width: 40px;
    height: 40px;
`

function ItemList(props) {
  return (
    <Item>
      <PhotoItem src={props.match.photo}/>
      <p>{props.match.name}</p>
    </Item>
  );
}
export default ItemList;