import Connection from "../constant/Connection";
import ObjectUtils from "../util/model/ObjectUtils";
import { LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT, LOGOUT_FAILURE, LOGOUT_SUCCESS } from "./Types";


export const login = (email, password) => {
    console.log("login");
    const requestOptions = {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({email, password})
    };
    return (dispatch) => {
        dispatch(loginStart());

        const url = Connection.url + "api/app/login";
        fetch(url, requestOptions).then((response) => {
            return response.status === 200 ?
                response.json() :
                response.text().then((error) => Promise.reject(error))
        }
        ).then(
            (response) => dispatch(loginSuccess(response))
        ).catch(
            (error) => dispatch(loginFailure(ObjectUtils.toString(error)))
        );
    }
};

const loginStart = () => ({
    type: LOGIN
});

const loginSuccess = (token) => ({
    type: LOGIN_SUCCESS,
    payload: { token }
});

const loginFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: { error }
});


export const logout = () => {
    console.log("logout");

    return (dispatch) => {
        dispatch(logoutStart());
    }
};

const logoutStart = () => ({
    type: LOGOUT
});
