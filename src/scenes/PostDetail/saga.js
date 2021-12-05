import { takeLatest, call, put, all } from "redux-saga/effects";
import { action_type as TYPE } from "./action";
import * as api from "../../apis/Review";
import * as apicomment from "../../apis/Comment";

function* getDetailSaga(action) {
  try {
    const { id } = action;
    const response = yield call(api.getDetail, id);
    if (response.status) {
      yield all([put({ type: TYPE.POSTDETAIL.SUCCESS, ...response })]);
    } else {
      yield put({ type: TYPE.POSTDETAIL.ERROR, error: response });
    }
  } catch (error) {
    yield all([put({ type: TYPE.POSTDETAIL.ERROR, error })]);
  }
}

function* getListCommentSaga(action) {
  try {
    const { params } = action;
    const response = yield call(apicomment.getList, params);
    if (response.status) {
      yield all([put({ type: TYPE.GETCOMMENT.SUCCESS, ...response })]);
    } else {
      yield put({ type: TYPE.GETCOMMENT.ERROR, error: response });
    }
  } catch (error) {
    yield all([put({ type: TYPE.GETCOMMENT.ERROR, error })]);
  }
}

function* postCommentSaga(action) {
  try {
    const { params } = action;
    const response = yield call(apicomment.create, params);
    if (response.status) {
      yield all([put({ type: TYPE.POSTCOMMENT.SUCCESS, ...response })]);
    } else {
      yield put({ type: TYPE.POSTCOMMENT.ERROR, error: response });
    }
  } catch (error) {
    yield all([put({ type: TYPE.POSTCOMMENT.ERROR, error })]);
  }
}
function* watcher() {
  yield all([
    takeLatest(TYPE.POSTDETAIL.REQUEST, getDetailSaga),
    takeLatest(TYPE.GETCOMMENT.REQUEST, getListCommentSaga),
    takeLatest(TYPE.POSTCOMMENT.REQUEST, postCommentSaga),
  ]);
}

export default watcher;
