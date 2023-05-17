import axios from 'axios';

const endpoint = 'https://646398d5043c103502a72918.mockapi.io/tweets/users/';

export const fetchUsers = async () => {
  try {
    const response = await axios.get(endpoint);
    const users = response.data;
    const addedIsFollowing = users.map(user => {
        return { ...user, isFollowing: 'false'}
    })
    localStorage.setItem('users', JSON.stringify(addedIsFollowing))
  } catch (error) {
    console.log(error);
  }
};
