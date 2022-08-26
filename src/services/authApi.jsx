import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { config } from '../constants/config'
import axios from 'axios'

const loginApi = async (userData) => {
    const response = await axios.post(`${config.BASE_URL}/auth/signin`, userData)

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

const logoutApi = () => {
    localStorage.removeItem('user')
}




const user = JSON.parse(localStorage.getItem('user'))

const initialState ={
    user: user? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

//login

export const login = createAsyncThunk('auth/login', async (user, thunkApi) => {
    try{
        return await  loginApi(user)
    } catch (error){
        const message = (error.response &&  error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkApi.rejectWithValue(message)
    }
})



export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ""
        }
    },
    extraReducers: (builder)=> {
        builder
         .addCase( login.pending, (state) => {
            state.isLoading = true
         })
         .addCase( login.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
         })
         .addCase( login.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.user = null
         })

         .addCase(logout.fulfilled, (state) => {
            state.user = null
         })
    }
})

export const logout = createAsyncThunk('auth/logut', async () => {
    await logoutApi()
})

export const {reset} = authSlice.actions
export default authSlice.reducer