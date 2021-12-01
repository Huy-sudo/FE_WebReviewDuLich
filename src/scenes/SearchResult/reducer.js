import { action_type as type } from './action'

const initialState = {
    loading: false,
    data: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case type.REVIEW.REQUEST:
            return {
                ...state,
                loading: true
            }
        case type.REVIEW.SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case type.REVIEW.ERROR:
            return {
                ...state,
                loading: false,
            }   
        default:
            return state
    }
}

export default reducer
