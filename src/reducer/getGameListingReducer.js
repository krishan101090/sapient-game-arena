import { GET_GAMELIST_SUCCESS } from "../actionTypes"

const initialState = {
  gameList: []
}

export default function getGameListingReducer(state = initialState, action) {
  switch (action.type) {
    case GET_GAMELIST_SUCCESS:
      return {
        ...state,
        data: action.payload
      }
    default:
      return state
  }
}
