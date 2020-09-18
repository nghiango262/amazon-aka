export const initState = {
  basket: [],
  user: null,
  
}



function reducer(state, action) {
  switch(action.type) {
    case 'ADD_TO_BASKET':
      //im-lement logic
      return {
        ...state,
        basket: [...state.basket, action.item]
      }

    case 'REMOVE_FROM_BASKET':

    break;

    default:
      return state;
  }
}

export default reducer;