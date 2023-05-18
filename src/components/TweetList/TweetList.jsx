import React from 'react';
import { TweetCard } from '../TweetCard/TweetCard';
import css from './TweetList.module.css';

export const TweetList = ({ users, onClick, loadMore, tweets }) => (
  <div className={css.wrapper}>
    <ul className={css.list}>
      {users.slice(0, tweets).map(user => (
        <li key={user.id}>
          <TweetCard
            id={user.id}
            avatar={user.avatar}
            followers={user.followers.toLocaleString('en-US')}
            tweets={user.tweets.toLocaleString('en-US')}
            isFollowing={user.isFollowing}
            onClick={onClick}
          ></TweetCard>
        </li>
      ))}
    </ul>
    {tweets < users.length && (
      <button type="button" onClick={loadMore} className={css.button}>
        Load More
      </button>
    )}
  </div>
);
