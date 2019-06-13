//import for action click
import {IsLogin, Logout} from '../actions/typeActions'

//make default object
const InitialState = {
    IsLogin : false,
    Name : 'Jemmy Calak',
    Token : ''
};

export default (state = InitialState, action) => {
    switch(action.type){
        case IsLogin:
            console.log("<<<<<<<<<<<", action.token);
            return {...state, IsLogin: true, Name: "jemmy", Token: action.token};
        
        case Logout:
            return {...state, IsLogin : false};
        default:
            return state;
    }
}