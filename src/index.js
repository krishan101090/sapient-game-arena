import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import store from "./store/index"
import "./index.css"
import "./styles/Styles.scss"
import App from "./components/App/App"
import * as serviceWorker from "./serviceWorker"
import NetworkService from "./utils/network-service"

NetworkService.setupInterceptors(store)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
