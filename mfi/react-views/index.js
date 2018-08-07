import { set } from 'lambdagrid-mfi';
import React from 'react';
import {
  Button,
  FieldGroup,
  Checkbox,
} from 'lambdagrid-mfi/react-components';

function DestinationItem(props) {
  return (<li>
    <Checkbox checked={props.visited} onChange={props.toggleVisited}>
      <a href={`${props.currentPath}/${props.name}`}>{props.name}</a>
    </Checkbox>
  </li>);
}

function DestinationList(props) {
  return (<div>
    <ul>{props.listDestinations(DestinationItem)}</ul>
    <form onSubmit={props.onSubmit}>
      <FieldGroup
        id="newDestination"
        type="text"
        onChange={props.onNewDestinationChange}
        value={props.newDestination}
      />
    </form>
  </div>);
}

function DestinationPicture(props) {
  return <img src={props.src} />;
}

function DestinationDetail(props) {
  return (<div>
    <form onSubmit={props.onSubmit}>
      <FieldGroup
        id="name"
        type="text"
        label="Name"
        onChange={props.onExistingDestinationChange}
        value={props.name}
      />
      <Button type="submit">Update name</Button>
    </form>
    <div>
      <h2>Pictures</h2>
      {props.listPictures(DestinationPicture)}
    </div>
  </div>);
}

function PageNotFound() {
  return <h1>404 page not found!</h1>;
}

function Login(props) {
  return (<form onSubmit={props.onSubmit}>
    <FieldGroup
      id="name"
      type="text"
      label="Name"
    />
    <Button type="submit">Login</Button>
  </form>)
}

function LogoutButton(props) {
  return <Button onClick={props.onLogoutButtonClick}>Logout</Button>;
}

set('ReactViews', 'views', {
  DestinationList,
  DestinationDetail,
  PageNotFound,
  Login,
  LogoutButton,
});
