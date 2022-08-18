export const ticketReducer = (state, action) => {
  switch (action.type) {
    case 'GET_TICKET':
      return action.payload;
    case 'CHANGE_STATE': {
      return {
        ...state,
        ticketsSimulation: action.payload,
      };
    }
    default:
      return state;
  }
};
