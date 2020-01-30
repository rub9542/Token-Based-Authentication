import axios from 'axios';
import * as actionsType  from'./actionsType'

export const authSuccess = token => {
    return {
        type: actionsType.AUTH_SUCCESS,
        payload: token
    }
}

export const authFail = error => {
    return {
        type: actionsType.AUTH_FAIL,
        payload: error
    }
}

export const logout = () => {
    localStorage.removeItem('user');
    return {
        type: actionsType.AUTH_LOGOUT,
        payload:null

    };
}



export const authLogin = (username, password) => {
    return dispatch => {
        axios.post('http://127.0.0.1:8000/rest-auth/login/', {
            username: username,
            password: password
        })
        .then(res => {
            const token = res.data.key;
            localStorage.setItem('token', token);
            dispatch(authSuccess(token));
          
        })
        .catch(err => {
            dispatch(authFail(err))
        })
    }
}

export const authSignup = (username, email, password1, password2) => {
    return dispatch => {
        axios.post('http://127.0.0.1:8000/rest-auth/registration/', {
            username: username,
            email: email,
            password1: password1,
            password2: password2
        })
        .then(res => {
            const token = res.data.key;
            localStorage.setItem('token', token);
            dispatch(authSuccess(token));
           
        })
        .catch(err => {
            dispatch(authFail(err))
        })
    }
}