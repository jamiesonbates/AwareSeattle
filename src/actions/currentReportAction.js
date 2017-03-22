export function setCurrentReport(report) {
  return function(dispatch) {
    dispatch({
      type: 'SET_CURRENT_REPORT',
      payload: report
    })
  }
}
