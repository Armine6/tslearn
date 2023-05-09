import { Todos } from './../../types/todos';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { todosState } from '../../types/todos';
import { fetchTodos } from '../action-creators/fetchTodos';

const initialState: todosState = {
    todos: [],
    loading: false,
    error: ''
}
const todosSlice = createSlice({
    name: 'Todos',
    initialState,
    reducers: {

    },
    extraReducers: {
        [fetchTodos.pending.type]: (state) => {
            state.loading = true
        },
        [fetchTodos.fulfilled.type]: (state, action: PayloadAction<Todos[]>) => {
            state.todos = action.payload;
            state.loading = false
        },
        [fetchTodos.rejected.type]: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload
        }
    }
})

export default todosSlice.reducer 
