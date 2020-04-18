import * as actionTypes from "./actionTypes";
import { post } from "../../utilities/request";
export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = ( res ) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData: {
            email: res.email,
            userId: res.localId,
            idToken: res.idToken,
            expiresIn: res.expiresIn
        }
    }
}

export const authFail = (err) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: err
    }
}

export const auth = (isSignUp, loginData) => {
    return dispatch => {      
        dispatch(authStart());
        let uri = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAeCBU2RlJsmldnMMZh8B4dNkpeaKLrfIo";
        if(isSignUp) {
            uri = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAeCBU2RlJsmldnMMZh8B4dNkpeaKLrfIo";
        }

        console.log(uri);
        post(uri, {...loginData, returnSecureToken: true})
        .then(res => {
            console.log("Response", res);
            if(res.error) {
                dispatch(authFail(res.error));
            } else {
                dispatch(authSuccess(res));
            }
        })
        .catch(err => {
            console.log("Error", err);
            dispatch(authFail(err));
        });
    }
}

export const authLogout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}