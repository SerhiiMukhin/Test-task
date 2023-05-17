import React from 'react';
import { TweetCard } from '../TweetCard/TweetCard';

export const TweetList = ({ users, onClick }) => (
  <div>
    <ul>
      {users.map(user => (
        <TweetCard
          key={user.id}
          id={user.id}
          avatar={user.avatar}
          followers={user.followers}
          tweets={user.tweets}
          isFollowing={user.isFollowing}
          onClick={onClick}
        ></TweetCard>
      ))}
    </ul>
    <TweetCard></TweetCard>
  </div>
);
