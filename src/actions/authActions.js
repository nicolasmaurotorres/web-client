import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import { SET_CURRENT_USER } from './types';

export function setCurrentUser(user){
    return{
         type: SET_CURRENT_USER,
         user
    }
}

export function signin(data){
    return dispatch => {
        return axios.post('http://localhost:3000/api/auth',data)
        .then(res => {
            const token = res.data.token;
            localStorage.setItem('jwtToken',token);
            setAuthorizationToken(token);
            dispatch(setCurrentUser(jwtDecode(token)));
        });
    }
}

export function logout(){
    return dispatch => {
        localStorage.removeItem('jwtToken');
        setAuthorizationToken(false);
        dispatch(setCurrentUser({}));
    }
}