import { TweetCard } from '../TweetCard/TweetCard';
import css from './TweetList.module.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ScrollToTopButton from 'components/ScrollButton/ScrollButton';

export const TweetList = ({ users, onClick, loadMore, tweets, showAll }) => {
  return (
    <div className={css.wrapper}>
      <Link to="/" className={css.back}>
        Go back
      </Link>
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
  loadMore: PropTypes.func.isRequired,
  tweets: PropTypes.number.isRequired,
  showAll: PropTypes.func.isRequired,
};
