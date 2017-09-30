import axios from 'axios';

export function userSignupRequest(userData){
    return (dispatch) => {
        return axios.post('http://localhost:3000/api/users', userData );
    };
}

export function isUserExists(identifier) {
    return dispatch => {
        return axios.get(`http://localhost:3000/api/users/${identifier}`);
    }
}