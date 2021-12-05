import { takeLatest, call, put, all } from "redux-saga/effects";
import { action_type as TYPE } from "./action";
import * as api from "../../apis/Place";

function* getListSaga(action) {
  try {
    const { params } = action;
    const response = yield call(api.getList, params);
    if (response.status) {
      yield all([put({ type: TYPE.GETPLACE.SUCCESS, ...response })]);
    } else {
      yield put({ type: TYPE.GETPLACE.ERROR, error: response });
    }
  } catch (error) {
    yield all([put({ type: TYPE.GETPLACE.ERROR, error })]);
  }
}

function* watcher() {
  yield all([takeLatest(TYPE.GETPLACE.REQUEST, getListSaga)]);
}

export default watcher;
