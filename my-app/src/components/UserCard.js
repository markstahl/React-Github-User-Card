import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-image: url(https://images.fineartamerica.com/images-medium-large-5/retro-80s-background-jamielawton.jpg);
  width: 500px;
  margin: 30px auto;
  padding: 10px;
  text-align: center;
  border-radius: 8px;
  box-shadow: 5px 5px 15px gray;
  color: white;
`;

const Image = styled.img`
  border: 4px solid white;
  border-radius: 8px;
  margin-top: 10px;
  box-shadow: 5px 5px 15px gray;
`;

const Span = styled.span`
  margin-left: 8px;
  font-size: 16px;
`;

const GithubLink = styled.a`
  margin-left: 10px;
  font-size: 16px;
`;

const ColorImage = styled.div`
  background-color: black;
`;

const UserCard = props => {
  return (
    <Card>
      <Image src={props.user.avatar_url} width="250" alt="Mark Stahl" />
      <h1>{props.user.name}</h1>
      <h3>Location: <Span>{props.user.location}</Span></h3>
      <h3>Github Page:
        <span>
          <GithubLink href={props.user.html_url}>markstahl</GithubLink>
        </span>
      </h3>
      <h3>Bio: 
        <Span>{props.user.bio}</Span>
      </h3>
      <ColorImage>
        <img src="https://ghchart.rshah.org/markstahl" width="500" height="150" alt="contributions" />
      </ColorImage>
    </Card>
  )
};

export default UserCard;