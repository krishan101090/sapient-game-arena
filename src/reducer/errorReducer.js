import { ERROR, ERROR_HIDE } from "../actionTypes"

const initialState = {
  isError: false,
  message: ""
}

export default function errorReducer(state = initialState, action) {
  switch (action.type) {
    case ERROR:
      return {
        ...state,
        ...action.payload
      }
    case ERROR_HIDE:
      return {
        ...initialState
      }
    default:
      return state
  }
}
