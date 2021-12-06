import { all } from 'redux-saga/effects'
import loginSaga from "./scenes/Auth/Login/saga";
import signupSaga from "./scenes/Auth/Signup/saga";
import citySaga from "./scenes/Admin/City/saga";
import reviewSaga from "./scenes/Admin/Review/saga";
import userSaga from "./scenes/Admin/User/saga";
import placeSaga from "./scenes/Admin/Place/saga";
import reviewPageSaga from "./scenes/Review/saga"
import homeSaga from "./scenes/Home/saga";
import postdetailSaga from "./scenes/PostDetail/saga"
import searchSaga from "./scenes/SearchResult/saga";

const Saga = function* (){
    yield all([
      loginSaga(),
      signupSaga(),
      citySaga(),
      reviewSaga(),
      userSaga(),
      placeSaga(),
      reviewPageSaga(),
      homeSaga(),
      postdetailSaga(),
      searchSaga()

    ])
  }
  
  export default Saga