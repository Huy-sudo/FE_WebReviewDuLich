import { 
    takeLatest, 
    call, 
    put, 
    all,
    select
  } from 'redux-saga/effects'
import {
      action_type as TYPE
  } from './action'
import * as api from '../../apis/Review'
import * as apiCity from '../../apis/City'

  
function* getListSaga(action) {
      try {
          const { params } = action
          const response = yield call(api.getList, params)
          if(response.status){
                  yield all([
                      put({type: TYPE.REVIEW.SUCCESS, ...response}),
                  ])
          }else{
            yield put({type: TYPE.REVIEW.ERROR, error: response})
          }
      } catch (error) {
          yield all([
              put({type: TYPE.REVIEW.ERROR, error})
          ])
      }
  }

  function* getListCitySaga(action) {
    try {
        const { params } = action
        const response = yield call(apiCity.getList, params)
        if(response.status){
                yield all([
                    put({type: TYPE.GETCITYREVIEW.SUCCESS, ...response}),
                ])
        }else{
          yield put({type: TYPE.GETCITYREVIEW.ERROR, error: response})
        }
    } catch (error) {
        yield all([
            put({type: TYPE.GETCITYREVIEW.ERROR, error})
        ])
    }
}
  
  function* watcher() {
      yield all([
          takeLatest(TYPE.REVIEW.REQUEST, getListSaga),
          takeLatest(TYPE.GETCITYREVIEW.REQUEST, getListCitySaga)
      ])
  }
  
  export default watcher