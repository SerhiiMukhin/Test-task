import { TweetList } from 'components/TweetList/TweetList';
import React, { useEffect, useState } from 'react';
import { fetchUsers } from 'services/users-API';

export const Tweets = () => {
  const localStorageKey = 'users';
  const localData = JSON.parse(localStorage.getItem(localStorageKey));
  const [users, setUsers] = useState(localData);

  const tweetsToShow = 3;
  const [currentTweetIndex, setCurrentTweetIndex] = useState(tweetsToShow);

  useEffect(() => {
    const data = localStorage.getItem(localStorageKey);
    if (data) {
      setUsers(JSON.parse(data));
    } else {
      fetchData();
    }
  }, []);

  const fetchData = async () => {
    try {
      const usersData = await fetchUsers();
      const addIsFollowing = usersData.map(user => {
        return { ...user, isFollowing: false };
      });
      setUsers(addIsFollowing);
      localStorage.setItem(localStorageKey, JSON.stringify(addIsFollowing));
    } catch (error) {
      console.error('Сталася помилка:', error);
    }
  };

  const handleFollowButtonClick = event => {
    event.preventDefault();
    const userId = event.currentTarget.id;
    const userToFollow = users.find(user => user.id === userId);
    if (userToFollow.isFollowing === false) {
      userToFollow.isFollowing = true;
      userToFollow.followers += 1;
      setUsers([...users]);
      localStorage.setItem(localStorageKey, JSON.stringify(users));
    } else if (userToFollow.isFollowing === true) {
      userToFollow.isFollowing = false;
      userToFollow.followers -= 1;
      setUsers([...users]);
      localStorage.setItem(localStorageKey, JSON.stringify(users));
    }
  };

  const loadMore = () => {
    setCurrentTweetIndex(prevIndex => prevIndex + tweetsToShow);
  };

  const showAll = () => {
    setCurrentTweetIndex(users.length)
  }

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
