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
import * as api from '../../apis/Review' // comment??
  
function* getListSaga(action) {
      try {
          const { params } = action
          const response = yield call(api.getList, params)
          if(response.status){
                  yield all([
                      put({type: TYPE.POSTDETAIL.SUCCESS, ...response}),
                  ])
          }else{
            yield put({type: TYPE.POSTDETAIL.ERROR, error: response})
          }
      } catch (error) {
          yield all([
              put({type: TYPE.POSTDETAIL.ERROR, error})
          ])
      }
  }
  
  function* watcher() {
      yield all([
          takeLatest(TYPE.POSTDETAIL.REQUEST, getListSaga)
          
      ])
  }
  
  export default watcher