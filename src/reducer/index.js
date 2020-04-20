import { combineReducers } from "redux"
import getGameListingReducer from "./getGameListingReducer"
import error from "./errorReducer"
import isLoading from "./ajaxLoaderReducer"

const rootReducer = combineReducers({
  gameList: getGameListingReducer,
  error,
  loading: isLoading
})

export default rootReducer
