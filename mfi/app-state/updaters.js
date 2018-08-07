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

function updateDestination(state, index, updated) {
  return state.updateIn(['destinations', index, 'name'], () => updated);
}

function updateNewDestination(state, updated) {
  return state.update('newDestination', updated);
}

function cancelNewDestination(state) {
  return state.update('newDestination', '');
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
