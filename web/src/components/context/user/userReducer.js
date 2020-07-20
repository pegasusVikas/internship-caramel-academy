import {
SET_USER,
REMOVE_ALL_COURSE,
REMOVE_COURSE,
ADD_COURSE,
GET_COURSES
} from './types'
export default (state,action)=>{
    switch(action.type){
        case SET_USER:
            return {...state ,user:action.payload}

        case REMOVE_ALL_COURSE:
        case REMOVE_COURSE:
        case GET_COURSES: 
            console.log({...state,user:{ ...state.user,cart:action.payload}})
            return {...state,user:{ ...state.user,cart:action.payload}}
        default:
            console.log("NO TYPE MATCHED IN REDUCER")
            return state
    }
}