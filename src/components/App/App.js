import React, { useEffect } from "react"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import { useDispatch, useSelector } from "react-redux"
import Routes from "../../Routes"
import SnackBar from "../SnackBar/SnackBar"
import { getGamesList } from "../../actions/getGamesList"
import LinearIndeterminate from "../Loader/Loader"

const theme = createMuiTheme({
  typography: {
    fontFamily: ['"Open Sans", sans-serif'].join(",")
  }
})

const App = () => {
  const error = useSelector(state => state.error)
  const isLoading = useSelector(state => state.loading.isLoading)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getGamesList())
  }, [dispatch])
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {isLoading && <LinearIndeterminate />}
      <SnackBar error={error} />
      <div className="App">
        <Routes />
      </div>
    </ThemeProvider>
  )
}

export default App
