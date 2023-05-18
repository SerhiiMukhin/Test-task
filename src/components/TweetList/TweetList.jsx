import React, { useState} from 'react';
import { TweetCard } from '../TweetCard/TweetCard';
import css from './TweetList.module.css';
import { Link } from 'react-router-dom';

export const TweetList = ({ users, onClick, loadMore, tweets }) => {
  const [selectedOption, setSelectedOption] = useState('all');
  const [filteredUsers, setFilteredUsers] = useState(users);

  console.log(selectedOption)
  console.log(filteredUsers)

  const handleChange = event => {
    const filterValue = event.target.value;
    setSelectedOption(filterValue);
    switch (filterValue) {
      case 'all':
        setFilteredUsers(users);
        break;
      case 'following':
        setFilteredUsers(users.filter(user => user.isFollowing === true));
        break;
      case 'follow':
        setFilteredUsers(users.filter(user => user.isFollowing === false));
        break;
      default:
        break;
    }
  };

  return (
    <div className={css.wrapper}>
      <Link to="/" className={css.back}>
        Go back
      </Link>
      <label>
        <select
          name="filter"
          value={selectedOption}
          onChange={handleChange}
        >
          <option value="all">All</option>
          <option value="following">Following</option>
          <option value="follow">Follow</option>
        </select>
      </label>
      <ul className={css.list}>
        {filteredUsers.slice(0, tweets).map(user => (
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
      {tweets < filteredUsers.length && (
        <button type="button" onClick={loadMore} className={css.button}>
          Load More
        </button>
      )}
    </div>
  );
};
