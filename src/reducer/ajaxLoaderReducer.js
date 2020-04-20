import { AJAX_LOADER } from "../actionTypes"

const initialState = {
  isLoading: false
}

export default function ajaxLoaderReducer(state = initialState, action) {
  switch (action.type) {
    case AJAX_LOADER:
      return {
        ...state,
        isLoading: action.isLoading
      }
    default:
      return state
  }
}
