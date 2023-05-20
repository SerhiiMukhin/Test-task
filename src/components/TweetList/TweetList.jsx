import { TweetCard } from '../TweetCard/TweetCard';
import css from './TweetList.module.css';
import PropTypes from 'prop-types';
import ScrollToTopButton from 'components/ScrollButton/ScrollButton';
import { useState } from 'react';

export const TweetList = ({ users, onClick }) => {
  const [currentTweetIndex, setCurrentTweetIndex] = useState(3);

  const loadMore = () => {
    setCurrentTweetIndex(prevIndex => prevIndex + 3);
  };

  const showAll = () => {
    setCurrentTweetIndex(users.length);
  };

  return (
    <div className={css.wrapper}>
      {users.length > 0 ? (
        <ul className={css.list}>
          {users.slice(0, currentTweetIndex).map(user => (
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
      ) : (
        <div className={css.warning_wrapper}>
          <p className={css.warning}>Sorry, no results!</p>
        </div>
      )}

      {currentTweetIndex < users.length && (
        <div className={css.buttons_wrapper}>
          <button type="button" onClick={loadMore} className={css.button}>
            Load More
          </button>
          <button type="button" onClick={showAll} className={css.button}>
            Show All
          </button>
        </div>
      )}
      <ScrollToTopButton></ScrollToTopButton>
    </div>
  );
};

TweetList.propTypes = {
  users: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};
