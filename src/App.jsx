import './App.css';
import { TweetList } from './components/TweetList/TweetList';
import { fetchUsers } from './services/users-API';
import { useState, useEffect } from 'react';

function App() {
  const localStorageKey = 'users';
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem(localStorageKey);
    if (storedData) {
      // console.log('Дані вже присутні в local storage.');
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
      // console.log('Дані успішно завантажені з серверу та збережені в local storage.');
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

  return (
    <div className="App">
      <TweetList users={users} onClick={handleFollowButtonClick}></TweetList>
    </div>
  );
}

export default App;
