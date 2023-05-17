import './App.css';
import { fetchUsers } from './services/users-API';

function App() {
  const localContacts = localStorage.getItem('users');
  if (localContacts === null) {
    fetchUsers()
  } else {
    console.log("We have local contacts!")
  }

  return <div className="App"></div>;
}

export default App;
