import React from 'react';
import css from './Info.module.css';
import PropTypes from 'prop-types';

export const Info = ({ followers, tweets }) => (
  <ul className={css.wrapper}>
    <li className={css.text}>{tweets} Tweets</li>
    <li className={css.text}>{followers} Followers</li>
  </ul>
);

Info.propTypes = {
  followers: PropTypes.string.isRequired,
  tweets: PropTypes.string.isRequired,
};
