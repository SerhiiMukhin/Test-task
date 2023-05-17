import React from 'react';
import css from './Info.module.css'

export const Info = ({ followers, tweets }) => (
  <ul className={css.wrapper}>
    <li className={css.text}>{tweets} Tweets</li>
    <li className={css.text}>{followers} Followers</li>
  </ul>
);
