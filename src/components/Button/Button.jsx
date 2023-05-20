import React from 'react';
import classNames from 'classnames';
import css from './Button.module.css';
import PropTypes from 'prop-types';

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

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  isFollowing: PropTypes.bool.isRequired,
};
