import { all } from "redux-saga/effects"
import getGameListWatcher from "./getGameListSaga"

export default function* rootSaga() {
  yield all([getGameListWatcher()])
}
