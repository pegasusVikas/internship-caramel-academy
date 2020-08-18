import React,{useReducer} from 'react'
import userReducer from './userReducer'
import UserContext from './userContext'
import axios from 'axios'
import {
SET_USER,
REMOVE_ALL_COURSE,
REMOVE_COURSE,
ADD_COURSE,
GET_COURSES
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

    //REMOVE ALL COURSES
    const removeAllCourses=async  (userID)=>{
        //console.log(userID)
        try{
        const res=await axios.delete("/api/api/studcart/"+userID);
        if(res.data.error){
            console.log("error:"+res.data.error);//set error
        }else
            dispatch({type:REMOVE_ALL_COURSE,payload:res.data})
        
        }catch(err){
            console.log("error:"+err.message);//set error
        }
    }

    //REMOVE A COURSE
    const removeCourse=async  (userID,courseID)=>{
        console.log(userID,courseID)
        try{
        const res=await axios.delete("/api/api/studcart/"+userID+"/"+courseID);
        if(res.data.error){
            console.log("error:"+res.data.error);//set error
        }else{
            console.log(res.data)
            dispatch({type:REMOVE_COURSE,payload:res.data})
        }
        }catch(err){
            console.log("error:"+err.message);//set error
        }
    }

    //GET ALL COURSES
    const getCourses=async  (userID,courseID)=>{
        //console.log(userID)
        try{
        const res=await axios.get("/api/api/studcart/"+userID);
        if(res.data.error){
            console.log("error:"+res.data.error);//set error
        }else
            dispatch({type:GET_COURSES,payload:res.data})
        
        }catch(err){
            console.log("error:"+err.message);//set error
        }
    }
    return (
        <UserContext.Provider
        value={{
            user:state.user,
            setUser:setUser,
            removeAllCourses:removeAllCourses,
            removeCourse:removeCourse,
            getCourses:getCourses
        }}
        >
        {props.children}
        </UserContext.Provider>

    );
}

export default UserState;
