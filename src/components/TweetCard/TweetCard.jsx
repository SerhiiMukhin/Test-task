import React from 'react';
import { AvatarFrame } from '../AvatarFrame/AvatarFrame';
import { Info } from '../Info/Info';
import { Button } from '../Button/Button';

export const TweetCard = ({ avatar, followers, tweets, onClick, id, isFollowing }) => (
  <div>
    <AvatarFrame avatar={avatar}></AvatarFrame>
    <Info followers={followers} tweets={tweets}></Info>
    <Button onClick={onClick} id={id} isFollowing={isFollowing}></Button>
  </div>
);
