import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { reducer as formReducer } from 'redux-form'
import login from "./scenes/Auth/Login/reducer";
import signup from "./scenes/Auth/Signup/reducer";
import city from "./scenes/Admin/City/reducer";
import review from "./scenes/Admin/Review/reducer";
import place from "./scenes/Admin/Place/reducer";
import user from "./scenes/Admin/User/reducer";
import home from "./scenes/Home/reducer";
const Reducer = (history) => combineReducers({    
    form: formReducer,
    router: connectRouter(history),
    login,
    signup,
    city,
    review,
    place,
    user,
    home
  })
  
export default Reducer