import React from "react"
import Snackbar from "@material-ui/core/Snackbar"
import store from "../../store"
import { errorHide } from "../../actions/errorHide"

const SnackBar = props => {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }
    store.dispatch(errorHide())
  }
  const { error } = props
  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        open={error.isError}
        autoHideDuration={2000}
        onClose={handleClose}
        message={error.message}
      />
    </div>
  )
}
export default SnackBar
