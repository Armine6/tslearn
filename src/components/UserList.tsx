import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchUser } from '../store/action-creators/fetchUser'

const UserList = () => {
    const {error,loading,users} = useAppSelector(state => state.userReducer)
    const dispatch = useAppDispatch()
  
    useEffect(()=>{
      dispatch(fetchUser())
    },[])
    console.log(loading);
    
    return (
     <div>
      {loading && <p>Loading...</p>}
        {error && <p>Error</p>}
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

export default UserList