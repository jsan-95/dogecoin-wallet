import { LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT, LOGOUT_FAILURE, LOGOUT_SUCCESS } from "../action/Types";

const INITIAL_STATE = {
    loading: false,
    logged: false,
    email: "",
    token: ""
};

const AppReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {

        case LOGIN:
            return Object.assign({}, state, {
                loading: true,
            });

        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                logged: true,
                email: payload.token.email,
                token: payload.token.token,
            });

        case LOGIN_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                error: payload.error
            });

        case LOGOUT:
            return Object.assign({}, state, {
                loading: true,
                logged: false,
                email: "",
                token: "",
            });

        default:
            return state;
    }
}

export default AppReducer;