
import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../utilities/store";

const initialState = {
    loading: false,
    error: null,
    authData: null
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.AUTH_START: return updateObject(state, {loading: true});
        case actionTypes.AUTH_SUCCESS: return updateObject(state, {success: true, loading: false, authData: action.authData});
        case actionTypes.AUTH_FAIL: return updateObject(state, {success: false, loading: false, error: action.error});
        case actionTypes.AUTH_LOGOUT: return updateObject(state, {authData: null, error: null, loading: false});
        default: return state;
    }
}

export default reducer;