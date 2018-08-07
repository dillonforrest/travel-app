import { set } from 'lambdagrid-mfi';

const routes = {
  '^/login$': get('Layouts', 'layout', 'login'),
  '^/destinations$': get('Layouts', 'layout', 'main', {
    main: get('ReactViews', 'view', 'DestinationList')
  }),
  '^/destinations/([^/+])$': get('Layouts', 'layout', 'main', {
    main: get('ReactViews', 'view', 'DestinationDetail')
  })
};

set('UrlRouting', '404', get('ReactViews', 'view', 'PageNotFound'));
set('UrlRouting', 'routes', routes);
