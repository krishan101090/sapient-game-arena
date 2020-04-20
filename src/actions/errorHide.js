import { ERROR_HIDE, ERROR } from "../actionTypes"

export function errorHide() {
  return {
    type: ERROR_HIDE,
    isError: false,
    message: ""
  }
}

export function errorShow(msg) {
  return {
    type: ERROR,
    payload: {
      isError: true,
      message: msg
    }
  }
}
