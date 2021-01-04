import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR,
  } from "../actions/authActions";
  
  const initialState = {
    isLoading: false,
    error: "",
  };
  
  const auth = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_USER:
        return {
          ...state,
          isLoading: true,
        };
      case LOGIN_USER_SUCCESS:
        return {
          ...state,
          isLoading: false,
          error: "",
        };
      case LOGIN_USER_ERROR:
        return {
          ...state,
          isLoading: false,
          error: action.error,
        };
      default:
        return state;
    }
  };
  
  export default auth;
  