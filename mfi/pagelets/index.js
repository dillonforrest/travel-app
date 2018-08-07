import { ping } from 'lambdagrid-mfi';

const toggleVisited = ping('AppState', 'get updater', 'toggleVisited');
const addDestination = ping('AppState', 'get updater', 'addDestination');
const updateDestination = ping('AppState', 'get updater', 'updateDestination');
const removeDestination = ping('AppState', 'get updater', 'removeDestination');
const cancelNewDestination = ping('AppState', 'get updater', 'cancelNewDestination');

function listDestinations(state) {
  return Item => state.get('destinations').map((d, i) => Item({
    visited: d.get('visited'),
    toggleVisited: () => toggleVisited(i),
    currentPath: d.get('currentPath'),
    name: d.get('name'),
    index: i,
    removeDestination: () => removeDestination(i),
  }));
}

function onNewDestinationKeyPress(state) {
  return e => e.keyCode === 27 ? cancelNewDestination() : updateNewDestination(e.target.value);
}

const DestinationList = ping('Pagelets', 'create pagelet', {
  isAuthorized: ping('AppState', 'get authorizer', 'loggedIn'),
  view: ping('ReactViews', 'get view', 'DestinationList'),
  transform: state => ({
    listDestinations: listDestinations(state),
    onSubmit: () => addDestination(state.get('newDestination')),
    newDestination: state.get('newDestination'),
    onNewDestinationKeyPress: onNewDestinationKeyPress(state),
  }),
});

function getId(path) {
  return path.match(/(\d+)$/)[0];
}

function listPictures(state) {
  const path = ['destinations', getId(state.get('currentPath')), 'pictures'];
  return (DestinationPicture) => state.get(path).map((pic, index) => DestinationPicture({
    src: pic.get('src'),
  })),
}

const DestinationDetail = ping('Pagelets', 'create pagelet', {
  isAuthorized: ping('AppState', 'get authorizer', 'loggedIn'),
  view: ping('ReactViews', 'get view', 'DestinationDetail'),
  transform: state => ({
    onSubmit: updateDestination(getId(state.get('currentPath'))),
    name: state.getIn(['destinations', getId(state.get('currentPath')), 'name']),
    listPictures: listPictures(['destinations', getId(state.get('currentPath')), 'pictures']),
  }),
});

ping('Pagelets', 'set pagelets', {
  DestinationList,
  DestinationDetail,
})
