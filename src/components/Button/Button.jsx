import React from 'react';
import classNames from 'classnames';
import css from './Button.module.css';

export const Button = ({ onClick, id, isFollowing }) => (
  <div className={css.wrapper}>
    <button
      type="button"
      onClick={onClick}
      id={id}
      className={classNames(css.button, isFollowing ? css.following : css.follow)}
    >
      {isFollowing ? 'Following' : 'Follow'}
    </button>
  </div>
);
