import { set } from 'lambdagrid-mfi';

const routes = {
  '^/login$': get('Layouts', 'login'),
  '^/destinations$': get('Layouts', 'main', {
    main: get('ReactViews', 'view', 'destinationList')
  }),
  '^/destinations/([^/+])$': get('Layouts', 'main', {
    main: get('ReactViews', 'view', 'destinationDetail')
  })
};

set('UrlRouting', '404', get('ReactViews', 'view', 'pageNotFound'));
set('UrlRouting', 'routes', routes);
