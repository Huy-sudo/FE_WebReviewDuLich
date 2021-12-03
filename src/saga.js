import { all } from 'redux-saga/effects'
import loginSaga from "./scenes/Auth/Login/saga";
import signupSaga from "./scenes/Auth/Signup/saga";
import citySaga from "./scenes/Admin/City/saga";
import reviewSaga from "./scenes/Admin/Review/saga";
import userSaga from "./scenes/Admin/User/saga";
import placeSaga from "./scenes/Admin/Place/saga";
import homeSaga from "./scenes/Home/saga";
const Saga = function* (){
    yield all([
      loginSaga(),
      signupSaga(),
      citySaga(),
      reviewSaga(),
      userSaga(),
      placeSaga(),
      homeSaga()

    ])
  }
  
  export default Saga