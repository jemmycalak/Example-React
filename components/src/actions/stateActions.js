import {IsLogin, Logout} from './typeActions'

export const SetLogin = (token) =>{
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>", token);
    return {
        type: IsLogin,
        token
    };
}

export const SetLogout = () => {
    return {
        type: Logout
    };
}