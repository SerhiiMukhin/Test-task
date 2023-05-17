import React from 'react';

export const Info = ({ followers, tweets }) => (
  <div>
    <p>{tweets} Tweets</p>
    <p>{followers} Followers</p>
  </div>
);
