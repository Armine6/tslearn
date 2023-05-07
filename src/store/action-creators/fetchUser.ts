import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { User } from '../../types/users'
export const fetchUser = createAsyncThunk(
    'user/fetchall',
    async (thunkAPI) => {
        const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
        return response.data
    })