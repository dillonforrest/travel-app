import { set } from 'lambdagrid-mfi';

const routes = {
  '^/login$': get('Layouts', 'layout', 'login'),
  '^/destinations$': get('Layouts', 'layout', 'main', {
    main: get('ReactViews', 'view', 'destinationList')
  }),
  '^/destinations/([^/+])$': get('Layouts', 'layout', 'main', {
    main: get('ReactViews', 'view', 'destinationDetail')
  })
};

set('UrlRouting', '404', get('ReactViews', 'view', 'pageNotFound'));
set('UrlRouting', 'routes', routes);
