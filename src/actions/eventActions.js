import axios from 'axios';

export function createEvent(event){
    return dispatch => {
        return axios.post('http://localhost:3000/api/events', event);
    }
}