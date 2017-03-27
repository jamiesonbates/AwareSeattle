export default function reducer(state={
  offenseTypes: []
}, action) {

  switch (action.type) {
    case 'FETCH_OFFENSE_TYPES_SUCCESS':
      const offenseTypes = action.payload;
      const colors = ['#1E32D6', '#18A8D6', '#10CC38', '#83CC17', '#CCC214', '#CCA415', '#CC7D15', '#CC561B', '#CC3116', '#CC172A', '#CC24AB', '#801DCC'];

      const coloredOffenseTypes = offenseTypes.map(offense => {
        const color = colors.pop();

        offense.color = color;

        return offense;
      });

      return {
        ...state,
        offenseTypes: action.payload
      }
    case 'FETCH_OFFENSE_TYPES_FAILURE':
      return {
        ...state
      }
  }

  return state;
}
