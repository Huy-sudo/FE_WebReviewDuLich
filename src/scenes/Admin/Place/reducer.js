import { action_type as type } from './action'

const initialState = {
    loading: false,
    data: [],
    city: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case type.PLACE.REQUEST:
            return {
                ...state,
                loading: true
            }
        case type.PLACE.SUCCESS:
            return {
                ...state,
                data: action.data,
                loading: false,
            }
        case type.PLACE.ERROR:
            return {
                ...state,
                loading: false,
            }
        case type.UPDATE.REQUEST:
            return {
                ...state,
                loading: true
            }
        case type.UPDATE.SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case type.UPDATE.ERROR:
            return {
                ...state,
                loading: false,
            }
        case type.DELETE.REQUEST:
            return {
                ...state,
                loading: true
            }
        case type.CREATE.SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case type.CREATE.ERROR:
            return {
                ...state,
                loading: false,
            }
        case type.DELETE.REQUEST:
            return {
                ...state,
                loading: true
            }
        case type.DELETE.SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case type.DELETE.ERROR:
            return {
                ...state,
                loading: false,
            }
        case type.GETCITY.REQUEST:
            return {
                ...state,
                loading: true
            }
        case type.GETCITY.SUCCESS:
            return {
                ...state,
                city: action.data,
                loading: false,
            }
        case type.GETCITY.ERROR:
            return {
                ...state,
                loading: false,
            }
        default:
            return state
    }
}

export default reducer
