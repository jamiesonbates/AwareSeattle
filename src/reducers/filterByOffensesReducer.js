export default function reducer(state={
  filterByOffenses: []
}, action) {

  switch (action.type) {
    case 'ADD_OFFENSE_TO_FILTER':
      const nextFilterByOffenses = state.filterByOffenses;

      nextFilterByOffenses.push(action.payload);

      return {
        ...state,
        filterByOffenses: nextFilterByOffenses
      }
    case 'REMOVE_OFFENSE_FROM_FILTER':
      const currentFilterByOffenses = state.filterByOffenses;

      const nextFilterFromOffenses = [];

      for (const offenseId of currentFilterByOffenses) {
        if (offenseId !== action.payload) {
          nextFilterFromOffenses.push(offenseId);
        }
      }

      return {
        ...state,
        filterByOffenses: nextFilterFromOffenses
      }
  }

  return state;
}
