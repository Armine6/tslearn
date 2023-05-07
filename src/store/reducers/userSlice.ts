import { User, userState } from "../../types/users";
import { createSlice, PayloadAction} from '@reduxjs/toolkit'
import { fetchUser } from "../action-creators/fetchUser";

const initialState: userState = {
    users: [],
    loading: false,
    error: null
}

export const userSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {

    },
    extraReducers:{
        [fetchUser.pending.type]:(state)=>{
            state.loading = true
        },
        [fetchUser.fulfilled.type]:(state,action:PayloadAction<User[]>)=>{
            state.loading = false;
           state.users = action.payload;
           state.error = ''
        },
        [fetchUser.rejected.type]:(state,action:PayloadAction<string>)=>{
            state.loading = false;
           state.error = action.payload
        }
    }

})

export default userSlice.reducer


