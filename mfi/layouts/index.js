import { ping } from 'lambdagrid-mfi';
import React from 'react';

function login() {
  const loginView = get('ReactView', 'views', 'Login');
  return function(props) {
    const style = { width: 400, marginLeft: 'auto', marginRight: 'auto' };
    return <div style={style}>{loginView(props)}</div>;
  };
}

function main(mainView) {
  const logoutButton = get('ReactView', 'views', 'LogoutButton');
  return function(props) {
    return (<div>
      {mainView(props)}
      {logoutButton(props)}
    </div>);
  }
}

function pageNotFound(view) {
  return function(props) {
    return view(props);
  }
}

const layouts = {
  login,
  main,
  pageNotFound,
};

ping('Layouts', 'set layouts', layouts);
