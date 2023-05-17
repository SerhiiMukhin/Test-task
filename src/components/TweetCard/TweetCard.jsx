import React from 'react';
import { AvatarFrame } from '../AvatarFrame/AvatarFrame';
import { Info } from '../Info/Info';
import { Button } from '../Button/Button';
import css from "./TweetCard.module.css"

export const TweetCard = ({ avatar, followers, tweets, onClick, id, isFollowing }) => (
  <div className={css.wrapper}>
    <a href='https://goit.global/ua/' className={css.link}> </a>
    <div className={css.background}></div>
    <AvatarFrame avatar={avatar}></AvatarFrame>
    <Info followers={followers} tweets={tweets}></Info>
    <Button onClick={onClick} id={id} isFollowing={isFollowing}></Button>
  </div>
);
