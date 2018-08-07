import { fromJS } from 'immutable';

function storeLoginToken(state, token, id) {
  return state.set('userAuth', fromJS({ token, id }));
}

function addDestination(state, newDestName) {
  return state.update('destinations', dests => dests.push(fromJS(
    name: newDestName,
    visited: false,
  )));
}

function removeDestination(state, index) {
  return state.removeIn(['destinations', index]);
}

function toggleVisited(state, index) {
  return state.updateIn(['destinations', index, 'visited'], v => !v);
}

export default {
  storeLoginToken,
  addDestination,
  removeDestination,
  toggleVisited,
}
