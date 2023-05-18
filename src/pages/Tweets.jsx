import { TweetList } from 'components/TweetList/TweetList';
import React, { useEffect, useState } from 'react';
import { fetchUsers } from 'services/users-API';

export const Tweets = () => {
  const localStorageKey = 'users';
  const [users, setUsers] = useState([]);

  const tweetsToShow = 3;
  const [currentTweetIndex, setCurrentTweetIndex] = useState(tweetsToShow);

  useEffect(() => {
    const storedData = localStorage.getItem(localStorageKey);
    if (storedData) {
      setUsers(JSON.parse(storedData));
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

  return (
    <TweetList
      users={users}
      onClick={handleFollowButtonClick}
      loadMore={loadMore}
      tweets={currentTweetIndex}
    ></TweetList>
  );
};
