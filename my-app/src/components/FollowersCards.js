import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
background-image: url(https://images.fineartamerica.com/images-medium-large-5/retro-80s-background-jamielawton.jpg);
  width: 500px;
  margin: 30px auto;
  text-align: center;
  border-radius: 20px;
  box-shadow: 5px 5px 15px gray;
  padding: 10px;
  color: white;
`;

const FollowersCard = props => {
    if(props.follower.length > 0) {
      return (
        <Card>
          <h3>Number of Followers: {props.follower.length}</h3>
          {/* {props.follower.map(following => {
            return (
            <div>
              <img src={following.follower.photo} alt="user avatar" />
              <h3>Name: {following.follower.name}</h3>
            </div> */}
          {/* )})} */}
        </Card>
      )
    } else {
      return (
        <Card>
          <h3>Number of Followers: {props.follower.length}</h3>
        </Card>
      );
    }

}

export default FollowersCard;