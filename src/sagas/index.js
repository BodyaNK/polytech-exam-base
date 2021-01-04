import { all } from "redux-saga/effects";
import authSaga from "./authSaga";

function* saga() {
  yield all([authSaga()]);
}

export default saga;
