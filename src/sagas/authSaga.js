import { put, takeLatest, call } from "redux-saga/effects";
import {
  loginUserSuccess,
  loginUserError,
  changePasswordSuccess,
  changePasswordError,
} from "../actions/authActions";
import api from "../api/authApi";

// function* loginUser(action) {
//   try {
//     const data = yield call(api.loginUser, action.user);
//     yield sessionStorage.setItem("authToken", data.token.toString());
//     yield put(loginUserSuccess());
//   } catch (error) {
//     yield put(loginUserError(error.message));
//   }
// }
// function* logoutUser() {
//   try {
//     yield sessionStorage.removeItem("authToken");
//   } catch (error) {
//     console.log(error.message);
//   }
// }
// function* changePassword(action) {
//   try {
//     console.log(action);
//     if (
//       action.passwords.newPassword !== action.passwords.newPasswordConfirmation
//     ) {
//       yield put(changePasswordError("Passwords do not match!"));
//     } else {
//       yield call(api.changePassword, action.passwords);
//       yield put(changePasswordSuccess("Password changed successfully!"));
//     }
//   } catch (error) {
//     yield put(changePasswordError(error.message));
//   }
// }

function* authSaga() {
//   yield takeLatest("LOGIN_USER", loginUser);
//   yield takeLatest("LOGOUT_USER", logoutUser);
//   yield takeLatest("CHANGE_PASSWORD", changePassword);
}

export default authSaga;
