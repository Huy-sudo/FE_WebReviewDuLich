import { combineReducers } from 'redux'
const initialState = {
    login: []
}
const login = (state = initialState, action) => {
    switch (action.type) {
        default: 
            return state;
    }
}

  
const reducer = combineReducers({
    login,
    // login,
})

export default reducer