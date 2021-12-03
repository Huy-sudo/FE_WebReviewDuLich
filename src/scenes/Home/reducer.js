import { action_type as type } from './action'

const initialState = {
    loading: false,
    data: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case type.CITY.REQUEST:
            return {
                ...state,
                loading: true
            }
        case type.CITY.SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case type.CITY.ERROR:
            return {
                ...state,
                loading: false,
            }   
        default:
            return state
    }
}

export default reducer
