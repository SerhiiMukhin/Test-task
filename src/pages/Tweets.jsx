import { TweetList } from 'components/TweetList/TweetList';
import React, { useEffect, useState } from 'react';
import { getLocalUsers, setLocalUsers } from 'services/localStorageService';
import { fetchUsers } from 'services/users-API';

export const Tweets = () => {
  const localStorageKey = 'users';
  const [users, setUsers] = useState([]);
  const [currentTweetIndex, setCurrentTweetIndex] = useState(3);

  useEffect(() => {
    const localUsers = getLocalUsers(localStorageKey) || [];
    if (localUsers.length !== 0) {
      setUsers(localUsers);
    } else {
      fetchUsers()
        .then(users => {
          setUsers(users);
          localStorage.setItem(localStorageKey, JSON.stringify(users));
        })
        .catch(error => console.log(error));
    }
  }, []);

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

  const loadMore = () => {
    setCurrentTweetIndex(prevIndex => prevIndex + 3);
  };

  const showAll = () => {
    setCurrentTweetIndex(users.length);
  };

  return (
    <TweetList
      users={users}
      onClick={handleFollowButtonClick}
      loadMore={loadMore}
      showAll={showAll}
      tweets={currentTweetIndex}
    ></TweetList>
  );
};
