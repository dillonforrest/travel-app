import { ping } from 'lambdagrid-mfi';

function updateDestinationList(state) {
  return ping('API', 'get service', 'main api', 'update destinations list', state.get('destinations'));
}

export const writers = {
  addDestination: updateDestinationList,
  removeDestination: updateDestinationList,
  updateDestination: updateDestinationList,
  toggleVisited: updateDestinationList,
}

function getDestinationList(state) {
  return ping('API', 'get service', 'main api', 'get destination list');
}

function getPictures(state, _, id) {
  return ping('API', 'get service', 'pic api', 'get pictures', state.get('destinations').find((d, i) => i == id && d.get('name'));
}

export const readers = [
  [
    () => ['destinations'],
    getDestinationList,
  ],
  [
    wildcard => ['destinations', wildcard, 'name'],
    getDestinationList,
  ],
  [
    wildcard => ['destinations', wildcard, 'pictures'],
    getPictures,
  ]
];
