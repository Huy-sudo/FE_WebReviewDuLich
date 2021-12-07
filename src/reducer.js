import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { reducer as formReducer } from 'redux-form'
import login from "./scenes/Auth/Login/reducer";
import signup from "./scenes/Auth/Signup/reducer";
import city from "./scenes/Admin/City/reducer";
import review from "./scenes/Admin/Review/reducer";
import place from "./scenes/Admin/Place/reducer";
import user from "./scenes/Admin/User/reducer";
import reviewPage from "./scenes/Review/reducer"
import home from "./scenes/Home/reducer";
import postdetail from './scenes/PostDetail/reducer';
import search from "./scenes/SearchResult/reducer";
import newpost from "./scenes/NewPost/reducer";
const Reducer = (history) => combineReducers({    
    form: formReducer,
    router: connectRouter(history),
    login,
    signup,
    city,
    review,
    place,
    user,
    reviewPage,
    home,
    postdetail,
    search,
    newpost
  })
  
export default Reducer