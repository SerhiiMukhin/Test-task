import React from 'react';
import { AvatarFrame } from '../AvatarFrame/AvatarFrame';
import { Info } from '../Info/Info';
import { Button } from '../Button/Button';
import css from './TweetCard.module.css';
import PropTypes from 'prop-types';

export const TweetCard = ({ avatar, followers, tweets, onClick, id, isFollowing }) => (
  <div className={css.wrapper}>
    <a href="https://goit.global/ua/" className={css.link}>
      {' '}
    </a>
    <div className={css.background}></div>
    <AvatarFrame avatar={avatar}></AvatarFrame>
    <Info followers={followers} tweets={tweets}></Info>
    <Button onClick={onClick} id={id} isFollowing={isFollowing}></Button>
  </div>
);

TweetCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.string.isRequired,
  tweets: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  isFollowing: PropTypes.bool.isRequired,
};
