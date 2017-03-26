export function filterActiveReportsList(property, direction) {
  return function(dispatch, getState) {
    const state = getState();
    const activeReportsForList = state.policeReports.activeReportsForList;

    const nextActiveReportsForList = activeReportsForList.sort((a, b) => {
      return a[property] - b[property];
    });

    dispatch({
      type: 'SORT_REPORTS_LIST',
      payload: nextActiveReportsForList
    })
  }
}
