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
import * as api from '../../apis/City'
  
function* getListSaga(action) {
      try {
          const { params } = action
          const response = yield call(api.getList, params)
          if(response.status){
                  yield all([
                      put({type: TYPE.CITY.SUCCESS, ...response}),
                  ])
          }else{
            yield put({type: TYPE.CITY.ERROR, error: response})
          }
      } catch (error) {
          yield all([
              put({type: TYPE.CITY.ERROR, error})
          ])
      }
  }
  
  function* watcher() {
      yield all([
          takeLatest(TYPE.CITY.REQUEST, getListSaga)
          
      ])
  }
  
  export default watcher