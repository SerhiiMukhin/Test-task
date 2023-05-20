import axios from 'axios';

const endpoint = 'https://646398d5043c103502a72918.mockapi.io/tweets/users/';

export const fetchUsers = async () => {
  try {
    const response = await axios.get(endpoint);
    const addIsFollowingField = response.data.map(user=>{
      return {...user, isFollowing: false}
    })
    return addIsFollowingField;
  } catch (error) {
    console.log('Сталася помилка при завантаженні даних:', error);
    throw error;
  }
};
