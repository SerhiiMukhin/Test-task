import { TweetList } from 'components/TweetList/TweetList';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getLocalUsers, setLocalUsers } from 'services/localStorageService';
import { fetchUsers } from 'services/users-API';
import css from './Tweets.module.css';
import { BsArrowLeft } from 'react-icons/bs';
import { ThreeCircles } from 'react-loader-spinner';

export const Tweets = () => {
  const localStorageKey = 'users';
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState('all');
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const localUsers = getLocalUsers(localStorageKey) || [];
    if (localUsers.length !== 0) {
      setUsers(localUsers);
    } else {
      setIsLoading(true);
      fetchUsers()
        .then(users => {
          setUsers(users);
          localStorage.setItem(localStorageKey, JSON.stringify(users));
          setIsLoading(false);
        })
        .catch(error => console.log(error));
    }
  }, []);

  useEffect(() => {
    switch (filter) {
      case 'all':
        setFilteredUsers(users);
        break;
      case 'follow':
        setFilteredUsers(users.filter(user => user.isFollowing === false));
        break;
      case 'following':
        setFilteredUsers(users.filter(user => user.isFollowing === true));
        break;
      default:
        break;
    }
  }, [filter, users]);

  const handleFilterChange = event => {
    event.preventDefault();
    const newFilter = event.target.value;
    setFilter(newFilter);
  };

  const handleFollowButtonClick = event => {
    event.preventDefault();
    const userId = event.currentTarget.id;
    const userToFollow = users.find(user => user.id === userId);
    if (userToFollow.isFollowing === false) {
      userToFollow.isFollowing = true;
      userToFollow.followers += 1;
      setUsers([...users]);
      setLocalUsers(localStorageKey, users);
    } else if (userToFollow.isFollowing === true) {
      userToFollow.isFollowing = false;
      userToFollow.followers -= 1;
      setUsers([...users]);
      setLocalUsers(localStorageKey, users);
    }
  };

  return (
    <div>
      <div className={css.wrapper}>
        <Link to="/" className={css.back}>
          <BsArrowLeft className={css.arrow_left}></BsArrowLeft>
          Go back
        </Link>
        <div>
          <select className={css.select} value={filter} onChange={handleFilterChange}>
            <option value="all">All</option>
            <option value="follow">Follow</option>
            <option value="following">Following</option>
          </select>
        </div>
      </div>
      {isLoading ? (
        <div className={css.spinner_wrapper}>
          <ThreeCircles
            height="150"
            width="150"
            color="#471ca9"
            ariaLabel="three-circles-rotating"
          />
        </div>
      ) : (
        <TweetList users={filteredUsers} onClick={handleFollowButtonClick}></TweetList>
      )}
    </div>
  );
};
