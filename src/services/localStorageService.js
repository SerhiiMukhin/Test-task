export const getLocalUsers = key => {
 return JSON.parse(localStorage.getItem(key));
};

export const setLocalUsers = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
