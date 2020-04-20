import { AJAX_LOADER } from "../actionTypes"

export default function ajaxLoader(bool) {
  return {
    type: AJAX_LOADER,
    isLoading: bool
  }
}
