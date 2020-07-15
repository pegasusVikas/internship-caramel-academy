import React,{useReducer} from 'react'
import userReducer from './userReducer'
import UserContext from './userContext'
import {
SET_USER
} from './types'

const UserState = (props) => {
    const initialState ={
        user:{
            type:""
        }
    }

    const [state,dispatch] =useReducer(userReducer,initialState)

    //SET USER
    const setUser =(user)=>{
        dispatch({type:SET_USER,payload:user})
    }

    return (
        <UserContext.Provider
        value={{
            user:state.user,
            setUser:setUser
        }}
        >
        {props.children}
        </UserContext.Provider>

    );
}

export default UserState;
