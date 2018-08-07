import { set } from 'lambdagrid-mfi';
import { fromJS } from 'immutable';
import updaters from './updaters.js';
import persisters from './persisters.js';

set('AppState', 'updaters', updaters);
set('AppState', 'storage', 'localStorage');
set('AppState', 'persistedPaths', persisters);
set('AppState', 'initialState', fromJS({
  userAuth: {
    token: null,
    id: null,
  },
  destinations: []
}));
