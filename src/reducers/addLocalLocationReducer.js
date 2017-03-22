export default function reducer(state={
  localLocations: []
}, action) {
  switch (action.type) {
    case 'CREATE_LOCAL_LOCATION':
      const localLocations = state.localLocations;
      localLocations.push(action.payload);

      const nextLocalLocations = localLocations;

      return {
        ...state,
        localLocations: nextLocalLocations
      }
  }

  return state;
}
