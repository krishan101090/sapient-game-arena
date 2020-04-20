import { call, put, takeEvery } from "redux-saga/effects"
import { getCall } from "./api"
import { appUrl, BASE_URL } from "../constants/url"
import * as types from "../actionTypes"

function* getLoanReqList() {
  const { response, error } = yield call(
    getCall,
    `${`${BASE_URL}${appUrl.GAME_LISTING}`}`
  )
  if (response) {
    yield put({
      type: types.GET_GAMELIST_SUCCESS,
      payload: response
    })
  } else if (error) {
    yield put({
      type: types.ERROR,
      payload: { isError: true, message: "Server Error" }
    })
  }
}

export default function* getGameListWatcher() {
  yield takeEvery(types.GET_GAMELIST_BEGIN, getLoanReqList)
}
