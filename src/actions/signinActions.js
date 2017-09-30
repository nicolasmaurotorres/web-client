import axios from 'axios';

export function signin(data){
    return dispatch => {
        return axios.post('http://localhost:3000/api/auth',data);
    }
}