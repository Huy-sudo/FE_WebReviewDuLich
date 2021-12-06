import { takeLatest, call, put, all, push } from "redux-saga/effects";
import { action_type as TYPE } from "./action";
import * as api from "../../apis/Review";

function* postPostSaga(action) {
  try {
    const { params } = action;
    const response = yield call(api.create, params);
    if (response.status) {
      yield all([put({ type: TYPE.POSTPOST.SUCCESS, ...response })]);
      yield put(push("/profile"));
    } else {
      yield put({ type: TYPE.POSTPOST.ERROR, error: response });
    }
  } catch (error) {
    yield all([put({ type: TYPE.POSTPOST.ERROR, error })]);
  }
}

function* watcher() {
  yield all([takeLatest(TYPE.POSTPOST.REQUEST, postPostSaga)]);
}

export default watcher;
