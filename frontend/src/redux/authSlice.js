import { createSlice } from '@reduxjs/toolkit'
import {jwtDecode} from 'jwt-decode'
import axios from 'axios'
function CheckAuthenticate() {
    const accessToken = localStorage.getItem("access");
    if (!accessToken) return false;
  
    try {
      const decodedToken = jwtDecode(accessToken);
      const currentTime = Date.now() / 1000; 
      return decodedToken.exp > currentTime;
    } catch (err) {
      return false;
    }
  }
  const accessToken = localStorage.getItem('access');
  const refreshToken = localStorage.getItem('refresh');
  let user = null;
  
  if (accessToken) {
    try {
      user = jwtDecode(accessToken);
    } catch (error) {
      console.error("Invalid token:", error);
    }
  }
  
const initialState = {
    isAuthenticated : user ? true : null ,
    user : user,
    access : accessToken || null, 
    refresh : refreshToken || null
}


const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        authState(state , action){
            const {isAuthenticated , access} = action.payload
            state.isAuthenticated = isAuthenticated
            state.access = access
        },
        login(state , action){
            const {isAuthenticated , access , refresh, user} = action.payload
            state.isAuthenticated = isAuthenticated
            state.access = access
            state.refresh = refresh
            state.user = user
        },
        logout(state , action){
            state.isAuthenticated = null
            state.access = null
            state.refresh = null
            state.user = null
        }
    }
})

export default authSlice.reducer 
export const {authState, login,logout} = authSlice.actions

export const checkAuth = () => async (dispatch , getstate) => {
    const token = getstate().auth.access 
    if(!token){
        dispatch(authState({isAuthenticated : false ,access : null  }))
    }
    try{
    const decode =jwtDecode(token) 
    const  date = Date.now()/1000
    if(decode.exp < date){
        await dispatch(refresh())
    }else{
        dispatch(authState({isAuthenticated : true ,access : token  }))
    }}catch(error){
        dispatch(authState({isAuthenticated : false ,access : null  }))
    }
}
const refresh = () => async (dispatch , getstate)=> {
    const state = getstate()
    const refresh = state.auth.refresh
    if(!refresh){
        dispatch(authState({isAuthenticated : false ,access : null , }))
        return ;
    }
    try{
        const response = await axios.post('http://127.0.0.1:8000/auth/token/refresh/', {refresh : refresh})
        if(response.status ===  200)
        {
            localStorage.setItem('access' ,response.data.access)
            dispatch(authState({isAuthenticated : true ,access : response.data.access  }))
        }else{
            dispatch(authState({isAuthenticated : false ,access : null  }))
        }

    }catch(error){
        dispatch(authState({isAuthenticated : false ,access : null  }))
    }
    
}
