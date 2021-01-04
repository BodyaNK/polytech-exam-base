export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_ERROR = "LOGIN_USER_ERROR";

export const loginUser = (user) => {
  console.log(user);
  return {
    type: LOGIN_USER,
    user,
  };
};

export const loginUserSuccess = () => {
  return {
    type: LOGIN_USER_SUCCESS,
  };
};

export const loginUserError = (error) => {
  return {
    type: LOGIN_USER_ERROR,
    error,
  };
};
