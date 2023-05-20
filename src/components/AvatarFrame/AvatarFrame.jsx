import React from 'react';
import css from './AvatarFrame.module.css';
import PropTypes from 'prop-types';

export const AvatarFrame = ({ avatar }) => (
  <div className={css.wrapper}>
    <div className={css.line}>
      <div className={css.circle}>
        <div className={css.ring}>
          <img src={avatar} alt="avatar" width={62} height={62} className={css.image} />
        </div>
      </div>
    </div>
  </div>
);

AvatarFrame.propTypes = {
  avatar: PropTypes.string.isRequired,
};
