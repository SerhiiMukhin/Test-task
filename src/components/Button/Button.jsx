import React from 'react';

export const Button = ({ onClick, id, isFollowing }) => (
  <button type="button" onClick={onClick} id={id}>
    {isFollowing ? 'Following' : 'Follow'}
  </button>
);
