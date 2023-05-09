import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks';
import { fetchUser } from './store/action-creators/fetchUser';
import UserList from './components/UserList';
import TodosLists from './components/TodosLists';


function App() {
 return <div>
  <UserList/>
  <br/>
  <TodosLists/>
 </div>
}

export default App;
