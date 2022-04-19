import axios from 'axios';
import { ROOT_URL } from '../const';

function API_CALL(method, url, data, type, callback, file) {
    console.log("Calling API for the method of " + method + " : " + ROOT_URL + url);

    let headers = {};

    if (callback) {
        let response;
        response = axios({
            method,
            url: ROOT_URL + url,
            data,
            headers,
            responseType: file ? 'arraybuffer' : 'json',
        }).then(data => callback(data)).catch(error => {
            callback(error.response)
        })
        return {
            type,
            payload: response
        }
    } else {
        return dispatch => {
            dispatch({ type: type.REQ })
            axios({
                method,
                url: ROOT_URL + url,
                data,
                headers,
                responseType: file ? 'arraybuffer' : 'json',
            }).then(response => dispatch({ type: type.RES, payload: response })).catch(error => {
                dispatch({ type: type.FAIL, payload: error })
            })
        }
    }
}

export default API_CALL;