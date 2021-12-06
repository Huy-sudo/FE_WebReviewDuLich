import { action_type as type } from "./action";

const initialState = {
  loading: false,
  data: [],
  comment: [],
  listpost: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case type.POSTDETAIL.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case type.POSTDETAIL.SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    case type.POSTDETAIL.ERROR:
      return {
        ...state,
        loading: false,
      };
    case type.GETCOMMENT.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case type.GETCOMMENT.SUCCESS:
      return {
        ...state,
        comment: action.data,
        loading: false,
      };
    case type.GETCOMMENT.ERROR:
      return {
        ...state,
        loading: false,
      };
    case type.POSTCOMMENT.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case type.POSTCOMMENT.SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case type.POSTCOMMENT.ERROR:
      return {
        ...state,
        loading: false,
      };
    case type.GETPOST.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case type.GETPOST.SUCCESS:
      return {
        ...state,
        listpost: action.data,
        loading: false,
      };
    case type.GETPOST.ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}

export default reducer;
