import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { Todos } from "../../types/todos"


export const fetchTodos = createAsyncThunk(
    'todos/fetchall',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<Todos[]>('https://jsonplaceholder.typicode.com/todos')
            return response.data
        } catch (error) {
            thunkAPI.rejectWithValue('Error')

        }

    }
)