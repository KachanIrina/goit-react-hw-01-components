import user from '../data/user';
import stats from '../data/stats';
import friends from '../data/friends';
import transactions from '../data/transactions';

import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statist';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './Transaction/TransactionHistory';


export const App = () => {
    return (
      <div
        style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        backgroundColor: '#eeeeee'
      }}
      >

      <Profile 
      key={user.tag}
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats} 
      /> 

      <Statistics 
      title="Upload stats" 
      stats={stats} 
      />

      <FriendList 
      friends={friends}
      />

      <TransactionHistory
      items={transactions}
      />

      </div>
      
  );
  
};

