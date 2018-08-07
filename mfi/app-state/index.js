import { ping } from 'lambdagrid-mfi';
import { fromJS } from 'immutable';
import updaters from './updaters.js';
import persisters from './persisters.js';

ping('AppState', 'set updaters', updaters);
ping('AppState', 'set storage', 'localStorage');
ping('AppState', 'set persisted paths', persisters);
ping('AppState', 'set initial state', fromJS({
  userAuth: {
    token: null,
    id: null,
  },
  destinations: [],
  newDestination: '',
}));
