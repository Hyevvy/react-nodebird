import { all, fork, take, call, put } from "redux-saga/effects";

function* logIn() {
  try {
    yield put({
      type: "LOG_IN_REQUEST",
    });
    const result = yield call(logInAPI);
    yield put({
      type: "LOG_IN_SUCCESS",
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: "LOG_IN_FAILURE",
      dat: err.response.data,
    });
  }
}
function* watchLogIn() {
  yield take("LOG_IN_REQUEST", logIn);
}
function* watchLogOut() {
  yield take("LOG_OOUT_REQUEST", logOut);
}
function* watchLogOut() {
  yield take();
}
export default function* rootSage() {
  yield all([fork(watchLogIn), fork(watchLogOut), fork(watchAddPost)]);
}
