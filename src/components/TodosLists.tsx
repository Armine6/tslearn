import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchTodos } from '../store/action-creators/fetchTodos'

const TodosLists = () => {
    const {error,loading,todos} = useAppSelector(state => state.todosReducer)
    const dispatch = useAppDispatch()

    useEffect(() => {
       dispatch(fetchTodos())
    })
    return (
        <div>{loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {todos.map((todo)=>{
                return <div key={todo.id}>{todo.title}</div>
})}
        </div>
    )
}

export default TodosLists