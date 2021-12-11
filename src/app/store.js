import { createStore } from 'redux';

const initialState = {
  data: "",
  token: "15e009885c84e521c7288c82cf7b3d3cddad3a22",
}

function todos(state = initialState, action) {
  switch (action.type) {
    case 'changeToken':
      return {...state, token: action.token};
    default:
      return state
  }
}

export const store = createStore(todos, initialState)