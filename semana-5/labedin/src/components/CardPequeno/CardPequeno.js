import React from 'react';
import styled from 'styled-components';

const SmallCardContainer = styled.div `
    width: 500px;
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 10px 20px;
    margin-bottom: 10px;
`

const SmallCardImg = styled.img `
    width: 40px;
    margin-right: 10px;
`
const SmallCardP = styled.p `
    padding-right: 4px;
`


function CardPequeno(props) {
    return (
        <SmallCardContainer>
            <SmallCardImg src={ props.imagem } />
            <SmallCardP><b>{ props.tipoInformacao }:</b></SmallCardP>
            <SmallCardP>{ props.informacao }</SmallCardP>
        </SmallCardContainer>
    )
}

export default CardPequeno;