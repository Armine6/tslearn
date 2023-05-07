import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks';
import { fetchUser } from './store/action-creators/fetchUser';


function App() {
  const {error,loading,users} = useAppSelector(state => state.userReducer)
  const dispatch = useAppDispatch()

  useEffect(()=>{
    dispatch(fetchUser())
  })
  return (
   <div>
    {users.map((user)=>{
      const {id,name,email} = user
      return <div>
        <div key={id}>{name}</div>
        <p>{email}</p>
        </div>
    })}
   </div>
  );
}

export default App;
