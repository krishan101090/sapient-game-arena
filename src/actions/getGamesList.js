import { GET_GAMELIST_BEGIN, GET_GAMELIST_SUCCESS } from "../actionTypes"

export function getGamesList() {
  return {
    type: GET_GAMELIST_BEGIN
  }
}
export function getGamesListSuccess(payload) {
  return {
    type: GET_GAMELIST_SUCCESS,
    payload
  }
}
