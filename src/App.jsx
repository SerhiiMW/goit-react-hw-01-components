import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';


import './styles/styles.css';

function App() {
  return (
    <div className="app">
      <Profile />
      <Statistics />
      <FriendList />
      <TransactionHistory />
    </div>
  );
}

export default App;
