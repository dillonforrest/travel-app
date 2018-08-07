import { set } from 'lambdagrid-mfi';
import React from 'react';

function login(loginView) {
  return function(props) {
    const style = { width: 400, marginLeft: 'auto', marginRight: 'auto' };
    return <div style={style}>{loginView(props)}</div>;
  };
}

function main(mainView) {
  const logoutButton = get('ReactView', 'views', 'logoutButton');
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

set('Layouts', 'layouts', layouts);
