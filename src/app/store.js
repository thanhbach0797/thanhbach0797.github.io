import { createStore } from 'redux';

const initialState = {
  data: "",
  token: "6b2dd421bc760e973e154f301cf2b5b404e195ba",
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