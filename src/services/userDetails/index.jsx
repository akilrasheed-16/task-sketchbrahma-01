import API_CALL from '..';
import * as types from './actionTypes';

export function getUserDetails() {
    return API_CALL('get', `random.php`, null, types);
}