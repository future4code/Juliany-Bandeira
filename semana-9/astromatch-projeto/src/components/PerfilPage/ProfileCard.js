import React from "react";
import styled from "styled-components";

const Card = styled.div`
  padding: 20px;
`

const Picture = styled.img`
  width: 100%;
  height: 394px;
`

const Information = styled.p`
  font-size: 18px;
  color: white;
  padding: 0px 8px; 
  position: absolute;
  bottom: 80px;
  backdrop-filter: blur(12px);
  justify-content: center;
  width: 90%;
`

function ProfileCard(props) {
  return (
    <Card>
     <Picture src={props.profile.photo}/>
     <Information>
       <p><strong>{props.profile.name}, {props.profile.age}</strong></p>
       <p>{props.profile.bio}</p>
     </Information>
    </Card>
  );
}
export default ProfileCard;